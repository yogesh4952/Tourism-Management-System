import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router';
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import DestinationPage from './pages/DestinationPage.jsx';
import Applayout from './components/Applayout.jsx';
import AccomodationPage from './pages/AccomodationPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Blog from './pages/Blog.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import GuidePage from './pages/GuidePage.jsx';
import DestinationDetailPage from './pages/DestinationDetailPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import Payment from './components/Payment.jsx';
import PaymentSuccess from './pages/PaymentSuccess.jsx';
import PaymentFailure from './pages/PaymentFailure.jsx';
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/Blog',
          element: <Blog />,
        },
        {
          path: '/Destination',
          element: <DestinationPage />,
        },
        {
          path: '/destination-detail/:placeId',
          element: <DestinationDetailPage />,
        },
        {
          path: '/accomodation',
          element: <AccomodationPage />,
        },
        {
          path: '/Guide',
          element: <GuidePage />,
        },
        {
          path:'/signup',
          element:<SignUpPage/>
        },
       

        {
          path: '/login',
          element: <LoginPage />,
        },

        {
          path: '/payment',
          element: <Payment />,
        },

        {
          path: '/payment-success',
          element: <PaymentSuccess />,
        },

        {
          path: '/payment-failure',
          element: <PaymentFailure />,
        },

        {
          path: '/*',
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
