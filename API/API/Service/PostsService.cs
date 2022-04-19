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

        public async Task<Post> GetPostById(int id)
        {
            var posts = await _postsRepo.GetAll();
            return new Post();
        }
    }
}
