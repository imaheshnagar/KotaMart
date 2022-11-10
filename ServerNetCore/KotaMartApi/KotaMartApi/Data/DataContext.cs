using KotaMartApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace KotaMartApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> KmUser { get; set; }
    }
}
