"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  {
    name: 'VEG MOMO',
    price: '₹55',
    image: '/veg-momo.png',
    description: 'Fresh vegetables wrapped in soft steamed dough with spicy chutney.',
    category: 'Vegetarian',
    popular: true
  },
  {
    name: 'PANEER MOMO',
    price: '₹80',
    image: '/paneer-momo.png',
    description: 'Soft paneer stuffing with premium Indian spices and smoky flavor.',
    category: 'Vegetarian',
    popular: true
  },
  {
    name: 'VEG BUTTER MOMO',
    price: '₹60',
    image: '/veg-butter-momo.png',
    description: 'Classic veg momos tossed in buttery masala and signature sauce.',
    category: 'Vegetarian',
    popular: false
  },
  {
    name: 'PANEER BUTTER MOMO',
    price: '₹90',
    image: '/paneer-butter-momo.png',
    description: 'Rich paneer butter momos with creamy spicy fusion taste.',
    category: 'Vegetarian',
    popular: false
  },
     {
    name: 'MOMO SPECIAL DRINK',
    price: '₹10',
    image: '/bottel.png',
    description: 'Refreshing chilled drink perfectly crafted to enjoy with hot spicy momos.',
    category: 'Beverage',
    popular: true
  }
];

export default function MenuPage() {
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">
      <Header />

      <main>

        {/* ================= HERO SECTION ================= */}
<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">

    <Image
      src="/memu.png"
      alt="Momo Hero"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center scale-100 opacity-100"
      quality={100}
    />

    {/* Light Overlay Only */}
    <div className="absolute inset-0 bg-black/45"></div>

  </div>

  {/* Optional Small Glow */}
  <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-red-600/10 rounded-full blur-[80px]"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
      Steam • Spice • Future
    </p>

    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-white">

      OUR
      <span className="block text-red-600">
        MOMO MENU
      </span>

    </h1>

    <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
      Experience futuristic momos crafted with premium ingredients,
      signature sauces and unforgettable steam flavor.
    </p>

    <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">

      <Link
        href="/offer"
        className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,0,0,0.35)]"
      >
        View Offers
      </Link>

      <button className="border border-red-600 hover:bg-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 hover:scale-105">
        Order Coming Soon
      </button>

    </div>

  </div>
</section>
        {/* ================= MENU SECTION ================= */}
        <section className="relative py-24 px-6 lg:px-10">

          {/* Background Glow */}
          <div className="absolute left-0 top-0 w-[350px] h-[350px] bg-red-600/10 blur-[120px] rounded-full"></div>

          <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-red-600/10 blur-[120px] rounded-full"></div>

          <div className="max-w-7xl mx-auto relative z-10">

            {/* Heading */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">

                SPECIAL
                <span className="text-red-600">
                  MOMOS
                </span>

              </h2>

              <p className="mt-4 sm:mt-5 text-gray-400 text-base sm:text-lg">
                Crafted with premium fillings and bold futuristic flavors
              </p>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

              {menuItems.map((item, index) => (

                <div
                  key={index}
                  className="group relative bg-white/[0.03] border border-red-600/20 rounded-[35px] overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-red-600 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(255,0,0,0.18)]"
                >

                  {/* Popular Badge */}
                  {item.popular && (

                    <div className="absolute top-5 right-5 z-20 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest shadow-lg">

                      BEST SELLER

                    </div>

                  )}

                  {/* Image */}
                  <div className="relative h-[250px] sm:h-[300px] overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 md:p-8">

                    <div className="flex justify-between items-start gap-4">

                      <div>

                        <p className="text-red-500 uppercase tracking-[4px] text-sm font-semibold">
                          {item.category}
                        </p>

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mt-2 sm:mt-3 group-hover:text-red-500 transition-colors">
                          {item.name}
                        </h3>

                      </div>

                      <div className="text-2xl sm:text-3xl md:text-4xl font-black text-red-600">
                        {item.price}
                      </div>

                    </div>

                    <p className="text-gray-400 mt-4 sm:mt-6 leading-relaxed text-sm sm:text-base md:text-lg">
                      {item.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4">

                      <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 hover:scale-105">
                        Add to Cart
                      </button>

                      <button className="px-4 sm:px-6 border border-red-600 hover:bg-red-600 rounded-2xl transition-all duration-300">
                        ♨️
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>
        </section>

        {/* ================= EXPERIENCE SECTION ================= */}
        <section className="py-24 px-6 lg:px-10">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Image */}
            <div className="relative">

              <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full"></div>

              <Image
                src="/big-momo.png"
                alt="Big Momo"
                width={700}
                height={700}
                className="relative z-10 object-contain floating"
              />

            </div>

            {/* Right Content */}
            <div>

              <p className="uppercase tracking-[6px] text-red-500 font-semibold">
                MomoMatrix Experience
              </p>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">

                STEAMED WITH
                <span className="block text-red-600">
                  FUTURE FLAVOR
                </span>

              </h2>

              <p className="mt-6 sm:mt-8 text-gray-300 text-base sm:text-lg leading-relaxed">
                Every momo at MomoMatrix is made with fresh ingredients,
                signature sauces and premium steam cooking technology
                for an unforgettable futuristic food experience.
              </p>

              {/* Features */}
              <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-5">

                <div className="feature-box">
                  🔥
                  <p>Hot & Fresh</p>
                </div>

                <div className="feature-box">
                  ♨️
                  <p>Steam Cooked</p>
                </div>

                <div className="feature-box">
                  🛡️
                  <p>Hygienic</p>
                </div>

                <div className="feature-box">
                  🚀
                  <p>Fast Service</p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="py-24 px-6 lg:px-10">

          <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[40px] border border-red-600/20 bg-gradient-to-r from-red-950/20 to-black p-14">

            {/* Background */}
            <div className="absolute inset-0 opacity-10">

              <Image
                src="/2ndbigmomo.png"
                alt="Background"
                fill
                sizes="100vw"
                className="object-cover"
              />

            </div>

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 text-center">

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">

                CODE.
                <span className="text-red-600">
                  STEAM.
                </span>
                SERVE.

              </h2>

              <p className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                Taste premium futuristic momos with unforgettable spicy flavor.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">

                <Link
                  href="/offer"
                  className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 hover:scale-105"
                >
                  Special Offers
                </Link>

                <Link
                  href="/"
                  className="border border-red-600 hover:bg-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 hover:scale-105"
                >
                  Back To Home
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

      {/* ================= CSS ================= */}
      <style jsx>{`

        .floating {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .feature-box {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,0,0,0.2);
          border-radius: 20px;
          padding: 16px;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        @media (min-width: 640px) {
          .feature-box {
            padding: 20px;
            font-size: 28px;
            border-radius: 22px;
          }
        }

        @media (min-width: 768px) {
          .feature-box {
            padding: 24px;
            font-size: 32px;
            border-radius: 24px;
          }
        }

        .feature-box:hover {
          transform: translateY(-5px);
          border-color: rgba(255,0,0,0.7);
          box-shadow: 0 0 30px rgba(255,0,0,0.2);
        }

        .feature-box p {
          font-size: 12px;
          margin-top: 8px;
          color: #d1d5db;
        }

        @media (min-width: 640px) {
          .feature-box p {
            font-size: 13px;
            margin-top: 9px;
          }
        }

        @media (min-width: 768px) {
          .feature-box p {
            font-size: 14px;
            margin-top: 10px;
          }
        }

      `}</style>

    </div>
  );
}