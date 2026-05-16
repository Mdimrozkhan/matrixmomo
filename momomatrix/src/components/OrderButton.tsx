'use client';

import { useState } from 'react';

export default function OrderButton() {
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrder = () => {
    setIsOrdered(true);
    setTimeout(() => setIsOrdered(false), 2000);
  };

  return (
    <button
      onClick={handleOrder}
      className={`fixed bottom-8 right-8 z-50 px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
        isOrdered 
          ? 'bg-green-600 scale-110' 
          : 'bg-red-600 hover:bg-red-700 hover:scale-105'
      } text-white shadow-lg glow-red`}
    >
      {isOrdered ? (
        <span className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Order Placed!
        </span>
      ) : (
        <span className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Quick Order
        </span>
      )}
    </button>
  );
}
