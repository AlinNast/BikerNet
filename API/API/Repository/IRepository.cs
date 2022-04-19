using API.Models;

namespace API.Repository
{
    public interface IPostsRepository
    {
        public Task<List<Post>> GetAll();
    }
}
