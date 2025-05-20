import React, { useState, useRef, useEffect } from 'react';

const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [isGenreMenuOpen, setIsGenreMenuOpen] = useState(false);
  const genreMenuRef = useRef(null);
  const rowRefs = useRef({});

  // Close the genre menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (genreMenuRef.current && !genreMenuRef.current.contains(event.target)) {
        setIsGenreMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const GENRES = [
    'All Genres',
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Horror',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Thriller'
  ];

  const featuredMovie = {
    title: "Dune: Part Two",
    description: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    image: "https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    rating: "U/A 13+",
    genres: ["Sci-Fi", "Adventure", "Drama"]
  };

  const movies = {
    newReleases: {
      title: "New Releases",
      items: [
        {
          title: "Dune: Part Two",
          image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
          tag: "New",
          genres: ["Sci-Fi", "Adventure", "Drama"]
        },
        {
          title: "Madame Web",
          image: "https://image.tmdb.org/t/p/w500/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
          tag: "New",
          genres: ["Action", "Adventure", "Fantasy"]
        },
        {
          title: "Anyone But You",
          image: "https://image.tmdb.org/t/p/w500/5qHoazZiaLe7oFBok7XlUhg96f2.jpg",
          genres: ["Romance", "Comedy"]
        },
        {
          title: "Amaran",
          image: "Movies/amaran.webp",
          genres: ["Animation", "Family", "Comedy", "Adventure"]
        }
      ]
    },
    trending: {
      title: "Trending Now",
      items: [
        {
          title: "Oppenheimer",
          image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
          tag: "Top 10",
          genres: ["Drama", "History"]
        },
        {
          title: "Poor Things",
          image: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
          genres: ["Fantasy", "Comedy", "Drama"]
        },
        {
          title: "The Beekeeper",
          image: "https://image.tmdb.org/t/p/w500/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
          genres: ["Action", "Thriller"]
        },
        {
          title: "Argylle",
          image: "https://image.tmdb.org/t/p/w500/95VlSEfLMqeX36UVcHJuNlWEpwf.jpg",
          genres: ["Action", "Comedy", "Thriller"]
        }
      ]
    },
    popular: {
      title: "Popular on Netflix",
      items: [
        {
          title: "Barbie",
          image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
          genres: ["Comedy", "Adventure", "Fantasy"]
        },
        {
          title: "The Super Mario Bros. Movie",
          image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
          genres: ["Animation", "Family", "Adventure", "Comedy"]
        },
        {
          title: "Guardians of the Galaxy Vol. 3",
          image: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
          genres: ["Action", "Adventure", "Sci-Fi"]
        },
        {
          title: "Mission: Impossible - Dead Reckoning",
          image: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
          genres: ["Action", "Thriller", "Adventure"]
        }
      ]
    },
    top10: {
      title: "Top 10 Movies in India Today",
      items: [
        {
          title: "Oppenheimer",
          image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
          rank: 1,
          genres: ["Drama", "History"]
        },
        {
          title: "Barbie",
          image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
          rank: 2,
          genres: ["Comedy", "Adventure", "Fantasy"]
        },
        {
          title: "Dune: Part Two",
          image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
          rank: 3,
          genres: ["Sci-Fi", "Adventure", "Drama"]
        },
        {
          title: "The Beekeeper",
          image: "https://image.tmdb.org/t/p/w500/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
          rank: 4,
          genres: ["Action", "Thriller"]
        },
        {
          title: "Poor Things",
          image: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
          rank: 5,
          genres: ["Fantasy", "Comedy", "Drama"]
        }
      ]
    },
    oscars: {
      title: "Oscar-Winning Films",
      items: [
        {
          title: "Everything Everywhere All at Once",
          image: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
          genres: ["Action", "Adventure", "Sci-Fi", "Comedy"]
        },
        {
          title: "Parasite",
          image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
          genres: ["Drama", "Thriller", "Comedy"]
        },
        {
          title: "Hi Papa",
          image: "Movies/hi papa.webp",
          genres: ["Drama", "Fantasy", "Romance"]
        },
        {
          title: "Time Cut",
          image: "Movies/time cut.jpg",
          genres: ["Drama"]
        }
      ]
    }
  };

  // Improved filter function to work with genre arrays
  const filterMoviesByGenre = (category) => {
    if (selectedGenre === 'All Genres') {
      return category;
    }
    
    const filteredItems = category.items.filter(item => 
      item.genres && item.genres.includes(selectedGenre)
    );
    
    return {
      ...category,
      items: filteredItems
    };
  };

  // Function to check if a category has items after filtering
  const hasCategoryItems = (category) => {
    return category.items && category.items.length > 0;
  };

  // Horizontal scroll functionality
  const scroll = (rowKey, direction) => {
    const scrollContainer = rowRefs.current[rowKey];
    if (!scrollContainer) return;
    
    const scrollAmount = direction === 'left' 
      ? -scrollContainer.clientWidth * 0.75 
      : scrollContainer.clientWidth * 0.75;
    
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  // Check if a row can be scrolled
  const useCanScroll = (rowKey) => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
      const checkScrollability = () => {
        const container = rowRefs.current[rowKey];
        if (!container) return;

        setCanScrollLeft(container.scrollLeft > 10);
        setCanScrollRight(
          container.scrollLeft < container.scrollWidth - container.clientWidth - 10
        );
      };

      const container = rowRefs.current[rowKey];
      if (container) {
        checkScrollability();
        container.addEventListener('scroll', checkScrollability);
        window.addEventListener('resize', checkScrollability);
      }

      return () => {
        if (container) {
          container.removeEventListener('scroll', checkScrollability);
        }
        window.removeEventListener('resize', checkScrollability);
      };
    }, [rowKey]);

    return { canScrollLeft, canScrollRight };
  };

  // Netflix-style content row with horizontal scrolling
  const ContentRow = ({ category, rowKey, isTop10 = false }) => {
    // Don't render rows with no content
    if (!category.items || category.items.length === 0) return null;
    
    const { canScrollLeft, canScrollRight } = useCanScroll(rowKey);

    return (
      <div className="mb-8 relative group">
        <h2 className="text-white text-lg md:text-xl font-medium px-4 md:px-16 mb-1">{category.title}</h2>
        <div className="relative">
          <div
            ref={(el) => rowRefs.current[rowKey] = el}
            className="flex overflow-x-scroll hide-scrollbar py-2 px-4 md:px-16 gap-2 md:gap-4"
          >
            {category.items.map((item, index) => (
              <div
                key={index}
                className={`
                  ${isTop10 ? 'flex items-center' : ''} 
                  flex-none 
                  relative 
                  group/item
                  ${isTop10 ? 'min-w-[300px]' : 'min-w-[180px] sm:min-w-[200px] md:min-w-[240px]'} 
                  h-[100px] sm:h-[113px] md:h-[135px]
                  rounded-sm overflow-hidden 
                  cursor-pointer
                  transition-all duration-300 
                  hover:z-10 hover:scale-110 hover:delay-300
                `}
              >
                {isTop10 && (
                  <div className="flex-none relative -right-4 z-10">
                    <div className="text-[80px] sm:text-[100px] font-bold text-black stroke-text">
                      {item.rank}
                    </div>
                  </div>
                )}
                <div className={`${isTop10 ? 'flex-1 -ml-8' : 'w-full'} relative h-full`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {item.tag && (
                    <div className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded">
                      {item.tag}
                    </div>
                  )}
                  {/* Info overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/50 transition-all duration-200">
                    <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover/item:translate-y-0 transition-transform duration-200">
                      <div className="flex flex-col gap-1">
                        <p className="text-white text-xs sm:text-sm font-medium">{item.title}</p>
                        <div className="flex items-center gap-1">
                          <button className="bg-white rounded-full p-1 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                          <button className="border border-white/70 rounded-full p-1 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-white">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </button>
                          <button className="ml-auto border border-white/70 rounded-full p-1 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-white">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Left scroll arrow */}
          {canScrollLeft && (
            <button
              className="absolute left-0 top-0 bottom-0 z-10 w-12 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => scroll(rowKey, 'left')}
            >
              <div className="bg-black/60 rounded-full p-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>
          )}
          
          {/* Right scroll arrow */}
          {canScrollRight && (
            <button
              className="absolute right-0 top-0 bottom-0 z-10 w-12 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => scroll(rowKey, 'right')}
            >
              <div className="bg-black/60 rounded-full p-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    );
  };

  // Get filtered categories
  const filteredNewReleases = filterMoviesByGenre(movies.newReleases);
  const filteredTrending = filterMoviesByGenre(movies.trending);
  const filteredPopular = filterMoviesByGenre(movies.popular);
  const filteredTop10 = filterMoviesByGenre(movies.top10);
  const filteredOscars = filterMoviesByGenre(movies.oscars);

  // Check if we have any results after filtering
  const hasResults = 
    hasCategoryItems(filteredNewReleases) || 
    hasCategoryItems(filteredTrending) || 
    hasCategoryItems(filteredPopular) || 
    hasCategoryItems(filteredTop10) ||
    hasCategoryItems(filteredOscars);

  return (
    <div className="bg-black min-h-screen pb-10">
      {/* Featured Content Banner */}
      <div className="relative h-[60vh] sm:h-[56.25vw] max-h-[720px]">
        <img 
          src={featuredMovie.image}
          alt={featuredMovie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-16 space-y-2 md:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">{featuredMovie.title}</h1>
          <p className="text-white text-sm md:text-base max-w-lg line-clamp-3 md:line-clamp-none">{featuredMovie.description}</p>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded text-sm sm:text-base font-medium flex items-center gap-2 hover:bg-white/90">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </button>
            <button className="bg-gray-500/70 text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded text-sm sm:text-base font-medium flex items-center gap-2 hover:bg-gray-500/50">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              More Info
            </button>
          </div>
          <div className="absolute top-2 right-2 md:top-4 md:right-4 text-white bg-black/50 px-1.5 py-0.5 rounded text-xs">
            {featuredMovie.rating}
          </div>
        </div>
      </div>

      {/* Genre Navigation */}
      <div className="sticky top-0 w-full bg-black z-40 p-4 md:px-16">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 md:gap-4">
            <h1 className="text-white text-xl md:text-2xl font-bold">Movies</h1>
            <div className="relative" ref={genreMenuRef}>
              <button 
                className="flex items-center gap-1 border border-white/40 rounded px-3 py-1 text-white text-sm hover:bg-white/10 transition"
                onClick={() => setIsGenreMenuOpen(!isGenreMenuOpen)}
              >
                {selectedGenre}
                <svg className={`w-4 h-4 transition-transform ${isGenreMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isGenreMenuOpen && (
                <div className="absolute top-full left-0 mt-1 bg-black/95 border border-gray-700 rounded shadow-lg z-50 max-h-[60vh] overflow-y-auto w-52">
                  <div className="grid grid-cols-2">
                    {GENRES.map((genre) => (
                      <button
                        key={genre}
                        className={`text-left px-3 py-2 text-sm ${
                          selectedGenre === genre 
                            ? 'bg-white/20 text-white' 
                            : 'text-gray-300 hover:bg-white/10'
                        } transition-colors`}
                        onClick={() => {
                          setSelectedGenre(genre);
                          setIsGenreMenuOpen(false);
                        }}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white hover:bg-white/10 p-2 rounded transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="text-white hover:bg-white/10 p-2 rounded transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        {/* Genre filter indicator and results info */}
        {selectedGenre !== 'All Genres' && (
          <div className="px-4 md:px-16 mb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-white text-lg font-medium">
                <span className="text-gray-400">Genre:</span> {selectedGenre}
              </h2>
              {!hasResults && (
                <button 
                  className="text-blue-400 hover:underline text-sm"
                  onClick={() => setSelectedGenre('All Genres')}
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>
        )}
        
        {/* No results message */}
        {selectedGenre !== 'All Genres' && !hasResults && (
          <div className="px-4 md:px-16 py-10">
            <div className="text-center">
              <h3 className="text-white text-xl font-medium mb-2">No movies found for "{selectedGenre}"</h3>
              <p className="text-gray-400 mb-4">Try selecting a different genre or clearing your filter</p>
              <button 
                className="bg-white text-black px-4 py-2 rounded font-medium"
                onClick={() => setSelectedGenre('All Genres')}
              >
                View All Movies
              </button>
            </div>
          </div>
        )}
        
        {/* Content Rows */}
        <ContentRow 
          category={filteredNewReleases} 
          rowKey="newReleases" 
        />
        <ContentRow 
          category={filteredTrending} 
          rowKey="trending" 
        />
        <ContentRow 
          category={filteredPopular} 
          rowKey="popular" 
        />
        <ContentRow 
          category={filteredTop10} 
          rowKey="top10" 
          isTop10={true}
        />
        <ContentRow 
          category={filteredOscars} 
          rowKey="oscars" 
        />
      </div>
    </div>
  );
};

export default Movies;