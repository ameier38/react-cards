using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;
using System.Web;
using Microsoft.AspNet.Mvc;

namespace ReactCards.Models
{
    public class CardsRepository : ICardsRepository
    {
        private CardContext _context;
        public CardsRepository(CardContext context)
        {
            _context = context;
        }

        public IEnumerable<CardDTO> GetCards()
        {
            var cards = _context.Cards.Include(c => c.CardTags).ThenInclude(ct => ct.Tag);
            var cardDTOs = cards.Select(c => new CardDTO()
            {
                Id = c.Id,
                Title = c.Title,
                Summary = c.Summary,
                CreatedDate = c.CreatedDate.ToString("MMMM dd, yyyy"),
                Path = c.Path,
                Tags = c.CardTags.Select(ct => new TagDTO()
                {
                    Id = ct.Tag.Id,
                    Name = ct.Tag.Name
                }).ToList()
            });
            return cardDTOs;
        }

        public IEnumerable<CardDTO> GetCardsByTagId(int tagId)
        {
            var cards = _context.Cards.Include(c => c.CardTags).ThenInclude(ct => ct.Tag)
                                        .Where(c => c.CardTags.Any(ct => ct.TagId == tagId))
                                        .Select(c => new CardDTO()
                                        {
                                            Id = c.Id,
                                            Title = c.Title,
                                            Summary = c.Summary,
                                            CreatedDate = c.CreatedDate.ToString("MMMM dd, yyyy"),
                                            Path = c.Path,
                                            Tags = c.CardTags.Select(ct => new TagDTO()
                                            {
                                                Id = ct.Tag.Id,
                                                Name = ct.Tag.Name
                                            }).ToList()
                                        });
            return cards;
        }

        public IEnumerable<TagDTO> GetTags()
        {
            return _context.Tags.Select(t => new TagDTO()
            {
                Id = t.Id,
                Name = t.Name
            });
        }
    }
}
