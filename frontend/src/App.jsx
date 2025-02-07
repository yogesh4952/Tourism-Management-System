import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DestinationPage from './pages/DestinationPage';
import DestinationDetailPage from './pages/DestinationDetailPage';

const App = () => {
  return (
    <div className='w-full max-w-screen-xl mx-auto px-4'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/destination' element={<DestinationPage />} />
        <Route
          path='destination-detail/:placeId'
          element={<DestinationDetailPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
