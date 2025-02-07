import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
