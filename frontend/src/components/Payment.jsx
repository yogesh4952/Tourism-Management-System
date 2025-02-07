import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js';
import { CreditCard, User, DollarSign } from 'lucide-react';
import { useParams } from 'react-router';
import { hotels } from '../assets/assets';

const Payment = () => {
  const { hotelId } = useParams();

  const hotel = hotels.find((hotel) => hotel.id.toString() === hotelId);
  const [formData, setformData] = useState({
    amount: hotel?.price || '1000',
    tax_amount: '0',
    total_amount: hotel?.price,
    transaction_uuid: uuidv4(),
    product_service_charge: '0',
    product_delivery_charge: '0',
    product_code: 'EPAYTEST',
    success_url: 'http://localhost:5173/payment-success',
    failure_url: 'http://localhost:5173/payment-failure',
    signed_field_names: 'total_amount,transaction_uuid,product_code',
    signature: '',
    secret: '8gBm/:&EnhH.1/q',
  });

  const generateSignature = (
    total_amount,
    transaction_uuid,
    product_code,
    secret
  ) => {
    const hashString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
    const hash = CryptoJS.HmacSHA256(hashString, secret);
    const hashedSignature = CryptoJS.enc.Base64.stringify(hash);
    return hashedSignature;
  };

  useEffect(() => {
    const { total_amount, transaction_uuid, product_code, secret } = formData;
    const hashedSignature = generateSignature(
      total_amount,
      transaction_uuid,
      product_code,
      secret
    );

    setformData({ ...formData, signature: hashedSignature });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.amount]);

  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-900 to-black'>
      <form
        action='https://rc-epay.esewa.com.np/api/epay/main/v2/form'
        method='POST'
        className='w-full max-w-md bg-gray-800 text-white p-8 rounded-3xl shadow-xl transform transition-all hover:scale-105'
      >
        <h1 className='text-3xl font-extrabold mb-6 text-center text-green-500'>
          Secure Checkout
        </h1>

        <div className='mb-6'>
          <label
            htmlFor='amount'
            className='block text-sm font-semibold text-green-400 mb-2'
          >
            Amount
          </label>
          <div className='relative'>
            <DollarSign className='absolute left-3 top-3 text-green-400' />
            <input
              type='text'
              id='amount'
              name='amount'
              autoComplete='off'
              value={formData.amount}
              onChange={({ target }) =>
                setformData({
                  ...formData,
                  amount: target.value,
                  total_amount: target.value,
                })
              }
              required
              className='w-full pl-10 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>
        </div>

        {/* Hidden Fields */}
        <input
          type='hidden'
          id='tax_amount'
          name='tax_amount'
          value={formData.tax_amount}
          required
        />
        <input
          type='hidden'
          id='total_amount'
          name='total_amount'
          value={formData.total_amount}
          required
        />
        <input
          type='hidden'
          id='transaction_uuid'
          name='transaction_uuid'
          value={formData.transaction_uuid}
          required
        />
        <input
          type='hidden'
          id='product_code'
          name='product_code'
          value={formData.product_code}
          required
        />
        <input
          type='hidden'
          id='product_service_charge'
          name='product_service_charge'
          value={formData.product_service_charge}
          required
        />
        <input
          type='hidden'
          id='product_delivery_charge'
          name='product_delivery_charge'
          value={formData.product_delivery_charge}
          required
        />
        <input
          type='hidden'
          id='success_url'
          name='success_url'
          value={formData.success_url}
          required
        />
        <input
          type='hidden'
          id='failure_url'
          name='failure_url'
          value={formData.failure_url}
          required
        />
        <input
          type='hidden'
          id='signed_field_names'
          name='signed_field_names'
          value={formData.signed_field_names}
          required
        />
        <input
          type='hidden'
          id='signature'
          name='signature'
          value={formData.signature}
          required
        />

        <div className='mb-6'>
          <label
            htmlFor='first_name'
            className='block text-sm font-semibold text-green-400 mb-2'
          >
            First Name
          </label>
          <div className='relative'>
            <User className='absolute left-3 top-3 text-green-400' />
            <input
              type='text'
              id='first_name'
              name='first_name'
              className='w-full pl-10 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              required
            />
          </div>
        </div>

        <div className='mb-6'>
          <label
            htmlFor='last_name'
            className='block text-sm font-semibold text-green-400 mb-2'
          >
            Last Name
          </label>
          <div className='relative'>
            <User className='absolute left-3 top-3 text-green-400' />
            <input
              type='text'
              id='last_name'
              name='last_name'
              className='w-full pl-10 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              required
            />
          </div>
        </div>

        <button
          type='submit'
          className='w-full py-3 bg-green-600 hover:bg-green-700 rounded-md text-white font-medium flex items-center justify-center space-x-2 transform transition-all hover:scale-105'
        >
          <CreditCard />
          <span>Pay via E-Sewa</span>
        </button>
      </form>
    </div>
  );
};

export default Payment;
