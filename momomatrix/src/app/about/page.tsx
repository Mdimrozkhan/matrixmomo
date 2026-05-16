'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
          <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-red-600/10 rounded-full blur-[100px] sm:blur-[120px] md:blur-[140px]"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-center mb-6">
              ABOUT
              <span className="block text-red-600 glow-red">MOMOMATRIX</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg text-center max-w-2xl mx-auto">
              Discover the story behind the future of momos - where tradition meets innovation.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  Our <span className="text-red-600">Story</span>
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  MomoMatrix was born from a passion for revolutionizing the traditional momo experience. We believe that momos - the beloved steamed dumplings - deserve a futuristic twist that combines authentic flavors with modern innovation.
                </p>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  Our journey began with a simple question: What if we could take the humble momo and transform it into something extraordinary? Something that not only satisfies your taste buds but also creates an unforgettable experience.
                </p>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Today, MomoMatrix stands at the intersection of tradition and technology, serving premium steam-cooked momos that are crafted with love, precision, and a dash of futuristic flair.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-red-600/20 rounded-3xl blur-[60px]"></div>
                <Image
                  src="/big-momo.png"
                  alt="MomoMatrix Story"
                  width={500}
                  height={500}
                  className="relative z-10 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-600/20 rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-lg">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl">🎯</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-red-500">Our Mission</h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  To revolutionize the momo experience by combining traditional steaming techniques with innovative flavors, premium ingredients, and futuristic presentation. We aim to make every bite an adventure.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-600/20 rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-lg">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl">🚀</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-red-500">Our Vision</h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  To become the leading brand in innovative momo cuisine, known for quality, creativity, and an unforgettable dining experience. We envision a world where momos are not just food, but a lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
              Our <span className="text-red-600">Values</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-600/20 rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-lg text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl">🔥</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Freshness First</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  We use only the freshest ingredients, sourced daily to ensure every momo is bursting with flavor.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-600/20 rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-lg text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl">♨️</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Steam Perfection</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Our signature steam-cooking technique preserves nutrients and creates the perfect texture every time.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-600/20 rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-lg text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl">🛡️</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Hygiene Guaranteed</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  We maintain the highest standards of cleanliness and food safety in every aspect of our operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-red-950/30 to-black border border-red-600/30 rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-500 mb-2">50K+</div>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base">Happy Customers</p>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-500 mb-2">100+</div>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base">Daily Orders</p>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-500 mb-2">4.9</div>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base">Star Rating</p>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-500 mb-2">24/7</div>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base">Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .glow-red {
          text-shadow: 0 0 30px rgba(255,0,0,0.7);
        }
      `}</style>
    </div>
  );
}
