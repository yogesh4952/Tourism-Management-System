import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { XCircle } from 'lucide-react';

const PaymentFailure = () => {
  const [search] = useSearchParams();
  const dataQuery = search.get('data');
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const resData = atob(dataQuery);
      const resObject = JSON.parse(resData);
      console.log(resObject);
      setData(resObject);
    } catch (error) {
      console.error('Error parsing data:', error);
      setData({ error_message: 'Invalid data received.' }); // Provide a default error message
    }
  }, [search]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen  p-4'>
      <div className='bg-gray-700 p-6 rounded-2xl shadow-lg flex flex-col items-center'>
        <XCircle size={60} className='text-red-500 mb-4' />
        <p className='text-2xl font-bold mb-2 text-red-400'>Payment Failed</p>
        <p className='text-lg text-gray-300'>
          Error Message: {data.error_message || 'Unknown error'}
        </p>
      </div>
    </div>
  );
};

export default PaymentFailure;
