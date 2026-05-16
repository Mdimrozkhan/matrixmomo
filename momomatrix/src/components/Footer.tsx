'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-red-600/20 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] bg-red-600/10 blur-[100px] sm:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] bg-red-600/10 blur-[100px] sm:blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">

          {/* ================= BRAND ================= */}
          <div className="md:col-span-2 lg:col-span-1">

            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/logo1.png"
                alt="MomoMatrix Logo"
                width={240}
                height={100}
                priority
                className="object-contain w-auto h-auto w-[180px] sm:w-[200px] md:w-[240px] h-[75px] sm:h-[83px] md:h-[100px] hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Description */}
            <p className="text-gray-400 mt-4 sm:mt-6 leading-relaxed max-w-lg text-sm sm:text-base md:text-lg">
              Experience futuristic steam momos crafted with premium
              ingredients, spicy sauces and unforgettable taste.
              Fresh • Hygienic • Delicious
            </p>

            {/* Tagline */}
            <div className="mt-5 sm:mt-7 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-red-500/20 bg-red-600/5 backdrop-blur-md shadow-[0_0_30px_rgba(255,0,0,0.08)]">

              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full animate-pulse"></span>

              <p className="text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[3px] text-red-400 font-semibold">
                Powered By Steam
              </p>

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-white text-xl sm:text-2xl font-bold mb-5 sm:mb-7">
              Quick Links
            </h3>

            <ul className="space-y-3 sm:space-y-5">

              <li>
                <Link
                  href="/"
                  className="footer-link"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/menu"
                  className="footer-link"
                >
                  Menu
                </Link>
              </li>

              <li>
                <Link
                  href="/offer"
                  className="footer-link"
                >
                  Offers
                </Link>
              </li>

              <li>
                <Link
                  href="/reel-win"
                  className="footer-link"
                >
                  Reel & Win
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="footer-link"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="footer-link"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-white text-xl sm:text-2xl font-bold mb-5 sm:mb-7">
              Connect
            </h3>

            {/* Username */}
            <p className="text-gray-400">
              Follow us on social media
            </p>

            <p className="text-red-500 font-semibold mt-2 text-lg">
              @momomatrix
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 mt-7">

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                className="social-icon"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                className="social-icon"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.563 9.875v-6.988H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.887h-2.33v6.988A10 10 0 0022 12z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918953418768"
                target="_blank"
                className="social-icon"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.82 11.82 0 0012.04 0C5.52 0 .24 5.28.24 11.76c0 2.04.54 4.08 1.56 5.88L0 24l6.6-1.68a11.9 11.9 0 005.4 1.32h.04c6.48 0 11.76-5.28 11.76-11.76 0-3.12-1.2-6.12-3.28-8.4z"/>
                </svg>
              </a>

            </div>

            {/* Contact Details */}
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-red-500 text-base sm:text-lg">📍</span>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Sector 58 Digitide,<br />
                  Noida, Uttar Pradesh
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-red-500 text-base sm:text-lg">📞</span>

                <p className="text-gray-400 text-xs sm:text-sm">
                  +91 8953418768
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-red-500 text-base sm:text-lg">✉️</span>

                <p className="text-gray-400 text-xs sm:text-sm">
                  contact@momomatrix.com
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800/60 mt-10 sm:mt-12 md:mt-14 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-5">

          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            &copy; 2026 MomoMatrix. All rights reserved.
          </p>

          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm flex-wrap justify-center">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-red-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-gray-500 hover:text-red-500 transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <p className="text-red-500 text-xs sm:text-sm font-semibold tracking-[2px] sm:tracking-[3px] uppercase">
            Future Of Momos Is Here
          </p>

        </div>
      </div>

      {/* Extra CSS */}
      <style jsx global>{`
        .footer-link {
          color: #9ca3af;
          transition: all 0.3s ease;
          position: relative;
          font-size: 14px;
        }

        @media (min-width: 640px) {
          .footer-link {
            font-size: 16px;
          }
        }

        .footer-link:hover {
          color: #ef4444;
          padding-left: 8px;
        }

        .social-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          transition: all 0.35s ease;
          backdrop-filter: blur(12px);
        }

        @media (min-width: 640px) {
          .social-icon {
            width: 52px;
            height: 52px;
            border-radius: 18px;
          }
        }

        .social-icon:hover {
          background: #dc2626;
          color: white;
          transform: translateY(-6px) scale(1.05);
          box-shadow: 0 0 30px rgba(255,0,0,0.5);
        }
      `}</style>
    </footer>
  );
}