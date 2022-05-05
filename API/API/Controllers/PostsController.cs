using API.Helpers;
using API.Models;
using API.Repository;
using API.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostsService _postsService;
        private readonly JwtService _jwtService;


        public PostsController(IPostsService postsService, JwtService jwtService)
        {
            _postsService = postsService;
            _jwtService = jwtService;
        }



        [HttpGet]
        public async Task<ActionResult<List<Post>>> GetAll()
        {
            return Ok(await _postsService.GetAllPosts());

            //var jwt = Request.Cookies["JWT"];
            //var token = _jwtService.VerifyToken(jwt);
            ////var x = token.
            //if(token != null)
            //{
            //    return Ok();
            //}
            //else
            //{
            //    return Unauthorized();
            //}
                
            
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetPostById(Guid id)
        {
            var post = await _postsService.GetPostById(id);
            if (post == null)
            {
                return NotFound("post not found");
            }
            return Ok(post);
        }

        [HttpPost]
        public async Task<ActionResult<Post>> AddPost(Post post)
        {
            var addedPost = await _postsService.AddPost(post);
            

            return Ok(addedPost);
        }

        [HttpPut]
        public async Task<ActionResult<Post>> Put(Post editedPost)
        {
            var post = await _postsService.EditPost(editedPost);

            if (post == null)
            {
                return NotFound("post not found");
            }

            return Ok(post);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletePost(Guid id)
        {

            await _postsService.DeletePost(id);
            return Ok();
        }
    }
}
