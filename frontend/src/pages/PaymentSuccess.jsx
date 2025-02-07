import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess = () => {
  const [search] = useSearchParams();
  const dataQuery = search.get('data');
  const [data, setData] = useState({});

  useEffect(() => {
    const resData = atob(dataQuery);

    const resObject = JSON.parse(resData);

    setData(resObject);
  }, [search]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-green-50 text-green-900 p-4'>
      <div className='bg-green-100 p-6 rounded-2xl shadow-lg flex flex-col items-center'>
        <CheckCircle size={60} className='text-green-600 mb-4' />
        <p className='text-2xl font-bold mb-2'>Payment Successful</p>
        <p className='text-lg text-green-700'>Rs. {data.total_amount}</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
