import { useState, useEffect } from 'react';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movies] = useState([
    {
      title: "Stranger Things",
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      logo: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABer7SeWc6FvkBqWtk61GwL7lbS9GBHVHvVFW_eQBnj9QKqFlYknI6YOSGURmnA5zr1qNWIHDZsk_TvW6nqOgWiJgrB2bwkHRoYXKFBKWv5E.png"
    },
    {
      title: "Wednesday",
      description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
      backdrop: "https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
      logo: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQzHxVJMQgG1u2VvXH5qE7BNGdRwvPpiIWehfT1-V_Nr2H4ILwNUk5FQPPKl9hJzGGYXiEO1nBbZgELGHJ5Lj_dGJ9h-bvQlk-qUXp3A0Kc.png"
    },
    {
      title: "The Witcher",
      description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
      backdrop: "https://image.tmdb.org/t/p/original/foGkPxpw9h8zln81j63mix5B7m8.jpg",
      logo: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbFI2wcjGzs5TMXxNkZ0aSxlqz6jnL27mI_J1eqgwG7-h5H1ODWzTk1SHzRnC6EXPwcE9H-NO0MB7ndoI_sbQAY9_Fhc0izua24NEVBqPSU.png"
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 8000); // Change banner every 8 seconds

    return () => clearInterval(interval);
  }, [movies.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  return (
    <div className="relative h-[56.25vw] lg:h-[85vh]">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={movies[currentIndex].backdrop}
          alt={movies[currentIndex].title}
          className="w-full h-full object-cover brightness-[60%] transition-opacity duration-700"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black" />

      {/* Slider Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full px-2 sm:px-4 flex justify-between">
        <button 
          onClick={handlePrevious}
          className="bg-black/50 hover:bg-black/70 text-white p-1 sm:p-2 rounded-full transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={handleNext}
          className="bg-black/50 hover:bg-black/70 text-white p-1 sm:p-2 rounded-full transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="absolute bottom-[10%] sm:bottom-[20%] left-0 px-4 md:px-16 space-y-3 sm:space-y-6 z-20">
        {/* Title/Logo */}
        <div className="max-w-[200px] xs:max-w-xs sm:max-w-sm md:max-w-lg">
          <img
            src={movies[currentIndex].logo}
            alt={movies[currentIndex].title}
            className="w-full"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <h1 className="hidden text-white text-2xl sm:text-4xl font-bold">{movies[currentIndex].title}</h1>
        </div>

        {/* Description */}
        <p className="text-white text-xs sm:text-sm md:text-lg lg:text-xl max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl line-clamp-2 sm:line-clamp-3">
          {movies[currentIndex].description}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="flex items-center gap-1 sm:gap-2 bg-white text-black px-3 sm:px-4 md:px-8 py-1 md:py-2 rounded-[4px] hover:bg-opacity-80 transition text-xs sm:text-sm md:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
            Play
          </button>
          <button className="flex items-center gap-1 sm:gap-2 bg-gray-500/70 text-white px-3 sm:px-4 md:px-8 py-1 md:py-2 rounded-[4px] hover:bg-gray-500/50 transition text-xs sm:text-sm md:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            More Info
          </button>
        </div>

        {/* Slider Indicators */}
        <div className="flex gap-1 sm:gap-2">
          {movies.map((_, index) => (
            <div
              key={index}
              className={`h-[3px] sm:h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-4 sm:w-6 bg-white' : 'w-2 bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;