import { useState, useRef } from 'react';

const Suggestion = () => {
  const [suggestions] = useState({
    blockbusterMovies: {
      title: "Blockbuster Movies",
      items: [
        {
          title: "All of us Are Dead",
          image: "Home/all of us are dead.jpg",
          tag: "New"
        },
        {
          title: "Animal",
          image: "Home/animal.webp",
        },
        {
          title: "Bloodhounds",
          image: "Home/bloodhounds.jpg",
        },
        {
          title: "crash landing on you",
          image: "Home/crash landind on you.jpg",
          
        },
        {
          title: "Dabba cartel",
          image: "Home/dabba cartel.jpg",
        },
        {
          title: "Deva",
          image: "Home/deva.webp",
        }
      ]
    },
    becauseYouWatched: {
      title: "Because you watched The Railway Men - The Untold Story Of Bhopal 1984",
      items: [
        {
          title: "Do Patti",
          image: "Home/do patti.jpg",
          tag: "Recently added"
        },
        {
          title: "Gunjan Saxena",
          image: "Home/gunjan skasena.jpg",
          tag: "Recently added"
        },
        {
          title: "Its ok to not be ok",
          image: "Home/its ok to not be okay.jpg",
        },
        {
          title: "jujutsu kaisen",
          image: "Home/jujutsu kaisen.webp",
        },
        {
          title: "lookism",
          image: "Home/lookism.jpg"
          
        },
        {
          title: "Komi Can't Communicate",
          image: "Home/komin cant communicate.jpg"
        }
      ]
    },
    continueWatching: {
      title: "Continue Watching for saniya",
      items: [
        {
          title: "lucifer",
          image: "Home/lucifer.jpg",
          progress: 45
        },
        {
          title: "lucky bhaskar",
          image: "Home/lucky bhaskar.webp",
          progress: 70,
        },
        {
          title: "Money Heist",
          image: "Home/money heist.jpg",
          progress: 30
        },
        {
          title: "parasyte",
          image: "Home/parasyte.webp",
          progress: 55
        },
        {
          title: "PK",
          image: "Home/pk.webp",
          progress: 80
        },
        {
          title: "Spy x Family",
          image: "Home/spy family.webp",
          progress: 25
        }
      ]
    },
    eastAsianTVComedies: {
      title: "East Asian TV Comedies",
      items: [
        {
          title: "Stranger Things",
          image: "Home/stranger things.jpg"
        },
        {
          title: "The diplomat",
          image: "Home/the diplomate.webp"
        },
        {
          title: "The Glory",
          image: "Home/the glory.jpg"
        },
        {
          title: "THe royals",
          image: "Home/the royals.jpg"
        },
        {
          title: "True Beauty",
          image: "Home/true beauty.webp"
        },
        {
          title: "vinland saga",
          image: "Home/vindland saga.webp"
        }
      ]
    },
    trendingNow: {
      title: "Trending Now",
      items: [
        {
          title: "Bad boys ride or die",
          image: "Movies/bad boys ride or die.webp",
          tag: "Top 10"
        },
        {
          title: "jigra",
          image: "Movies/jigra.webp"
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
          title: "Tarot",
          image: "Movies/tarot.webp"
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