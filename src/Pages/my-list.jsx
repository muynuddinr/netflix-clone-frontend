import { useState } from 'react';

const MyList = () => {
  const [myList] = useState({
    savedContent: {
      title: "My List",
      items: [
        {
          title: "Stranger Things",
          image: "https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
          dateAdded: "Added on Apr 15"
        },
        {
          title: "Wednesday",
          image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
          dateAdded: "Added on Apr 14"
        },
        {
          title: "Queen of Tears",
          image: "https://image.tmdb.org/t/p/w500/2akQNQN7fmqWq6jYJMB3UNSQxJ1.jpg",
          dateAdded: "Added on Apr 13"
        },
        {
          title: "The Witcher",
          image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
          dateAdded: "Added on Apr 12"
        },
        {
          title: "Squid Game",
          image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
          dateAdded: "Added on Apr 11"
        },
        {
          title: "Money Heist",
          image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
          dateAdded: "Added on Apr 10"
        }
      ]
    }
  });

  return (
    <div className="bg-black min-h-screen pb-10">
      {/* Header Section */}
      <div className="pt-[70px] px-4 md:px-8 lg:px-12">
        <h1 className="text-white text-3xl font-medium mb-8">My List</h1>

        {/* Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4">
          {myList.savedContent.items.map((item, index) => (
            <div 
              key={index} 
              className="relative aspect-video cursor-pointer group"
            >
              {/* Content Card */}
              <div className="absolute inset-0 rounded overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title Overlay - Always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white text-sm font-medium truncate">{item.title}</h3>
              </div>

              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <button className="bg-white rounded-full p-1.5 hover:bg-white/90 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="bg-gray-600/70 rounded-full p-1.5 hover:bg-gray-600/90 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
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

export default MyList;