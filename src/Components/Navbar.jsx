import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const Navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black' : 'bg-black'}`}>
      <div className="px-4 md:px-16 py-3 flex items-center justify-between">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link to="/">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
              alt="Netflix" 
              className="h-5 md:h-6 cursor-pointer"
            />
          </Link>
          <ul className="hidden md:flex ml-10 gap-7">
            <li>
              <Link to="/" className="text-white hover:text-gray-300 cursor-pointer text-[14px] font-light transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/tv-shows" className="text-white hover:text-gray-300 cursor-pointer text-[14px] font-light transition duration-300">TV Shows</Link>
            </li>
            <li>
              <Link to="/movies" className="text-white hover:text-gray-300 cursor-pointer text-[14px] font-light transition duration-300">Movies</Link>
            </li>
            <li>
              <Link to="/new" className="text-white hover:text-gray-300 cursor-pointer text-[14px] font-light transition duration-300">New & Popular</Link>
            </li>
            <li>
              <Link to="/my-list" className="text-white hover:text-gray-300 cursor-pointer text-[14px] font-light transition duration-300">My List</Link>
            </li>
            <li>
              <Link to="/browse-languages" className="text-white hover:text-gray-300 cursor-pointer text-[14px] font-light transition duration-300">Browse by Languages</Link>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative flex items-center">
            <div 
              className={`flex items-center bg-black/0 border border-transparent transition-all duration-300 ${
                isSearchOpen ? 'w-[200px] md:w-[300px] bg-black/90 border-white' : 'w-auto'
              }`}
            >
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-white p-1 hover:text-gray-300 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Titles, people, genres"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none transition-all duration-300 ${
                  isSearchOpen ? 'w-full px-2 py-1' : 'w-0 px-0'
                }`}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    Navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                  }
                }}
              />
            </div>
          </div>
          
          {/* Notifications */}
          <div className="text-white cursor-pointer hover:text-gray-300 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          
          {/* Profile - Simplified */}
          <div className="relative">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
              alt="Profile" 
              className="w-8 h-8 rounded hover:ring-2 hover:ring-white transition duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black z-50 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
              alt="Netflix" 
              className="h-5"
            />
          </Link>
          <button 
            className="text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li>
            <Link to="/" className="text-white block py-2 hover:text-gray-300 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/tv-shows" className="text-white block py-2 hover:text-gray-300 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>TV Shows</Link>
          </li>
          <li>
            <Link to="/movies" className="text-white block py-2 hover:text-gray-300 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>Movies</Link>
          </li>
          <li>
            <Link to="/new" className="text-white block py-2 hover:text-gray-300 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>New & Popular</Link>
          </li>
          <li>
            <Link to="/my-list" className="text-white block py-2 hover:text-gray-300 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>My List</Link>
          </li>
          <li>
            <Link to="/browse-languages" className="text-white block py-2 hover:text-gray-300 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>Browse by Languages</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;