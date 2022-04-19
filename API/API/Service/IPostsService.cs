using API.Models;

namespace API.Service
{
    public interface IPostsService
    {
        Task<List<Post>> GetAllPosts();

        Task<Post> GetPostById(Guid id);

        Task<Post> AddPost(Post post);
        Task<Post> EditPost(Post editedPost);
    }
}
