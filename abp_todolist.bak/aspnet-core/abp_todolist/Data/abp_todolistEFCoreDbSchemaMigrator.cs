using Microsoft.EntityFrameworkCore;
using Volo.Abp.DependencyInjection;

namespace abp_todolist.Data;

public class abp_todolistEFCoreDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public abp_todolistEFCoreDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the abp_todolistDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<abp_todolistDbContext>()
            .Database
            .MigrateAsync();
    }
}
