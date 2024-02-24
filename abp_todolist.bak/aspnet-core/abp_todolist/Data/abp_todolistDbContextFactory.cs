using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace abp_todolist.Data;

public class abp_todolistDbContextFactory : IDesignTimeDbContextFactory<abp_todolistDbContext>
{
    public abp_todolistDbContext CreateDbContext(string[] args)
    {

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<abp_todolistDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new abp_todolistDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
