'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <nav className="bg-black/95 backdrop-blur-md border-b border-red-600 sticky top-0 z-50 shadow-lg shadow-red-900/20">

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

          {/* Main Header */}
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">

            {/* ================= LOGO ================= */}
            <Link
              href="/"
              className="flex items-center"
            >
              <Image
                src="/logo1.png"
                alt="MomoMatrix Logo"
                width={115}
                height={70}
                priority
                className="object-contain w-auto h-auto w-[90px] sm:w-[100px] md:w-[115px] h-[55px] sm:h-[62px] md:h-[70px] hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden md:flex items-center space-x-4 sm:space-x-6 lg:space-x-8">

              <Link href="/" className="nav-link">
                Home
              </Link>

              <Link href="/menu" className="nav-link">
                Menu
              </Link>

              <Link href="/offer" className="nav-link">
                Offers
              </Link>

              <Link href="/reel-win" className="nav-link">
                Reel & Win
              </Link>

              {/* Find MomoMatrix */}
              <button
                onClick={() => setShowLocation(true)}
                className="flex items-center gap-3 text-white hover:text-red-500 transition-all duration-300 font-medium group"
              >

                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.35)] group-hover:scale-110 transition-all duration-300">

                  <Image
                    src="/big-momo.png"
                    alt="Find MomoMatrix"
                    fill
                    className="object-cover"
                  />

                </div>

                <span>
                  Find MomoMatrix
                </span>

              </button>

              {/* Order Button */}
              <button
                onClick={() => setShowComingSoon(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg shadow-red-600/30 hover:scale-105"
              >
                Order Now
              </button>

            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <div className="md:hidden">

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-red-500 transition-colors duration-300"
              >

                <svg
                  className="h-7 w-7"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >

                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}

                </svg>

              </button>

            </div>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {isMenuOpen && (

            <div className="md:hidden border-t border-red-600/40 py-5 space-y-5 bg-black/95 text-center rounded-b-2xl animate-fadeIn">

              <Link
                href="/"
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/menu"
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>

              <Link
                href="/offer"
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Offers
              </Link>

              <Link
                href="/reel-win"
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Reel & Win
              </Link>

              <Link
                href="/about"
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Find Location */}
              <button
                onClick={() => {
                  setShowLocation(true);
                  setIsMenuOpen(false);
                }}
                className="mobile-link flex items-center justify-center gap-3"
              >

                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.35)]">

                  <Image
                    src="/big-momo.png"
                    alt="Find MomoMatrix"
                    fill
                    className="object-cover"
                  />

                </div>

                <span className="text-base font-semibold">
                  Find MomoMatrix
                </span>

              </button>

              {/* Order Button */}
              <button
                onClick={() => {
                  setShowComingSoon(true);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Order Now
              </button>

            </div>

          )}
        </div>
      </nav>

      {/* ================= COMING SOON MODAL ================= */}
      {showComingSoon && (

        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4">

          <div className="bg-[#111] border border-red-600/30 rounded-[35px] max-w-md w-full mx-auto overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.25)] animate-popup">

            {/* Image */}
            <div className="relative h-[200px] sm:h-[250px]">

              <Image
                src="/2ndbigmomo.png"
                alt="Coming Soon"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/50"></div>

            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 md:p-8 text-center">

              <h2 className="text-3xl sm:text-4xl font-black text-white">
                COMING
                <span className="text-red-600 block">
                  SOON
                </span>
              </h2>

              <p className="text-gray-400 mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed">
                Online ordering is launching soon.
                Stay connected for the ultimate momo experience.
              </p>

              <button
                onClick={() => setShowComingSoon(false)}
                className="mt-6 sm:mt-8 bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(255,0,0,0.4)]"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

      {/* ================= LOCATION MODAL ================= */}
      {showLocation && (

        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4">

          <div className="bg-[#111] border border-red-600/30 rounded-[35px] max-w-lg w-full mx-auto overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.25)] animate-popup">

            {/* Image */}
            <div className="relative h-[250px] sm:h-[300px]">

              <Image
                src="/location-image.png"
                alt="MomoMatrix Location"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 md:p-8">

              <div className="text-center">

                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  FIND
                  <span className="text-red-600 block">
                    MOMOMATRIX
                  </span>
                </h2>

                <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                  Visit us at our premium momo destination.
                </p>

              </div>

              {/* Address */}
              <div className="mt-6 sm:mt-8 bg-white/5 border border-red-500/20 rounded-2xl p-4 sm:p-5 backdrop-blur-md">

                <div className="flex items-start gap-4">

                  <span className="text-xl sm:text-2xl">
                    📍
                  </span>

                  <div>

                    <h3 className="text-white font-bold text-base sm:text-lg">
                      MomoMatrix
                    </h3>

                    <p className="text-gray-400 mt-2 text-sm sm:text-base">
                      BRANCH NO :-01<br />
                      Sector 16 near DLF mall,<br />
                  
                      Noida, Uttar Pradesh <br />
                      MomoMatrix Outlet
                    </p>

                  </div>

                </div>

              </div>

              {/* Buttons */}
              <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4">

                <a
                  href="https://www.google.com/maps?q=28.585287818003746,77.31160072368175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2.5 sm:py-3 rounded-2xl text-sm sm:text-base font-bold text-center transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(255,0,0,0.35)]"
                >
                  Open Map
                </a>

                <button
                  onClick={() => setShowLocation(false)}
                  className="flex-1 border border-red-600 hover:bg-red-600 text-white py-2.5 sm:py-3 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300"
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* ================= CUSTOM CSS ================= */}
      <style jsx global>{`

        .nav-link {
          position: relative;
          color: white;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: #ef4444;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: #ef4444;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-link {
          display: block;
          color: white;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .mobile-link:hover {
          color: #ef4444;
        }

        @keyframes popup {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-popup {
          animation: popup 0.35s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }

      `}</style>
    </>
  );
}