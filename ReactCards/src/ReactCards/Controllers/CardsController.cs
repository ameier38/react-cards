using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using ReactCards.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactCards.Controllers
{
    [Route("api/[controller]")]
    public class CardsController : Controller
    {
        // GET: api/cards
        [HttpGet]
        public IEnumerable<CardDTO> Get([FromQuery] int? tagId, [FromServices] ICardsRepository CardsRepo)
        {
            if (tagId == null)
            {
                return CardsRepo.GetCards();
            }
            else
            {
                return CardsRepo.GetCardsByTagId((int)tagId);
            }
        }

        // GET api/cards/5
        [HttpGet("{cardId}")]
        public IActionResult Get(int cardId, [FromServices] ICardsRepository CardsRepo)
        {
            var card = CardsRepo.GetCardDetails(cardId);
            if (card == null)
            {
                return HttpNotFound();
            }
            return new ObjectResult(card);
        }

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
