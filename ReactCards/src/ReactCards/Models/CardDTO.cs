using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCards.Models
{
    public class CardDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string CreatedDate { get; set; }
        public string Path { get; set; }
        public List<TagDTO> Tags { get; set; }
    }
}
