using API.Models;

namespace API.Repository
{
    public interface IPostsRepository
    {
        Task<List<Post>> GetAll();

        void AddPost(Post post);
    }
}
