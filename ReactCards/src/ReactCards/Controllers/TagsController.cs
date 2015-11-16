using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using ReactCards.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactCards.Controllers
{
    [Route("api/[controller]")]
    public class TagsController : Controller
    {
        [FromServices]
        public ICardsRepository CardsRepo { get; set; }

        // GET: api/tags
        [HttpGet]
        public IEnumerable<TagDTO> Get()
        {
            return CardsRepo.GetTags();
        }

        //// GET api/tags/5
        //[HttpGet("{id}")]
        //public Tag Get(int id)
        //{
        //    return CardsRepo.GetTagById(id);
        //}

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
