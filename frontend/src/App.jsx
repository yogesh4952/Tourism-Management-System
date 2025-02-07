import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import DestinationPage from './pages/DestinationPage.jsx';
import Applayout from './components/Applayout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Blog from './pages/Blog.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import GuidePage from './pages/GuidePage.jsx';
import DestinationDetailPage from './pages/DestinationDetailPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import Payment from './components/Payment.jsx';
import PaymentSuccess from './pages/PaymentSuccess.jsx';
import PaymentFailure from './pages/PaymentFailure.jsx';
import AccommodationPage from './pages/AccomodationPage.jsx';
import HotelDetailPage from './pages/HotelDetailPage.jsx';
import PremiumSection from './pages/PremiumPage.jsx';
import CreateBlog from './pages/CreateBlog.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/Blog', element: <Blog /> },
      { path: '/Destination', element: <DestinationPage /> },
      {
        path: '/destination-detail/:placeId',
        element: <DestinationDetailPage />,
      },
      { path: '/accommodation', element: <AccommodationPage /> },
      { path: '/Guide', element: <GuidePage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/payment/:hotelId', element: <Payment /> },
      { path: '/payment-success', element: <PaymentSuccess /> },
      { path: '/payment-failure', element: <PaymentFailure /> },
      { path: '/hotel/:hotelId', element: <HotelDetailPage /> },
      { path: '/premium', element: <PremiumSection /> },
      { path: '/create-blog', element: <CreateBlog /> },
      { path: '/*', element: <ErrorPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
