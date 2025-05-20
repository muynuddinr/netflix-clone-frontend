import React, { useState, useRef, useEffect } from 'react';

const BrowseLanguages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');
  const [isOriginalLanguageOpen, setIsOriginalLanguageOpen] = useState(false);
  const [isAudioLanguageOpen, setIsAudioLanguageOpen] = useState(false);
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const rowRefs = useRef({});
  const dropdownRefs = useRef({
    originalLanguage: useRef(null),
    audioLanguage: useRef(null),
    sortBy: useRef(null)
  });

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRefs.current.originalLanguage && !dropdownRefs.current.originalLanguage.contains(event.target)) {
        setIsOriginalLanguageOpen(false);
      }
      if (dropdownRefs.current.audioLanguage && !dropdownRefs.current.audioLanguage.contains(event.target)) {
        setIsAudioLanguageOpen(false);
      }
      if (dropdownRefs.current.sortBy && !dropdownRefs.current.sortBy.contains(event.target)) {
        setIsSortByOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const audioOptions = [
    'English',
    'Indonesian',
    'Malay',
    'Turkish',
    'Japanese',
    'Spanish',
    'French',
    'Hindi',
    'Korean',
    'German',
    'Mandarin',
    'Italian',
    'Portuguese',
    'Cantonese',
    'Dutch',
    'Filipino',
    'Polish',
    'Swedish',
    'Arabic',
    'Tamil'
  ];

  const sortOptions = [
    'Suggestions For You',
    'Year Released',
    'A-Z',
    'Z-A'
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
          title: "Devara",
          image: "Movies/devara.webp",
          language: "Chinese",
          tag: "New"
        },
        {
          title: "The Call",
          image: "Movies/the call.jpg",
          language: "French"
        },
        {
          title: "Elite",
          image: "https://image.tmdb.org/t/p/w500/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg",
          language: "Spanish"
        }
      ]
    },
    koreanContent: {
      title: "Korean Movies & TV",
      items: [
        {
          title: "Queen of Tears",
          image: "Shows/queen of tears.jpg",
          language: "Korean",
          tag: "New"
        },
        {
          title: "Parasite",
          image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
          language: "Korean"
        },
        {
          title: "Shaitan",
          image: "Movies/shaitan.webp",
          language: "Korean"
        },
        {
          title: "The Glory",
          image: "Home/the glory.jpg",
          language: "Korean"
        },
        {
          title: "All of Us Are Dead",
          image: "https://image.tmdb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg",
          language: "Korean"
        },
        {
          title: "the jumanji next level",
          image: "Movies/jumanji the next level.webp",
          language: "Korean"
        }
      ]
    },
    spanishContent: {
      title: "Spanish-Language Hits",
      items: [
        {
          title: "Money Heist",
          image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
          language: "Spanish",
          tag: "Popular"
        },
        {
          title: "Elite",
          image: "https://image.tmdb.org/t/p/w500/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg",
          language: "Spanish"
        },
        {
          title: "Sky Rojo",
          image: "https://image.tmdb.org/t/p/w500/mZjZgY6ObiKtVuKVDrnS9VnuNlE.jpg",
          language: "Spanish"
        },
        {
          title: "Breaking Bad",
          image: "Shows/breaking bad.webp",
          language: "Spanish"
        },
        {
          title: "The Platform",
          image: "https://image.tmdb.org/t/p/w500/8ZX18L5m6rH5viSYpRnTSbb9eXh.jpg",
          language: "Spanish"
        },
        {
          title: "High Seas",
          image: "https://image.tmdb.org/t/p/w500/mZjZgY6ObiKtVuKVDrnS9VnuNlE.jpg",
          language: "Spanish"
        }
      ]
    },
    japaneseContent: {
      title: "Japanese Series & Films",
      items: [
        {
          title: "Alice in Borderland",
          image: "https://image.tmdb.org/t/p/w500/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg",
          language: "Japanese"
        },
        {
          title: "Wednesday",
          image: "Shows/wednesday.jpg",
          language: "Japanese"
        },
        {
          title: "Your Name",
          image: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
          language: "Japanese"
        },
        {
          title: "Weathering With You",
          image: "https://image.tmdb.org/t/p/w500/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg",
          language: "Japanese",
          tag: "New"
        }
      ]
    },
    frenchContent: {
      title: "French Movies & Shows",
      items: [
        {
          title: "Spy x Family",
          image: "Shows/spy family.webp",
          language: "French"
        },
        {
          title: "Oxygen",
          image: "https://image.tmdb.org/t/p/w500/u74DFoZGTcZ8cuHO8nvQkCqXEVP.jpg",
          language: "French"
        },
        {
          title: "Devil may cry",
          image: "Shows/devil may cry.jpg",
          language: "French"
        },
        {
          title: "Business proposal",
          image: "Shows/business proposal.jpg",
          language: "French"
        }
      ]
    }
  };

  // Filter content based on selected language
  const filterContentByLanguage = (category) => {
    if (selectedLanguage === 'All Languages') {
      return category;
    }
    
    const filteredItems = category.items.filter(item => 
      item.language === selectedLanguage
    );
    
    return {
      ...category,
      items: filteredItems
    };
  };

  // Check if category has items after filtering
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

  // Netflix-style content row with horizontal scrolling
  const ContentRow = ({ category, rowKey }) => {
    // Don't render rows with no content
    if (!category.items || category.items.length === 0) return null;

    return (
      <div className="mb-8 relative">
        <h2 className="text-white text-lg md:text-xl font-medium px-4 md:px-16 mb-1">{category.title}</h2>
        <div className="relative">
          <div
            ref={(el) => rowRefs.current[rowKey] = el}
            className="flex overflow-x-scroll hide-scrollbar py-2 px-4 md:px-16 gap-2 md:gap-4"
          >
            {category.items.map((item, index) => (
              <div
                key={index}
                className="flex-none relative group/item min-w-[180px] sm:min-w-[200px] md:min-w-[240px] h-[100px] sm:h-[113px] md:h-[135px] cursor-pointer transition-all duration-300 hover:z-10 hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-sm"
                  loading="lazy"
                />
                {item.tag && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded">
                    {item.tag}
                  </div>
                )}
                {/* Info overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/50 transition-all duration-200">
                  <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover/item:translate-y-0 transition-transform duration-200">
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-xs sm:text-sm font-medium">{item.title}</p>
                      {item.language && (
                        <p className="text-gray-300 text-xs">{item.language}</p>
                      )}
                      <div className="flex items-center gap-1 pt-1">
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
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Apply filters to content categories
  const filteredFeatured = filterContentByLanguage(content.featured);
  const filteredKorean = filterContentByLanguage(content.koreanContent);
  const filteredSpanish = filterContentByLanguage(content.spanishContent);
  const filteredJapanese = filterContentByLanguage(content.japaneseContent);
  const filteredFrench = filterContentByLanguage(content.frenchContent);

  // Check if there are any results after filtering
  const hasResults = 
    hasCategoryItems(filteredFeatured) || 
    hasCategoryItems(filteredKorean) || 
    hasCategoryItems(filteredSpanish) ||
    hasCategoryItems(filteredJapanese) ||
    hasCategoryItems(filteredFrench);

  // Custom dropdown component
  const Dropdown = ({ label, options, isOpen, setIsOpen, refKey }) => (
    <div className="relative inline-block" ref={el => dropdownRefs.current[refKey] = el}>
      <button 
        className="flex items-center gap-1 bg-black border border-gray-700 rounded px-3 py-1.5 text-white text-sm hover:bg-white/10 transition min-w-[180px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <svg className={`w-4 h-4 ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-black/95 border border-gray-700 rounded shadow-lg z-50 max-h-[60vh] overflow-y-auto">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                className="text-left w-full px-3 py-2 text-sm text-gray-300 hover:bg-white/10 transition-colors"
                onClick={() => {
                  if (label === 'Original Language') {
                    setSelectedLanguage(option === 'Original Language' ? 'All Languages' : option);
                  }
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-black min-h-screen pb-10">
      {/* Language Navigation */}
      <div className="sticky top-0 w-full bg-black z-40 border-b border-gray-800">
        <div className="px-4 md:px-16 py-4">
          <h1 className="text-white text-xl sm:text-2xl font-bold mb-6">Browse by Languages</h1>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-2">
            <div className="text-white text-sm">Select Your Preferences</div>
            
            <Dropdown 
              label="Original Language"
              options={['Original Language', 'Dubbing', 'Subtitles', ...languages.filter(lang => lang !== 'All Languages')]}
              isOpen={isOriginalLanguageOpen}
              setIsOpen={setIsOriginalLanguageOpen}
              refKey="originalLanguage"
            />
            
            <Dropdown 
              label="English"
              options={audioOptions}
              isOpen={isAudioLanguageOpen}
              setIsOpen={setIsAudioLanguageOpen}
              refKey="audioLanguage"
            />
            
            <div className="text-white text-sm ml-0 sm:ml-2">Sort by</div>
            
            <Dropdown 
              label="Suggestions For You"
              options={sortOptions}
              isOpen={isSortByOpen}
              setIsOpen={setIsSortByOpen}
              refKey="sortBy"
            />
          </div>
        </div>
      </div>

      {/* Language Filter Pills */}
      <div className="px-4 md:px-16 pt-4">
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

      {/* No results message */}
      {selectedLanguage !== 'All Languages' && !hasResults && (
        <div className="px-4 md:px-16 py-10">
          <div className="text-center">
            <h3 className="text-white text-xl font-medium mb-2">No titles found in {selectedLanguage}</h3>
            <p className="text-gray-400 mb-4">Try selecting a different language or clear your filter</p>
            <button 
              className="bg-white text-black px-4 py-2 rounded font-medium"
              onClick={() => setSelectedLanguage('All Languages')}
            >
              View All Content
            </button>
          </div>
        </div>
      )}

      {/* Content Sections */}
      <div className="mt-6">
        <ContentRow category={filteredFeatured} rowKey="featured" />
        <ContentRow category={filteredKorean} rowKey="korean" />
        <ContentRow category={filteredSpanish} rowKey="spanish" />
        <ContentRow category={filteredJapanese} rowKey="japanese" />
        <ContentRow category={filteredFrench} rowKey="french" />
      </div>
    </div>
  );
};

export default BrowseLanguages;