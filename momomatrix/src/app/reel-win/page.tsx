import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const rewards = [
  {
    views: '500+',
    reward: 'Free Dip',
    icon: '🥫',
    color: 'from-yellow-600 to-orange-600'
  },
  {
    views: '1K+',
    reward: '₹20 OFF (20% off)',
    icon: '💰',
    color: 'from-green-600 to-emerald-600'
  },
  {
    views: '5K+',
    reward: 'Free Water Bottle',
    icon: '🍶',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    views: '10K+',
    reward: 'Free Full Plate',
    icon: '🍽️',
    color: 'from-purple-600 to-pink-600'
  }
];

export default function ReelWinPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              REEL & <span className="text-red-600">WIN</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
              Create content, get rewards!
            </p>
            <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
        </section>

        {/* How to Participate */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
              HOW TO <span className="text-red-600">PARTICIPATE</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">1. Make a Reel</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Create an Instagram Reel at MomoMatrix outlet
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.429 9.23a1 1 0 00-.977.977l-.03 3.028a1 1 0 001.447.93l2.552-1.276 2.552 1.276a1 1 0 001.447-.93l-.03-3.028a1 1 0 00-.977-.977L12 8.5l-4.571.73z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">2. Tag Us</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Tag @momomatrix in your reel
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">3. Get Rewards</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Upload & get rewards based on views
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
              REWARDS BASED ON <span className="text-red-600">VIEWS</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {rewards.map((reward, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-600 transition-all duration-300 group"
                >
                  <div className={`h-2 bg-gradient-to-r ${reward.color}`}></div>
                  <div className="p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{reward.icon}</div>
                    <div className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {reward.views}
                    </div>
                    <div className="text-base sm:text-lg text-red-500 font-semibold mb-3 sm:mb-4">
                      {reward.reward}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      Views on your reel
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creator of the Week */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 sm:p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                CREATOR OF THE WEEK
              </h2>
              <div className="text-5xl sm:text-6xl mb-4">👑</div>
              <p className="text-lg sm:text-xl text-white mb-4 sm:mb-6">
                Special Combo + Feature on our page
              </p>
              <p className="text-gray-200 text-sm sm:text-base mb-6 sm:mb-8">
                The most creative reel of the week gets exclusive rewards and social media feature!
              </p>
              <button className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-bold hover:bg-gray-100 transition-colors duration-300">
                Become Creator of the Week
              </button>
            </div>
          </div>
        </section>

        {/* QR Code Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
              SCAN TO FOLLOW <span className="text-red-600">@MOMOMATRIX</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
              For more offers & updates
            </p>
            
            <div className="bg-white p-6 sm:p-8 rounded-lg inline-block">
              {/* QR Code Placeholder - You can replace this with actual QR code */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clipRule="evenodd" />
                    <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
                  </svg>
                  <p className="text-gray-800 text-xs sm:text-sm">QR Code</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm sm:text-base mt-6">
              Follow us on Instagram for latest updates and exclusive offers
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              READY TO CREATE?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
              Start creating content and earn amazing rewards!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/menu" 
                className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-700 transition-all duration-300"
              >
                Order & Create
              </Link>
              <Link 
                href="/offer" 
                className="border-2 border-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-600 transition-all duration-300"
              >
                View Special Offers
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
