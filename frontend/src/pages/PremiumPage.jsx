import React, { useState } from 'react';
import { FaCheck, FaLock, FaShieldAlt, FaCreditCard, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PremiumSection = () => {
  const navigate = useNavigate();
  const [user] = useState({ loggedIn: true });
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const features = {
    free: [
      '5 blog posts/month',
      'Basic analytics',
      'Standard support',
      'Limited templates'
    ],
    premium: [
      'Unlimited blog posts',
      'Advanced analytics',
      'Priority support',
      'Premium templates',
      'Ad-free experience'
    ]
  };

  const handleFreePlan = () => {
    navigate('/');
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    setTimeout(() => {
      const paymentSuccessful = Math.random() > 0.2;
      if (paymentSuccessful) {
        setPaymentSuccess(true);
        setShowPaymentForm(false);
      } else {
        setErrorMessage('Payment failed. Please check your payment details and try again.');
      }
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-8">
        Choose Your Plan
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Free Plan */}
        <div className="p-6 rounded-xl border flex flex-col ">
          <h3 className="text-2xl font-semibold mb-4">Free</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold">Rs 0</span>
            <span className="opacity-75">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {features.free.map((feature, index) => (
              <li key={index} className="flex items-center">
                <FaCheck className="mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <button
            onClick={handleFreePlan}
            className="btn btn-primary w-full mt-18"
          >
            Continue with Free Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="p-6 rounded-xl border-2 border-primary">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">Premium</h3>
            <span className="badge badge-primary">
              Most Popular
            </span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold">Rs 2999</span>
            <span className="opacity-75">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {features.premium.map((feature, index) => (
              <li key={index} className="flex items-center">
                <FaCheck className="mr-2" />
                {feature}
              </li>
            ))}
          </ul>

          {!showPaymentForm && !paymentSuccess && (
            <button
              onClick={() => setShowPaymentForm(true)}
              disabled={loading}
              className={`btn btn-primary mt-8 w-full ${loading ? 'loading' : ''}`}
            >
              Upgrade to Premium
            </button>
          )}
        </div>
      </div>

      {/* Payment Form */}
      {showPaymentForm && (
        <div className="p-6 rounded-xl border mb-8">
          <h3 className="text-xl font-semibold mb-6">Payment Details</h3>
          
          <div className="grid gap-4 md:grid-cols-2">
            <button
              onClick={() => setSelectedPaymentMethod('esewa')}
              className={`btn btn-outline h-24 ${selectedPaymentMethod === 'esewa' ? 'border-primary' : ''}`}
            >
              <img 
                src="https://esewa.com.np/common/images/esewa_logo.png" 
                alt="eSewa" 
                className="h-8"
              />
            </button>
            
            <button
              onClick={() => setSelectedPaymentMethod('card')}
              className={`btn btn-outline h-24 ${selectedPaymentMethod === 'card' ? 'border-primary' : ''}`}
            >
              <FaCreditCard className="text-3xl mr-2" />
              Credit/Debit Card
            </button>
          </div>

          {selectedPaymentMethod === 'card' && (
            <form onSubmit={handlePaymentSubmit} className="mt-6 space-y-4">
              <div>
                <label className="label">
                  <span className="label-text">Card Number</span>
                </label>
                <input
                  type="text"
                  placeholder="4242 4242 4242 4242"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">Expiry Date</span>
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                
                <div>
                  <label className="label">
                    <span className="label-text">CVC</span>
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
              >
                Confirm Payment
              </button>
            </form>
          )}

          {selectedPaymentMethod === 'esewa' && (
            <div className="mt-6 text-center">
              <button
                onClick={handlePaymentSubmit}
                disabled={loading}
                className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
              >
                Pay with eSewa
              </button>
            </div>
          )}
        </div>
      )}

      {/* Payment Status Messages */}
      {paymentSuccess && (
        <div className="alert alert-success mb-6">
          <div className="flex-1">
            <FaCheck className="text-2xl" />
            <label>
              <h3 className="font-bold">Welcome to Premium!</h3>
              <p>Your payment was successful. Enjoy all premium features!</p>
            </label>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="alert alert-error mb-6">
          <div className="flex-1">
            <FaTimes className="text-2xl" />
            <label>
              <h3 className="font-bold">Payment Error</h3>
              <p>{errorMessage}</p>
            </label>
          </div>
        </div>
      )}

      {/* Security Assurance */}
      <div className="text-center text-sm opacity-75 mt-8">
        <div className="flex items-center justify-center space-x-4 mb-2">
          <FaLock />
          <FaShieldAlt />
        </div>
        <p>
          256-bit SSL secured payment · 7-day money back guarantee · Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default PremiumSection;