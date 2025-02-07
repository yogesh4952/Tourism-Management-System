import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { touristPlaces } from '../assets/assets';
import TouristPlaceCard from '../components/TouristPlaceCard';
import TestimonialSlider from './TestimonalPage';
import Button from '../components/Button';
import { Typewriter } from 'react-simple-typewriter';
import WhyChooseUsPage from './WhyChooseUsPage';
import GetInTouch from '../components/GetInTouch';
import { useLanguageContext } from '../context/LanguageContext';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguageContext();

  const popularDestinations = touristPlaces.filter((place) => place.id < 7);

  // Translation dictionary
  const translations = {
    en: {
      typewriter: [
        'Explore Nepal with Us',
        'Your Adventure Awaits',
        'Discover the Best Destinations',
      ],
      heroSubtitle:
        'Your journey begins here. Discover the best in tourism and hospitality.',
      popularDestinations: 'Popular Destinations',
      destinationsSubtext: 'Explore our most beloved locations',
      viewAll: 'View All Destinations',
      testimonialTitle: 'What Our Travelers Say',
    },
    ne: {
      typewriter: [
        'हाम्रो साथमा नेपाल अन्वेषण गर्नुहोस्',
        'तपाईंको साहसिक यात्रा पर्खि रहेको छ',
        'उत्तम गन्तव्यहरू पत्ता लगाउनुहोस्',
      ],
      heroSubtitle:
        'तपाईंको यात्रा यहाँबाट सुरु हुन्छ। पर्यटन र आतिथ्यको उत्तमतम आनन्द लिनुहोस्।',
      popularDestinations: 'लोकप्रिय गन्तव्यहरू',
      destinationsSubtext: 'हाम्रा प्रिय स्थानहरू अन्वेषण गर्नुहोस्',
      viewAll: 'सबै गन्तव्यहरू हेर्नुहोस्',
      testimonialTitle: 'हाम्रा यात्रुहरू के भन्छन्',
    },
  };

  return (
    <>
      <div className='bg-base-200 text-base-content font-sans'>
        {/* Hero Section */}
        <div className='relative h-screen flex items-center justify-center bg-base-300'>
          <img
            src='https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
            alt='Hero Background'
            className='absolute inset-0 w-full h-full object-cover opacity-95'
          />
          <div className='text-center relative z-10 flex flex-col items-center justify-center '>
            <h1 className='text-5xl font-bold mb-4'>
              <Typewriter
                words={translations[language].typewriter}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className='text-xl mb-8'>
              {translations[language].heroSubtitle}
            </p>
            <NavLink to='/destination' className='self-center'>
              <Button />
            </NavLink>
          </div>
        </div>

        <div>
          <WhyChooseUsPage />
        </div>

        {/* Popular Destinations Section */}
        <section className='py-16 bg-base-100 text-center'>
          <h2 className='text-4xl font-extrabold text-base-content'>
            {translations[language].popularDestinations}
          </h2>
          <p className='text-lg text-base-content/70 mt-2'>
            {translations[language].destinationsSubtext}
          </p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16'>
            {popularDestinations.map((place) => (
              <TouristPlaceCard key={place.id} place={place} />
            ))}
          </div>

          <NavLink to='/destination'>
            <button className='btn btn-primary mt-8 px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-700'>
              {translations[language].viewAll}
            </button>
          </NavLink>
        </section>

        <div className='py-16 bg-base-200 text-center'>
          <h2 className='text-4xl font-extrabold mb-8'>
            {translations[language].testimonialTitle}
          </h2>
          <TestimonialSlider />
        </div>
      </div>

      <GetInTouch />
    </>
  );
};

export default HomePage;
