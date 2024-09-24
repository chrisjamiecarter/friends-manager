using FriendsManager.Api.Installers;
using FriendsManager.Application.Installers;
using FriendsManager.Infrastructure.Installers;

namespace FriendsManager.Api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddApi();
        builder.Services.AddApplication();
        builder.Services.AddInfrastructure(builder.Configuration);
                
        var app = builder.Build();
        app.AddMiddleware();
        app.SetUpDatabase();

        app.Run();
    }
}
