import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const offers = [
  {
    title: 'COMBO 1',
    description: '2 PLATES MOMOS + 1 WATER BOTTLE',
    price: 'FREE WATER BOTTLE',
    originalPrice: '₹10',
    savings: 'Save ₹10',
    popular: true,
    features: ['Choose any 2 momo plates', 'Free 500ml water bottle', 'Best value deal']
  },
  {
    title: 'COMBO 2',
    description: '1 PLATE MOMOS + 20% DISCOUNT ON WATER BOTTLE',
    price: '₹8 ONLY',
    originalPrice: '₹10',
    savings: 'Save ₹2',
    popular: false,
    features: ['Choose any 1 momo plate', 'Water bottle at 20% off', 'Perfect for solo dining']
  }
];

export default function OfferPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              SPECIAL <span className="text-red-600">OFFERS</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
              MORE MOMOS. MORE HAPPINESS.
            </p>
            <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {offers.map((offer, index) => (
                <div 
                  key={index}
                  className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-red-600 rounded-xl overflow-hidden hover:border-red-500 transition-all duration-300 group"
                >
                  {offer.popular && (
                    <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="p-6 sm:p-8">
                    <div className="text-center mb-4 sm:mb-6">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {offer.title}
                      </h3>
                      <p className="text-gray-300 text-base sm:text-lg">
                        {offer.description}
                      </p>
                    </div>

                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                        {offer.price}
                      </div>
                      <div className="text-gray-500 line-through">
                        {offer.originalPrice}
                      </div>
                      <div className="text-green-500 font-semibold">
                        {offer.savings}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {offer.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-red-600 text-white py-3 sm:py-4 rounded-lg hover:bg-red-700 transition-colors duration-300 font-semibold text-base sm:text-lg">
                      Claim Offer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Offers Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
              MORE <span className="text-red-600">WAYS TO SAVE</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-gray-900 border border-red-600/30 rounded-lg p-4 sm:p-6 text-center hover:border-red-600 transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Happy Hours</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  20% off between 2-5 PM
                </p>
              </div>
              
              <div className="bg-gray-900 border border-red-600/30 rounded-lg p-4 sm:p-6 text-center hover:border-red-600 transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Group Discount</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  15% off on orders above ₹200
                </p>
              </div>
              
              <div className="bg-gray-900 border border-red-600/30 rounded-lg p-4 sm:p-6 text-center hover:border-red-600 transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Loyalty Points</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Earn points with every order
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              READY TO SAVE?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
              Order now and enjoy these amazing deals!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/menu" 
                className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-700 transition-all duration-300"
              >
                View Menu
              </Link>
              <Link 
                href="/reel-win" 
                className="border-2 border-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-600 transition-all duration-300"
              >
                Join Reel & Win
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
