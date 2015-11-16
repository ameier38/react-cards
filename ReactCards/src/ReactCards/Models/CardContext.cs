using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace ReactCards.Models
{
    public class CardContext : DbContext
    {
        public CardContext()
        {
            Database.EnsureCreated();
        }

        public DbSet<Card> Cards { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<CardTag> CardTags { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //add composite key to CardsTags
            modelBuilder.Entity<CardTag>().HasKey(x => new { x.CardId, x.TagId });
        }
    }
}
