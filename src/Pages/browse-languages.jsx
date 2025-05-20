import { useState } from 'react';

const BrowseLanguages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');

  const languages = [
    'All Languages',
    'Arabic',
    'Bengali',
    'Chinese',
    'English',
    'French',
    'German',
    'Hindi',
    'Italian',
    'Japanese',
    'Korean',
    'Spanish',
    'Tamil',
    'Telugu'
  ];

  const content = {
    featured: {
      title: "International Favorites",
      items: [
        {
          title: "Squid Game",
          image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
          language: "Korean",
          tag: "Top 10"
        },
        {
          title: "Money Heist",
          image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
          language: "Spanish"
        },
        {
          title: "Dark",
          image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
          language: "German"
        },
        {
          title: "3 Body Problem",
          image: "https://image.tmdb.org/t/p/w500/kqF4qrE3rR4BHZxYwxZumVGzHqn.jpg",
          language: "Chinese",
          tag: "New"
        }
      ]
    },
    koreanContent: {
      title: "Korean Movies & TV",
      items: [
        {
          title: "Queen of Tears",
          image: "https://image.tmdb.org/t/p/w500/2akQNQN7fmqWq6jYJMB3UNSQxJ1.jpg",
          tag: "New"
        },
        {
          title: "Parasite",
          image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
        },
        {
          title: "Train to Busan",
          image: "https://image.tmdb.org/t/p/w500/2oRRTPNtozgPhOa9CY8XHVq447v.jpg"
        },
        {
          title: "The Glory",
          image: "https://image.tmdb.org/t/p/w500/nYLhWgGSPKlBxKwaD8SJeNxoBgZ.jpg"
        }
      ]
    },
    spanishContent: {
      title: "Spanish-Language Hits",
      items: [
        {
          title: "Money Heist",
          image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
          tag: "Popular"
        },
        {
          title: "Elite",
          image: "https://image.tmdb.org/t/p/w500/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg"
        },
        {
          title: "Sky Rojo",
          image: "https://image.tmdb.org/t/p/w500/mZjZgY6ObiKtVuKVDrnS9VnuNlE.jpg"
        },
        {
          title: "Who Killed Sara?",
          image: "https://image.tmdb.org/t/p/w500/o7uk5ChRt3quPIv8PcvPfB9FXrs.jpg"
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
              {item.language && (
                <p className="text-gray-300 text-xs mt-1">{item.language}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-black min-h-screen pb-10 sm:pb-20">
      {/* Language Navigation */}
      <div className="sticky top-[70px] w-full bg-black z-40 transition-all duration-500">
        <div className="px-3 sm:px-4 md:px-8 lg:px-16 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <h1 className="text-white text-xl sm:text-2xl font-bold">Browse by Languages</h1>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <button
                  key={language}
                  onClick={() => setSelectedLanguage(language)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                    selectedLanguage === language
                      ? 'bg-white text-black'
                      : 'border border-gray-600 text-white hover:bg-white/10'
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-3 sm:px-4 md:px-8 lg:px-16 space-y-6 sm:space-y-8 mt-4">
        <ContentRow category={content.featured} />
        <ContentRow category={content.koreanContent} />
        <ContentRow category={content.spanishContent} />
      </div>
    </div>
  );
};

export default BrowseLanguages;