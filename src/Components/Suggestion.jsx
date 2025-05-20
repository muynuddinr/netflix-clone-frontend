import { useState, useRef } from 'react';

const Suggestion = () => {
  const [suggestions] = useState({
    blockbusterMovies: {
      title: "Blockbuster Movies",
      items: [
        {
          title: "Kraven the Hunter",
          image: "https://image.tmdb.org/t/p/w500/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
          tag: "New"
        },
        {
          title: "The Meg",
          image: "https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg"
        },
        {
          title: "The Greatest of All Time",
          image: "https://image.tmdb.org/t/p/w500/kQs6keheMwCxJxrzV83VUwFtHkB.jpg"
        },
        {
          title: "Kalki",
          image: "https://image.tmdb.org/t/p/w500/jGKCpt3zzbGZbgoza6HUb5P2pz3.jpg"
        },
        {
          title: "Salaar",
          image: "https://image.tmdb.org/t/p/w500/9xvEhUqR8e6cJgutwV7UD4lOhHy.jpg"
        },
        {
          title: "Indian 2",
          image: "https://image.tmdb.org/t/p/w500/7rz3Q2MYYqHtGxSPe1owwwrOtFA.jpg"
        }
      ]
    },
    becauseYouWatched: {
      title: "Because you watched The Railway Men - The Untold Story Of Bhopal 1984",
      items: [
        {
          title: "The Royals",
          image: "https://image.tmdb.org/t/p/w500/4LrF5lohh4nP2PkZwpEqXhIhVnm.jpg",
          tag: "Recently added"
        },
        {
          title: "The Diplomat",
          image: "https://image.tmdb.org/t/p/w500/jv7lyPfBC1heKtQUxAJTvdXHUk2.jpg",
          tag: "Recently added"
        },
        {
          title: "Lucky Baskhar",
          image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
        },
        {
          title: "Court",
          image: "https://image.tmdb.org/t/p/w500/zQnvqEZHHVGgYCFHE8ARJxJEKvL.jpg"
        },
        {
          title: "Delhi Crime",
          image: "https://image.tmdb.org/t/p/w500/ym2vKqNrAzH8FeZ0tZKMBxJkGXR.jpg"
        },
        {
          title: "IC 814",
          image: "https://image.tmdb.org/t/p/w500/8Yv0tZv2LhtjQF7bGTxJtnSUBah.jpg"
        }
      ]
    },
    continueWatching: {
      title: "Continue Watching for muynuddinr",
      items: [
        {
          title: "Black Clover",
          image: "https://image.tmdb.org/t/p/w500/5ZqKgezwwpYLqkHpWDV5ZVrCz0G.jpg",
          progress: 45
        },
        {
          title: "CID",
          image: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
          progress: 70,
          tag: "New Episode"
        },
        {
          title: "Khel Khel Mein",
          image: "https://image.tmdb.org/t/p/w500/pWsRu8eAYYe6WN9I4DJsNGIV5FS.jpg",
          progress: 30
        },
        {
          title: "IT",
          image: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
          progress: 55
        },
        {
          title: "PK",
          image: "https://image.tmdb.org/t/p/w500/6lgk0Yj5iLvjPLp5YgTCbB7DPTL.jpg",
          progress: 80
        },
        {
          title: "Devara",
          image: "https://image.tmdb.org/t/p/w500/yKMsxAIqHo5kcVJvLBNnXGe41Yd.jpg",
          progress: 25
        }
      ]
    },
    eastAsianTVComedies: {
      title: "East Asian TV Comedies",
      items: [
        {
          title: "Queen of Tears",
          image: "https://image.tmdb.org/t/p/w500/2akQNQN7fmqWq6jYJMB3UNSQxJ1.jpg"
        },
        {
          title: "Vincenzo",
          image: "https://image.tmdb.org/t/p/w500/dvXJgEDQXhL9Ouot2WkBHpQiHGd.jpg"
        },
        {
          title: "My Demon",
          image: "https://image.tmdb.org/t/p/w500/pZuGxJnRKJuVjGsCxN0jki6Qb6v.jpg"
        },
        {
          title: "King the Land",
          image: "https://image.tmdb.org/t/p/w500/wYwONXkOsJC9gkF2YJIgGVxSuBb.jpg"
        },
        {
          title: "Business Proposal",
          image: "https://image.tmdb.org/t/p/w500/pVHgv6leUqdT3SD2a1bNxQoEWZD.jpg"
        },
        {
          title: "It's Okay to Not Be Okay",
          image: "https://image.tmdb.org/t/p/w500/42cFVw2hYdDO0p4VZkLjKJc8qzQ.jpg"
        }
      ]
    },
    trendingNow: {
      title: "Trending Now",
      items: [
        {
          title: "Squid Game",
          image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
          tag: "Top 10"
        },
        {
          title: "Bridgerton",
          image: "https://image.tmdb.org/t/p/w500/6A5D5bJP2y2aYpOYJPLJXF4xXUK.jpg"
        },
        {
          title: "Money Heist",
          image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
        },
        {
          title: "Stranger Things",
          image: "https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"
        },
        {
          title: "The Witcher",
          image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"
        },
        {
          title: "Peaky Blinders",
          image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
        }
      ]
    },
    popularDocumentaries: {
      title: "Popular Documentaries",
      items: [
        {
          title: "Our Planet",
          image: "https://image.tmdb.org/t/p/w500/wRSnArnQBmeUYb5GWDU595uHt84.jpg"
        },
        {
          title: "Tiger King",
          image: "https://image.tmdb.org/t/p/w500/pmjYMCnKtYAHZrRnpKlmDSvRHZJ.jpg"
        },
        {
          title: "Making a Murderer",
          image: "https://image.tmdb.org/t/p/w500/tF7DZbYZ9jFR0AGR7PaNhQgGRcQ.jpg"
        },
        {
          title: "The Last Dance",
          image: "https://image.tmdb.org/t/p/w500/oVf4xGGbDtwVHiKn8uTuSriY7PH.jpg"
        },
        {
          title: "Formula 1: Drive to Survive",
          image: "https://image.tmdb.org/t/p/w500/hZZpqv9bwgFBF1LslVQZANXgb49.jpg"
        },
        {
          title: "Chef's Table",
          image: "https://image.tmdb.org/t/p/w500/tARLEgvOvTHNVwpnQWfT1HqgJQI.jpg"
        }
      ]
    },
    awardWinningFilms: {
      title: "Award-Winning Films",
      items: [
        {
          title: "Parasite",
          image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
        },
        {
          title: "The Irishman",
          image: "https://image.tmdb.org/t/p/w500/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg"
        },
        {
          title: "Roma",
          image: "https://image.tmdb.org/t/p/w500/dtBCYQxoGwUxkIIh4PJPzCPRyaY.jpg"
        },
        {
          title: "Marriage Story",
          image: "https://image.tmdb.org/t/p/w500/pZekG6xabTmZxjmYw10wN84Hp8d.jpg"
        },
        {
          title: "The Power of the Dog",
          image: "https://image.tmdb.org/t/p/w500/kEy48iCzGnp0ao1cZbNeWR6yIhC.jpg"
        },
        {
          title: "Mank",
          image: "https://image.tmdb.org/t/p/w500/1VF9IcI4Vyrd2oYrVp0oNuPeE70.jpg"
        }
      ]
    }
  });

  // Create refs for each row to enable horizontal scrolling
  const rowRefs = {
    blockbusterMovies: useRef(null),
    becauseYouWatched: useRef(null),
    continueWatching: useRef(null),
    eastAsianTVComedies: useRef(null),
    trendingNow: useRef(null),
    popularDocumentaries: useRef(null),
    awardWinningFilms: useRef(null)
  };

  // Function to scroll the row left or right
  const scroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      
      ref.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  // Modify the ContentRow component styling
  const ContentRow = ({ category, rowRef }) => (
    <div className="space-y-2 relative group">
      <h2 className="text-white text-xl md:text-2xl font-medium px-4 md:px-16">{category.title}</h2>
      <div className="relative">
        <div 
          ref={rowRef}
          className="flex gap-4 md:gap-6 overflow-x-scroll scrollbar-hide scroll-smooth p-4 md:px-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {category.items.map((item, index) => (
            <div 
              key={index} 
              className="relative flex-none min-w-[180px] h-[130px] md:min-w-[260px] md:h-[170px] rounded overflow-hidden cursor-pointer transition-all duration-300 ease-in-out origin-center group/item hover:scale-[1.15] hover:z-30 hover:delay-300"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {item.tag && (
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  {item.tag}
                </div>
              )}
              {item.progress !== undefined && (
                <div className="absolute bottom-0 w-full group-hover/item:opacity-0 transition-opacity duration-200">
                  <div className="bg-gradient-to-t from-black/90 to-transparent p-3">
                    <p className="text-white text-sm font-medium mb-1">{item.title}</p>
                    <div className="h-1 bg-gray-600/50 rounded">
                      <div 
                        className="h-full bg-red-600 rounded"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/40 transition-all duration-200">
                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover/item:translate-y-0 transition-transform duration-300 ease-in-out delay-200">
                  <div className="flex flex-col gap-2">
                    <p className="text-white text-sm font-medium">{item.title}</p>
                    <div className="flex items-center gap-2">
                      <button className="bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center hover:bg-white/80">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
                        </svg>
                      </button>
                      <button className="border border-white rounded-full p-1 w-8 h-8 flex items-center justify-center text-white hover:border-white/80 hover:text-white/80">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M12 5V19M5 12H19" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <button className="ml-auto border border-white rounded-full p-1 w-8 h-8 flex items-center justify-center text-white hover:border-white/80 hover:text-white/80">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20 hover:bg-black/80"
          onClick={() => scroll(rowRef, 'left')}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20 hover:bg-black/80"
          onClick={() => scroll(rowRef, 'right')}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );

  // Update the main container styles
  return (
    <div className="min-h-screen bg-[#141414] pb-20">
      <div className="px-0 sm:px-4 md:px-16 mt-4 sm:mt-6 space-y-4 sm:space-y-8">
        {/* Continue Watching Section (Always at the top for easy access) */}
        <ContentRow 
          category={suggestions.continueWatching} 
          rowRef={rowRefs.continueWatching} 
        />
        
        {/* Trending Now Section */}
        <ContentRow 
          category={suggestions.trendingNow} 
          rowRef={rowRefs.trendingNow} 
        />
        
        {/* Blockbuster Movies Section */}
        <ContentRow 
          category={suggestions.blockbusterMovies} 
          rowRef={rowRefs.blockbusterMovies} 
        />
        
        {/* Because You Watched Section */}
        <ContentRow 
          category={suggestions.becauseYouWatched} 
          rowRef={rowRefs.becauseYouWatched} 
        />
        
        {/* East Asian TV Comedies Section */}
        <ContentRow 
          category={suggestions.eastAsianTVComedies} 
          rowRef={rowRefs.eastAsianTVComedies} 
        />
        
        {/* Popular Documentaries Section */}
        <ContentRow 
          category={suggestions.popularDocumentaries} 
          rowRef={rowRefs.popularDocumentaries} 
        />
        
        {/* Award-Winning Films Section */}
        <ContentRow 
          category={suggestions.awardWinningFilms} 
          rowRef={rowRefs.awardWinningFilms} 
        />
      </div>
    </div>
  );
};

export default Suggestion;