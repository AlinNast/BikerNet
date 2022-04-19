using API.Models;
using API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace API.Service
{
    public class PostsService : IPostsService
    {
        private readonly IPostsRepository _postsRepo;

        public PostsService(IPostsRepository postsRepo)
        {
            _postsRepo = postsRepo;
        }
        public async Task<List<Post>> GetAllPosts()
        {
            var posts = await _postsRepo.GetAll();
            return posts;
        }

        public async Task<Post> GetPostById(Guid id)
        {
            var posts = await _postsRepo.GetAll();
            var post = posts.Find(x => x.Id == id);
            if (post == null) { return null; }
            return post;
        }
    }
}
