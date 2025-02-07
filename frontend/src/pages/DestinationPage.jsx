import { hotels, touristPlaces } from '../assets/assets';
import HotelCard from '../components/HotelCard';
import TouristPlaceCard from '../components/TouristPlaceCard';

const DestinationPage = () => {
  return (
    <div className='flex gap-10 mt-10 '>
      <div className='flex-1 flex flex-col gap-4 items '>
        <h1 className='text-2xl font-bold '>Top tourist areas for your destination</h1>

        <div className='grid grid-cols-2 gap-4 '>
          {touristPlaces.map((place, index) => {
            return <TouristPlaceCard key={index} place={place} />;
          })}
        </div>
      </div>

      <div className='flex flex-col gap-4 sticky top-10'>
        <h1 className='text-2xl font-bold'>Top hotels for your destination</h1>
        <div className='grid grid-cols-1 gap-4 '>
          {/* Hotel Cards */}
          {hotels.map((hotel, index) => {
            return <HotelCard key={index} hotel={hotel} />;
          })}
        </div>
      </div> 
    </div>
  );
};
export default DestinationPage;
