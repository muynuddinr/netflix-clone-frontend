import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Suggestion from './Components/Suggestion';
import Footer from './Components/Footer';
import './index.css';
import TVShows from './Pages/tv-shows';
import Movies from './Pages/movies';
import News from './Pages/new';
import MyList from './Pages/my-list';
import BrowseLanguages from './Pages/browse-languages';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Suggestion />
            </>
          } />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/new" element={<News />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/browse-languages" element={<BrowseLanguages />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
