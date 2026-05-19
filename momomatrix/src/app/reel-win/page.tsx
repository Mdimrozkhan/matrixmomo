'use client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ReelWinPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Header />

      <main className="flex-grow">

        {/* ================= COMING SOON HERO ================= */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">

          {/* Background Image */}
          <div className="absolute inset-0">

            <Image
              src="/reel-coming-soon.jpg"
              alt="Coming Soon"
              fill
              priority
              quality={100}
              className="object-cover object-center"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75"></div>

            {/* Red Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black/50 to-black"></div>

          </div>

          {/* Floating Glow */}
          {/* <div className="absolute w-[350px] h-[350px] bg-red-600/20 blur-[1500px] rounded-full"></div> */}
          {/* Background Image */}
<div className="absolute inset-0">

  <Image
    src="/reel-coming-soon.jpg"
    alt="Coming Soon"
    fill
    priority
    quality={100}
    className="object-cover object-center scale-100"
  />

  {/* Light Overlay Only */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Bottom Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>

</div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">

            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-red-600/10 border border-red-600/30 px-5 py-3 rounded-full mb-8 backdrop-blur-xl">

              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

              <span className="text-red-500 uppercase tracking-[4px] text-sm font-bold">
                Reel & Win Campaign
              </span>

            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">

              COMING

              <span className="block text-red-600 glow-red">
                SOON
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Big rewards, creator challenges, free momos, exclusive discounts
              and viral reel competitions are arriving soon at MomoMatrix.
            </p>

            {/* Countdown Style Boxes */}
            <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-4">

              <div className="count-box">
                <h3>🔥</h3>
                <p>Rewards</p>
              </div>

              <div className="count-box">
                <h3>🎥</h3>
                <p>Reels</p>
              </div>

              <div className="count-box">
                <h3>🏆</h3>
                <p>Winners</p>
              </div>

              <div className="count-box">
                <h3>🚀</h3>
                <p>Creators</p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-4 justify-center">

              <Link
                href="/menu"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(255,0,0,0.35)]"
              >
                Explore Menu
              </Link>

              <Link
                href="/offer"
                className="border border-red-600 hover:bg-red-600 text-white px-8 py-4 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105"
              >
                View Offers
              </Link>

            </div>

            {/* Bottom Text */}
            <p className="mt-10 text-gray-500 text-sm sm:text-base">
              Stay tuned for the biggest creator reward campaign 🚀
            </p>

          </div>

        </section>

      </main>

      <Footer />

      {/* ================= CUSTOM CSS ================= */}
      <style jsx>{`

        .glow-red {
          text-shadow: 0 0 25px rgba(255, 0, 0, 0.7);
        }

        .count-box {
          width: 110px;
          height: 110px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,0,0,0.2);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }

        .count-box:hover {
          transform: translateY(-8px);
          border-color: rgba(255,0,0,0.8);
          box-shadow: 0 0 35px rgba(255,0,0,0.2);
        }

        .count-box h3 {
          font-size: 34px;
          margin-bottom: 8px;
        }

        .count-box p {
          color: white;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        @media (max-width: 640px) {

          .count-box {
            width: 90px;
            height: 90px;
            border-radius: 20px;
          }

          .count-box h3 {
            font-size: 28px;
          }

          .count-box p {
            font-size: 12px;
          }

        }

      `}</style>

    </div>
  );
}