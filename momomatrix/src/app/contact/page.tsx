'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Header />

      <main className="min-h-screen">

        {/* ================= HERO SECTION ================= */}
        <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden">

          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>

          <div className="absolute top-0 left-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>

          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-red-600/10 rounded-full blur-[100px]"></div>

          <div className="max-w-7xl mx-auto relative z-10 text-center">

            <div className="inline-flex items-center gap-3 bg-red-600/10 border border-red-600/20 px-5 py-3 rounded-full mb-8 backdrop-blur-xl">

              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

              <span className="uppercase tracking-[4px] text-red-500 text-sm font-bold">
                Contact MomoMatrix
              </span>

            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">

              GET IN

              <span className="block text-red-600 glow-red">
                TOUCH
              </span>

            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Whether you want to order delicious momos, book catering for weddings,
              birthday parties, corporate events or collaborate with MomoMatrix —
              we are always ready to serve you.
            </p>

          </div>

        </section>

        {/* ================= ABOUT + PARTY BOOKING ================= */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-10">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

            {/* About Us */}
            <div className="glass-card">

              <div className="text-5xl mb-5">🔥</div>

              <h2 className="text-3xl font-black mb-5 text-red-500">
                ABOUT US
              </h2>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                MomoMatrix is more than just a momo brand. We create futuristic
                flavors, premium quality steam momos and unforgettable food experiences.
                From spicy sauces to buttery textures, every bite is crafted with passion.
              </p>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base mt-5">
                We serve fresh and hygienic food with fast service and premium taste.
                Our mission is to make MomoMatrix the most loved momo destination in India.
              </p>

            </div>

            {/* Party Booking */}
            <div className="glass-card special-border">

              <div className="text-5xl mb-5">🎉</div>

              <h2 className="text-3xl font-black mb-5 text-red-500">
                PARTY & WEDDING BOOKINGS
              </h2>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Planning a birthday party, wedding, office event, college fest
                or private gathering?
              </p>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base mt-4">
                MomoMatrix provides live momo counters, bulk food orders,
                premium catering and customized menu services for every event.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">

                <div className="mini-box">
                  🎂 Birthday
                </div>

                <div className="mini-box">
                  💍 Wedding
                </div>

                <div className="mini-box">
                  🏢 Corporate
                </div>

                <div className="mini-box">
                  🎓 College Fest
                </div>

              </div>

              <p className="text-red-400 mt-6 font-semibold">
                Contact us now for bookings & special event packages.
              </p>

            </div>

          </div>

        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">

          <div className="max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">

              {/* Contact Info */}
              <div className="space-y-6 sm:space-y-8">

                <div className="glass-card">

                  <h2 className="text-2xl sm:text-3xl font-black mb-6 text-red-500">
                    CONTACT INFORMATION
                  </h2>

                  <div className="space-y-6">

                    <div className="contact-item">
                      <span className="contact-icon">📍</span>

                      <div>
                        <h3 className="font-bold text-lg">
                          Location
                        </h3>

                        <p className="text-gray-400">
                          SOON AS SOON
                        </p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <span className="contact-icon">📞</span>

                      <div>
                        <h3 className="font-bold text-lg">
                          Phone
                        </h3>

                        <p className="text-gray-400">
                          +91 8953418768
                        </p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <span className="contact-icon">✉️</span>

                      <div>
                        <h3 className="font-bold text-lg">
                          Email
                        </h3>

                        <p className="text-gray-400">
                          contact@momomatrix.in
                        </p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <span className="contact-icon">⏰</span>

                      <div>
                        <h3 className="font-bold text-lg">
                          Opening Hours
                        </h3>

                        <p className="text-gray-400">
                          Mon - Sun : 10 AM - 11 PM
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Social Links */}
                <div className="glass-card">

                  <h2 className="text-2xl sm:text-3xl font-black mb-6 text-red-500">
                    FOLLOW US
                  </h2>

                  <div className="flex gap-4">

                    <a href="#" className="social-box">
                      📸
                    </a>

                    <a href="#" className="social-box">
                      📘
                    </a>

                    <a href="#" className="social-box">
                      ▶️
                    </a>

                    <a href="#" className="social-box">
                      🐦
                    </a>

                  </div>

                </div>

              </div>

              {/* Contact Form */}
              <div className="glass-card">

                <h2 className="text-2xl sm:text-3xl font-black mb-6 text-red-500">
                  SEND MESSAGE
                </h2>

                <form className="space-y-5">

                  <div>
                    <label className="block text-sm mb-2 font-medium">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="input-box"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 font-medium">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input-box"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 font-medium">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="input-box"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 font-medium">
                      Event Type / Subject
                    </label>

                    <input
                      type="text"
                      placeholder="Birthday, Wedding, Catering..."
                      className="input-box"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 font-medium">
                      Message
                    </label>

                    <textarea
                      rows={6}
                      placeholder="Write your message..."
                      className="input-box resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,0,0,0.25)]"
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

      {/* ================= CUSTOM CSS ================= */}
      <style jsx>{`

        .glow-red {
          text-shadow: 0 0 25px rgba(255,0,0,0.7);
        }

        .glass-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,0,0,0.15);
          border-radius: 30px;
          padding: 24px;
          backdrop-filter: blur(14px);
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          border-color: rgba(255,0,0,0.45);
          box-shadow: 0 0 40px rgba(255,0,0,0.08);
        }

        .special-border {
          border-color: rgba(255,0,0,0.35);
        }

        .mini-box {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,0,0,0.2);
          padding: 14px;
          border-radius: 18px;
          text-align: center;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .mini-box:hover {
          transform: translateY(-5px);
          border-color: rgba(255,0,0,0.7);
        }

        .contact-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,0,0,0.1);
          border-radius: 16px;
          font-size: 22px;
          flex-shrink: 0;
        }

        .social-box {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: rgba(255,0,0,0.1);
          border: 1px solid rgba(255,0,0,0.2);
          font-size: 24px;
          transition: all 0.3s ease;
        }

        .social-box:hover {
          background: #dc2626;
          transform: scale(1.1);
        }

        .input-box {
          width: 100%;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,0,0,0.25);
          border-radius: 16px;
          padding: 14px 16px;
          color: white;
          transition: all 0.3s ease;
          outline: none;
        }

        .input-box:focus {
          border-color: rgba(255,0,0,0.7);
          box-shadow: 0 0 20px rgba(255,0,0,0.15);
        }

      `}</style>

    </div>
  );
}