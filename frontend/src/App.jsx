import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import Applayout from './components/Applayout';
import AccomodationPage from './pages/AccomodationPage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {

          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/Destination",
          element: <DestinationPage />,

        },
        {
          path: "/accomodation",
          element: <AccomodationPage />,
        }
      ]




    }
  ]);
  return <RouterProvider router={router} />;

};
export default App;
