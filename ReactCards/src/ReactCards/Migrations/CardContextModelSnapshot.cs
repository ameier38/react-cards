using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using ReactCards.Models;

namespace ReactCards.Migrations
{
    [DbContext(typeof(CardContext))]
    partial class CardContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc2-16332")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ReactCards.Models.Card", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Path");

                    b.Property<string>("Summary");

                    b.Property<string>("Title");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("ReactCards.Models.CardTag", b =>
                {
                    b.Property<int>("CardId");

                    b.Property<int>("TagId");

                    b.HasKey("CardId", "TagId");
                });

            modelBuilder.Entity("ReactCards.Models.Tag", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("ReactCards.Models.CardTag", b =>
                {
                    b.HasOne("ReactCards.Models.Card")
                        .WithMany()
                        .HasForeignKey("CardId");

                    b.HasOne("ReactCards.Models.Tag")
                        .WithMany()
                        .HasForeignKey("TagId");
                });
        }
    }
}
