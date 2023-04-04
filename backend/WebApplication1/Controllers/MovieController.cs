using Microsoft.AspNetCore.Mvc;
using WebApplication1.Controllers.Data;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable <Movie> Get()
        {
            return context.Movies.ToArray()
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title);
        }
    }
}
