
import React from 'react';

const News = () => {
  const featuredContent = {
    title: "The Royals",
    description: "Experience the dramatic world of modern monarchy where power, privilege, and passion collide in this compelling series about royal family dynamics.",
    image: "https://image.tmdb.org/t/p/original/4LrF5lohh4nP2PkZwpEqXhIhVnm.jpg",
    rating: "TV-MA",
    tag: "Recently added"
  };

  const content = {
    newOnNetflix: {
      title: "New on Netflix",
      items: [
        {
          title: "The Royals",
          image: "https://image.tmdb.org/t/p/w500/4LrF5lohh4nP2PkZwpEqXhIhVnm.jpg",
          tag: "New"
        },
        {
          title: "The Diplomat",
          image: "https://image.tmdb.org/t/p/w500/jv7lyPfBC1heKtQUxAJTvdXHUk2.jpg",
          tag: "Top 10"
        },
        {
          title: "Night Swim",
          image: "https://image.tmdb.org/t/p/w500/tLxjbT5ROZRwYcpNT3nfQbqkApk.jpg",
          tag: "New"
        },
        {
          title: "Dear Happiness",
          image: "https://image.tmdb.org/t/p/w500/znUYFf0Sez5lUmxPr3Bg9B1fkX9.jpg",
          tag: "New"
        },
        {
          title: "YOU",
          image: "https://image.tmdb.org/t/p/w500/yY4VhP7VPE0LwNlTJpvVX6bWYsA.jpg",
          tag: "New Season"
        },
        {
          title: "Bet",
          image: "https://image.tmdb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg",
          tag: "New"
        }
      ]
    },
    topShows: {
      title: "Top 10 TV Shows in India Today",
      items: [
        {
          title: "American Manhunt: Osama bin Laden",
          image: "https://image.tmdb.org/t/p/w500/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
          tag: "Recently added"
        },
        {
          title: "The Royals",
          image: "https://image.tmdb.org/t/p/w500/4LrF5lohh4nP2PkZwpEqXhIhVnm.jpg",
          tag: "Recently added"
        },
        {
          title: "Bet",
          image: "https://image.tmdb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg",
          tag: "Recently added"
        },
        {
          title: "Secrets We Keep",
          image: "https://image.tmdb.org/t/p/w500/kQs6keheMwCxJxrzV83VUwFtHkB.jpg",
          tag: "Recently added"
        },
        {
          title: "1884",
          image: "https://image.tmdb.org/t/p/w500/8Yv0tZv2LhtjQF7bGTxJtnSUBah.jpg",
          tag: "Recently added"
        },
        {
          title: "What Life Gives You",
          image: "https://image.tmdb.org/t/p/w500/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg",
          tag: "Recently added"
        }
      ]
    },
    comingThisWeek: {
      title: "Coming This Week",
      items: [
        {
          title: "Prom Queen",
          image: "https://image.tmdb.org/t/p/w500/tiIfz7pRPIvGBP9wBZzVAQkujHy.jpg",
          tag: "Coming Soon"
        },
        {
          title: "The Tylenol Murders",
          image: "https://image.tmdb.org/t/p/w500/kqF4qrE3rR4BHZxYwxZumVGzHqn.jpg",
          tag: "Coming Soon"
        },
        {
          title: "Sirens",
          image: "https://image.tmdb.org/t/p/w500/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg",
          tag: "Coming Soon"
        },
        {
          title: "The Aristocrat's Adventure",
          image: "https://image.tmdb.org/t/p/w500/8Yv0tZv2LhtjQF7bGTxJtnSUBah.jpg",
          tag: "Coming Soon"
        }
      ]
    }
  };

  const ContentRow = ({ category }) => (
    <div className="space-y-2 mb-8">
      <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">{category.title}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
        {category.items.map((item, index) => (
          <div 
            key={index} 
            className="relative aspect-[2/3] cursor-pointer transition duration-200 ease-out hover:scale-105 group"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="rounded-sm object-cover w-full h-full"
              loading="lazy"
            />
            {item.tag && (
              <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                {item.tag}
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xs sm:text-sm font-semibold line-clamp-2">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-black min-h-screen pb-10 sm:pb-20">
      {/* Featured Content Banner */}
      <div className="relative h-[60vh] sm:h-[56.25vw] max-h-[720px]">
        <img 
          src={featuredContent.image}
          alt={featuredContent.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-8 lg:p-16 space-y-2 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">{featuredContent.title}</h1>
          <p className="text-white text-xs sm:text-sm md:text-lg max-w-[50ch] line-clamp-3 sm:line-clamp-none">{featuredContent.description}</p>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded text-sm sm:text-base font-semibold hover:bg-white/90 transition">
              ▶ Play
            </button>
            <button className="bg-gray-500/70 text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded text-sm sm:text-base font-semibold hover:bg-gray-500/50 transition">
              ℹ More Info
            </button>
          </div>
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white bg-black/50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
            {featuredContent.rating}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-3 sm:px-4 md:px-8 lg:px-16 space-y-6 sm:space-y-8 mt-4">
        <ContentRow category={content.newOnNetflix} />
        <ContentRow category={content.topShows} />
        <ContentRow category={content.comingThisWeek} />
      </div>
    </div>
  );
};

export default News;