import React, { useRef, useState, useEffect } from 'react';

const News = () => {
  const rowRefs = useRef({});

  const content = {
    newOnNetflix: {
      title: "New on Netflix",
      items: [
        {
          title: "Animal",
          image: "Home/animal.webp",
          tag: "New"
        },
        {
          title: "The Diplomat",
          image: "Home/the diplomate.webp",
          tag: "Top 10"
        },
        {
          title: "Night Swim",
          image: "https://image.tmdb.org/t/p/w500/tLxjbT5ROZRwYcpNT3nfQbqkApk.jpg",
          tag: "New"
        },
        {
          title: "When life gives you tangerines",
          image: "Home/when life gives you tangerines.jpg",
          tag: "New"
        },
        {
          title: "YOU",
          image: "Shows/you.jpg",
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
          rank: 1,
          tag: "Recently added"
        },
        {
          title: "The Royals",
          image: "Home/the royals.jpg",
          rank: 2,
          tag: "Recently added"
        },
        {
          title: "Bet",
          image: "https://image.tmdb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg",
          rank: 3,
          tag: "Recently added"
        },
        {
          title: "Secrets We Keep",
          image: "https://image.tmdb.org/t/p/w500/kQs6keheMwCxJxrzV83VUwFtHkB.jpg",
          rank: 4,
          tag: "Recently added"
        },
        {
          title: "The Walking Dead",
          image: "Shows/the walking dead.webp",
          rank: 5,
          tag: "Recently added"
        },
        {
          title: "What Life Gives You",
          image: "https://image.tmdb.org/t/p/w500/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg",
          rank: 6,
          tag: "Recently added"
        }
      ]
    },
    comingThisWeek: {
      title: "Coming This Week",
      items: [
        {
          title: "The Vampir Diaries",
          image: "Shows/the vampire diaries.webp",
          tag: "Coming Soon",
          date: "May 22"
        },
        {
          title: "Sakamoto Days",
          image: "Shows/sakomoto days.jpg",
          tag: "Coming Soon",
          date: "May 23"
        },
        {
          title: "Sirens",
          image: "https://image.tmdb.org/t/p/w500/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg",
          tag: "Coming Soon",
          date: "May 24"
        },
        {
          title: "Lock and Key",
          image: "Shows/lock and key.jpg",
          tag: "Coming Soon",
          date: "May 25"
        }
      ]
    }
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
                {isTop10 && item.rank && (
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
                  {item.date && (
                    <div className="absolute bottom-1 right-1 bg-black/50 text-white text-xs px-1.5 py-0.5 rounded">
                      {item.date}
                    </div>
                  )}
                  {/* Info overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/50 transition-all duration-200">
                    <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover/item:translate-y-0 transition-transform duration-200">
                      <div className="flex flex-col gap-1">
                        <p className="text-white text-xs sm:text-sm font-medium">{item.title}</p>
                        <div className="flex items-center gap-1">
                          {!item.date && (
                            <button className="bg-white rounded-full p-1 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </button>
                          )}
                          <button className="border border-white/70 rounded-full p-1 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-white">
                            {item.date ? (
                              <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 8v4l3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            ) : (
                              <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                            )}
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

  return (
    <div className="bg-black min-h-screen pb-10">
      {/* Navigation */}
      <div className="sticky top-0 w-full bg-black z-40 p-4 md:px-16">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-xl md:text-2xl font-bold">New & Hot</h1>
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
      <div className="mt-4">
        <ContentRow 
          category={content.newOnNetflix} 
          rowKey="newOnNetflix" 
        />
        <ContentRow 
          category={content.topShows} 
          rowKey="topShows" 
          isTop10={true}
        />
        <ContentRow 
          category={content.comingThisWeek} 
          rowKey="comingThisWeek" 
        />
      </div>
    </div>
  );
};

export default News;