using API.Models;
using API.Repository;

namespace API.Service
{
    public class PostsService
    {
        private PostsRepo _postsRepo;

        public PostsService()
        {
            _postsRepo = new PostsRepo(DataContext dataContext);
        }
        public List<Post> GetAllPosts()
        {
            var posts = new List<Post>();
            var posts = API.PostsRepo.GetAllPosts();
            return posts;
        }
    }
}
