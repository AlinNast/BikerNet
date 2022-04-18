using API.Models;

namespace API.Repository
{
    public class PostsRepo
    {
        private readonly DataContext _dataContext;

        public PostsRepo(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public List<Post> GetAllPosts()
        {
            return _dataContext.Posts.ToList();
        }
    }
}
