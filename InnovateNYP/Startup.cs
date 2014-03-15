using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(InnovateNYP.Startup))]
namespace InnovateNYP
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
