using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back.Models;

namespace back.Database.Concrete
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User>? Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
            .HasIndex(p => new { p.UserId })
            .IsUnique(true);

            modelBuilder.Entity<User>().HasData(
                new User() { UserId = 1, UserName = "Rıdvan", UserSurname = "Aktepe", UserEmail = "ridvan@gmail.com", UserDate = "1992-08-03" },
                new User() { UserId = 2, UserName = "Esra", UserSurname = "Aktepe", UserEmail = "esra@gmail.com", UserDate = "1992-01-30" }
            );
        }

    }
}