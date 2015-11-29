using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactCards.Models
{
    public class Card
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public System.DateTime CreatedDate { get; set; }
        [Column(TypeName = "ntext")]
        public string Content { get; set; }

        //many-to-many mapper
        public ICollection<CardTag> CardTags { get; set; }

        //constructor (temp hack for EF)
        public Card()
        {
            CardTags = new List<CardTag>();
        }
    }
}
