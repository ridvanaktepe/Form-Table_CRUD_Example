using Microsoft.EntityFrameworkCore;
using back.Database.Concrete;
using back.Database.Abstract;
using back.business.Abstract;
using back.business.Concrete;


var builder = WebApplication.CreateBuilder(args);

//added by me ----------------------------------------------------------------------
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy => { policy.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod(); });
});
 
//added by me ----------------------------------------------------------------------
IConfiguration _configuration = builder.Configuration;


// Add services to the container.
builder.Services.AddControllers();

//added by me -----------------------------------------------------------------------
builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(_configuration.GetConnectionString("MsSqlConnection")));

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

builder.Services.AddScoped<IUserManager, UserManager>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

//added by me ----------------------------------------------------------------------
app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
