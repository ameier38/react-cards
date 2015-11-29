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
                Title = "Car Loans",
                Summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit venenatis arcu vitae ultricies. Proin ut sagittis libero. Sed cursus porttitor lorem, nec mattis augue tempor in. Proin elit metus, porttitor finibus lacinia id, malesuada et mi. In mattis arcu nec laoreet eleifend.",
                CreatedDate = new DateTime(2015, 11, 15),
                Content = @"
                <p>Lorem ipsum dolor sit amet, nonumes voluptatum mel ea, cu case ceteros cum. Novum commodo malorum vix ut. Dolores consequuntur in ius, sale electram dissentiunt quo te. Cu duo omnes invidunt, eos eu mucius fabellas. Stet facilis ius te, quando voluptatibus eos in. Ad vix mundi alterum, integre urbanitas intellegam vix in.</p>
                <p>Eum facete intellegat ei, ut mazim melius usu. Has elit simul primis ne, regione minimum id cum. Sea deleniti dissentiet ea. Illud mollis moderatius ut per, at qui ubique populo. Eum ad cibo legimus, vim ei quidam fastidii.</p>
                <p>Quo debet vivendo ex. Qui ut admodum senserit partiendo. Id adipiscing disputando eam, sea id magna pertinax concludaturque. Ex ignota epicurei quo, his ex doctus delenit fabellas, erat timeam cotidieque sit in. Vel eu soleat voluptatibus, cum cu exerci mediocritatem. Malis legere at per, has brute putant animal et, in consul utamur usu.</p>
                <p>Te has amet modo perfecto, te eum mucius conclusionemque, mel te erat deterruisset. Duo ceteros phaedrum id, ornatus postulant in sea. His at autem inani volutpat. Tollit possit in pri, platonem persecuti ad vix, vel nisl albucius gloriatur no.</p>
                <p>Ea duo atqui incorrupte, sed rebum regione suscipit ex, mea ex dicant percipit referrentur. Dicat luptatum constituam vix ut. His vide platonem omittantur id, vel quis vocent an. Ad pro inani zril omnesque. Mollis forensibus sea an, vim habeo adipisci contentiones ad, tale autem graecis ne sit.</p>"
            };
            Card c2 = new Card()
            {
                Title = "Gym Fees",
                Summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit venenatis arcu vitae ultricies. Proin ut sagittis libero. Sed cursus porttitor lorem, nec mattis augue tempor in. Proin elit metus, porttitor finibus lacinia id, malesuada et mi. In mattis arcu nec laoreet eleifend.",
                CreatedDate = new DateTime(2015, 11, 15),
                Content = @"
                <p>Lorem ipsum dolor sit amet, nonumes voluptatum mel ea, cu case ceteros cum. Novum commodo malorum vix ut. Dolores consequuntur in ius, sale electram dissentiunt quo te. Cu duo omnes invidunt, eos eu mucius fabellas. Stet facilis ius te, quando voluptatibus eos in. Ad vix mundi alterum, integre urbanitas intellegam vix in.</p>
                <p>Eum facete intellegat ei, ut mazim melius usu. Has elit simul primis ne, regione minimum id cum. Sea deleniti dissentiet ea. Illud mollis moderatius ut per, at qui ubique populo. Eum ad cibo legimus, vim ei quidam fastidii.</p>
                <p>Quo debet vivendo ex. Qui ut admodum senserit partiendo. Id adipiscing disputando eam, sea id magna pertinax concludaturque. Ex ignota epicurei quo, his ex doctus delenit fabellas, erat timeam cotidieque sit in. Vel eu soleat voluptatibus, cum cu exerci mediocritatem. Malis legere at per, has brute putant animal et, in consul utamur usu.</p>
                <p>Te has amet modo perfecto, te eum mucius conclusionemque, mel te erat deterruisset. Duo ceteros phaedrum id, ornatus postulant in sea. His at autem inani volutpat. Tollit possit in pri, platonem persecuti ad vix, vel nisl albucius gloriatur no.</p>
                <p>Ea duo atqui incorrupte, sed rebum regione suscipit ex, mea ex dicant percipit referrentur. Dicat luptatum constituam vix ut. His vide platonem omittantur id, vel quis vocent an. Ad pro inani zril omnesque. Mollis forensibus sea an, vim habeo adipisci contentiones ad, tale autem graecis ne sit.</p>"
            };
            Card c3 = new Card()
            {
                Title = "Self Powered Cars",
                Summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit venenatis arcu vitae ultricies. Proin ut sagittis libero. Sed cursus porttitor lorem, nec mattis augue tempor in. Proin elit metus, porttitor finibus lacinia id, malesuada et mi. In mattis arcu nec laoreet eleifend.",
                CreatedDate = new DateTime(2015, 11, 15),
                Content = @"
                <p>Lorem ipsum dolor sit amet, nonumes voluptatum mel ea, cu case ceteros cum. Novum commodo malorum vix ut. Dolores consequuntur in ius, sale electram dissentiunt quo te. Cu duo omnes invidunt, eos eu mucius fabellas. Stet facilis ius te, quando voluptatibus eos in. Ad vix mundi alterum, integre urbanitas intellegam vix in.</p>
                <p>Eum facete intellegat ei, ut mazim melius usu. Has elit simul primis ne, regione minimum id cum. Sea deleniti dissentiet ea. Illud mollis moderatius ut per, at qui ubique populo. Eum ad cibo legimus, vim ei quidam fastidii.</p>
                <p>Quo debet vivendo ex. Qui ut admodum senserit partiendo. Id adipiscing disputando eam, sea id magna pertinax concludaturque. Ex ignota epicurei quo, his ex doctus delenit fabellas, erat timeam cotidieque sit in. Vel eu soleat voluptatibus, cum cu exerci mediocritatem. Malis legere at per, has brute putant animal et, in consul utamur usu.</p>
                <p>Te has amet modo perfecto, te eum mucius conclusionemque, mel te erat deterruisset. Duo ceteros phaedrum id, ornatus postulant in sea. His at autem inani volutpat. Tollit possit in pri, platonem persecuti ad vix, vel nisl albucius gloriatur no.</p>
                <p>Ea duo atqui incorrupte, sed rebum regione suscipit ex, mea ex dicant percipit referrentur. Dicat luptatum constituam vix ut. His vide platonem omittantur id, vel quis vocent an. Ad pro inani zril omnesque. Mollis forensibus sea an, vim habeo adipisci contentiones ad, tale autem graecis ne sit.</p>"
            };
            Tag t1 = new Tag() { Name = "cars" };
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
                    CardId = c1.Id,
                    TagId = t2.Id
                });
                _ctx.CardTags.Add(new CardTag()
                {
                    CardId = c2.Id,
                    TagId = t2.Id
                });
                _ctx.CardTags.Add(new CardTag()
                {
                    CardId = c2.Id,
                    TagId = t3.Id
                });
                _ctx.CardTags.Add(new CardTag()
                {
                    CardId = c3.Id,
                    TagId = t3.Id
                });
                _ctx.CardTags.Add(new CardTag()
                {
                    CardId = c3.Id,
                    TagId = t1.Id
                });
            }

            _ctx.SaveChanges();

        }
    }
}