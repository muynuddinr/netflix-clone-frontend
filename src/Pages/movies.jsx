import { useState } from 'react';

const Movies = () => {
  const [SELECTED_GENRE] = useState('All Genres');

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
    genre: "Sci-Fi"
  };

  const movies = {
    newReleases: {
      title: "New Releases",
      items: [
        {
          title: "Dune: Part Two",
          image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
          tag: "New"
        },
        {
          title: "Madame Web",
          image: "https://image.tmdb.org/t/p/w500/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
          tag: "New"
        },
        {
          title: "Anyone But You",
          image: "https://image.tmdb.org/t/p/w500/5qHoazZiaLe7oFBok7XlUhg96f2.jpg"
        },
        {
          title: "Migration",
          image: "https://image.tmdb.org/t/p/w500/kZpZL3uZ5BzCXSZSO4Vz0LtO8dG.jpg"
        }
      ]
    },
    trending: {
      title: "Trending Now",
      items: [
        {
          title: "Oppenheimer",
          image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
          tag: "Top 10"
        },
        {
          title: "Poor Things",
          image: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg"
        },
        {
          title: "The Beekeeper",
          image: "https://image.tmdb.org/t/p/w500/A7EByudX0eOzlkQ2FIbogzyazm2.jpg"
        },
        {
          title: "Argylle",
          image: "https://image.tmdb.org/t/p/w500/95VlSEfLMqeX36UVcHJuNlWEpwf.jpg"
        }
      ]
    },
    popular: {
      title: "Popular on Netflix",
      items: [
        {
          title: "Barbie",
          image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
        },
        {
          title: "The Super Mario Bros. Movie",
          image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
        },
        {
          title: "Guardians of the Galaxy Vol. 3",
          image: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"
        },
        {
          title: "Mission: Impossible - Dead Reckoning",
          image: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
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
          src={featuredMovie.image}
          alt={featuredMovie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-8 lg:p-16 space-y-2 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">{featuredMovie.title}</h1>
          <p className="text-white text-xs sm:text-sm md:text-lg max-w-[50ch] line-clamp-3 sm:line-clamp-none">{featuredMovie.description}</p>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded text-sm sm:text-base font-semibold hover:bg-white/90 transition">
              ▶ Play
            </button>
            <button className="bg-gray-500/70 text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded text-sm sm:text-base font-semibold hover:bg-gray-500/50 transition">
              ℹ More Info
            </button>
          </div>
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white bg-black/50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
            {featuredMovie.rating}
          </div>
        </div>
      </div>

      {/* Genre Navigation */}
      <div className="sticky top-[70px] w-full bg-black z-40 transition-all duration-500">
        <div className="px-3 sm:px-4 md:px-8 lg:px-16 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-4">
            <h1 className="text-white text-xl sm:text-2xl font-bold">Movies</h1>
            <div className="relative">
              <button className="flex items-center gap-1 sm:gap-2 border border-white/40 rounded px-2 sm:px-4 py-0.5 sm:py-1 text-white text-sm sm:text-base hover:bg-white/10 transition">
                Genres
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Rows */}
      <div className="px-3 sm:px-4 md:px-8 lg:px-16 space-y-6 sm:space-y-8 mt-4">
        <ContentRow category={movies.newReleases} />
        <ContentRow category={movies.trending} />
        <ContentRow category={movies.popular} />
      </div>
    </div>
  );
};

export default Movies;