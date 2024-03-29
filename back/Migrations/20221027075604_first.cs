﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back.Migrations
{
    public partial class first : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserSurname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserPassword = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "UserEmail", "UserName", "UserPassword", "UserSurname" },
                values: new object[] { "1", "ridvan@gmail.com", "Rıdvan", "123", "Aktepe" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "UserEmail", "UserName", "UserPassword", "UserSurname" },
                values: new object[] { "2", "esra@gmail.com", "Esra", "321", "Aktepe" });

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserId",
                table: "Users",
                column: "UserId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
