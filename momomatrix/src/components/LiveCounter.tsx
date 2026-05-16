'use client';

import { useState, useEffect } from 'react';

export default function LiveCounter() {
  const [orders, setOrders] = useState(1247);
  const [customers, setCustomers] = useState(892);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders(prev => prev + Math.floor(Math.random() * 3));
      setCustomers(prev => prev + Math.floor(Math.random() * 2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-24 left-4 z-40 bg-black/90 border border-red-600 rounded-lg p-4 backdrop-blur-sm">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-white text-sm">Live Orders:</span>
          <span className="text-red-500 font-bold">{orders.toLocaleString()}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-white text-sm">Happy Customers:</span>
          <span className="text-red-500 font-bold">{customers.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
