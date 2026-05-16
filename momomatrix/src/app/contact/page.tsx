'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
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
              GET IN
              <span className="block text-red-600 glow-red">TOUCH</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg text-center max-w-2xl mx-auto">
              Have questions or feedback? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              
              {/* Contact Info */}
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-600/20 rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-lg">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-red-500">Contact Information</h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl sm:text-2xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg">Location</h3>
                        <p className="text-gray-400 text-sm sm:text-base">123 Tech Street, Future City, FC 12345</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl sm:text-2xl">📞</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg">Phone</h3>
                        <p className="text-gray-400 text-sm sm:text-base">+91 98765 43210</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl sm:text-2xl">✉️</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg">Email</h3>
                        <p className="text-gray-400 text-sm sm:text-base">contact@momomatrix.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl sm:text-2xl">⏰</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg">Hours</h3>
                        <p className="text-gray-400 text-sm sm:text-base">Mon - Sun: 10:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-600/20 rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-lg">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-red-500">Follow Us</h2>
                  <div className="flex gap-3 sm:gap-4">
                    <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110">
                      <span className="text-lg sm:text-xl">📸</span>
                    </a>
                    <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110">
                      <span className="text-lg sm:text-xl">📘</span>
                    </a>
                    <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110">
                      <span className="text-lg sm:text-xl">🐦</span>
                    </a>
                    <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110">
                      <span className="text-lg sm:text-xl">📺</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-600/20 rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-lg">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-red-500">Send Message</h2>
                
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full bg-black/50 border border-red-600/30 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-red-500 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-black/50 border border-red-600/30 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-red-500 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full bg-black/50 border border-red-600/30 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-red-500 transition-all duration-300"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full bg-black/50 border border-red-600/30 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-red-500 transition-all duration-300 resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30 text-sm sm:text-base"
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

      <style jsx>{`
        .glow-red {
          text-shadow: 0 0 30px rgba(255,0,0,0.7);
        }
      `}</style>
    </div>
  );
}
