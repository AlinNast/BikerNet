using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Repository
{
    public class PostsRepository : IPostsRepository
    {
        private readonly DataContext _dataContext;

        public PostsRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<Post>> GetAll()
        {
            var posts = await _dataContext.Posts.ToListAsync();
            return posts;
        }

        public void AddPost(Post post)
        {
            _dataContext.Posts.Add(post);
            _dataContext.SaveChanges();
        }
    }
}
