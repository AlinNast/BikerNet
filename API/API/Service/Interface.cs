using API.Models;

namespace API.Service
{
    public interface IPostsService
    {
        Task<List<Post>> GetAllPosts();
    }
}
