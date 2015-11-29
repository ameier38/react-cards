using System.Collections.Generic;

namespace ReactCards.Models
{
    public interface ICardsRepository
    {
        IEnumerable<CardDTO> GetCards();
        CardDetailDTO GetCardDetails(int cardId);
        IEnumerable<CardDTO> GetCardsByTagId(int tagId);
        IEnumerable<TagDTO> GetTags();
    }
}
