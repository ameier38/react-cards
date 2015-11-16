using System;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCards.Models
{
    public class SampleData
    {
        private CardContext _ctx;

        public SampleData(CardContext ctx)
        {
            _ctx = ctx;
        }

        public void InitializeData()
        {
            CreateCards();
        }

        private void CreateCards()
        {
            Card c1 = new Card()
            {
                Title = "Car Card",
                Summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit venenatis arcu vitae ultricies. Proin ut sagittis libero. Sed cursus porttitor lorem, nec mattis augue tempor in. Proin elit metus, porttitor finibus lacinia id, malesuada et mi. In mattis arcu nec laoreet eleifend.",
                CreatedDate = new DateTime(2015,11,15),
                Path = "car_card"
            };
            Card c2 = new Card()
            {
                Title = "Finance Card",
                Summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit venenatis arcu vitae ultricies. Proin ut sagittis libero. Sed cursus porttitor lorem, nec mattis augue tempor in. Proin elit metus, porttitor finibus lacinia id, malesuada et mi. In mattis arcu nec laoreet eleifend.",
                CreatedDate = new DateTime(2015, 11, 15),
                Path = "finance_card"
            };
            Card c3 = new Card()
            {
                Title = "Fitness Card",
                Summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit venenatis arcu vitae ultricies. Proin ut sagittis libero. Sed cursus porttitor lorem, nec mattis augue tempor in. Proin elit metus, porttitor finibus lacinia id, malesuada et mi. In mattis arcu nec laoreet eleifend.",
                CreatedDate = new DateTime(2015, 11, 15),
                Path = "fitness_card"
            };
            Tag t1 = new Tag(){ Name = "cars"};
            Tag t2 = new Tag() { Name = "finance" };
            Tag t3 = new Tag() { Name = "fitness" };

            //add cards first
            if (!_ctx.Cards.Any())
            {
                _ctx.Cards.Add(c1);
                _ctx.Cards.Add(c2);
                _ctx.Cards.Add(c3);
            }

            //add tags next
            if (!_ctx.Tags.Any())
            {
                _ctx.Tags.Add(t1);
                _ctx.Tags.Add(t2);
                _ctx.Tags.Add(t3);
            }

            //save changes beofore adding CardsTags to avoid FK contraint issues
            _ctx.SaveChanges();

            //add cardstags last
            if (!_ctx.CardTags.Any())
            {
                _ctx.CardTags.Add(new CardTag()
                {
                    CardId = c1.Id,
                    TagId = t1.Id
                });
                _ctx.CardTags.Add(new CardTag()
                {
                    CardId = c2.Id,
                    TagId = t2.Id
                });
                _ctx.CardTags.Add(new CardTag()
                {
                    CardId = c3.Id,
                    TagId = t3.Id
                });
            }

            _ctx.SaveChanges();

        }
    }
}