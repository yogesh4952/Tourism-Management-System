import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { XCircle } from 'lucide-react';

const PaymentFailure = () => {
  const [search] = useSearchParams();
  const dataQuery = search.get('data');
  const [data, setData] = useState({});

  useEffect(() => {
    const resData = atob(dataQuery);
    const resObject = JSON.parse(resData);
    console.log(resObject);

    setData(resObject);
  }, [search]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-900 p-4'>
      <div className='bg-red-100 p-6 rounded-2xl shadow-lg flex flex-col items-center'>
        <XCircle size={60} className='text-red-600 mb-4' />
        <p className='text-2xl font-bold mb-2'>Payment Failed</p>
        <p className='text-lg text-red-700'>
          Error Message: {data.error_message || 'Unknown error'}
        </p>
      </div>
    </div>
  );
};

export default PaymentFailure;
