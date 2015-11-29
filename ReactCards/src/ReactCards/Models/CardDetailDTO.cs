﻿using System.Collections.Generic;

namespace ReactCards.Models
{
    public class CardDetailDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string CreatedDate { get; set; }
        public string Content { get; set; }
        public List<TagDTO> Tags { get; set; }
    }
}
