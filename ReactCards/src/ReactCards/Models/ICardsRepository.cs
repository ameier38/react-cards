using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCards.Models
{
    public interface ICardsRepository
    {
        IEnumerable<CardDTO> GetCards();
        IEnumerable<CardDTO> GetCardsByTagId(int tagId);
        IEnumerable<TagDTO> GetTags();
    }
}
