'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const reviews = [
  {
    name: "Rahul Sharma",
    email: "rahulsharma1234@gmail.com",
    review:
      "Best momos I ever had. The spicy chutney and buttery flavor are amazing!",
    image: "/logo1.png",
  },
  {
    name: "Aman Verma",
    email: "amanverma5678@gmail.com",
    review:
      "Very fresh and hygienic. Paneer butter momo is my favorite.",
    image: "/logo1.png",
  },
  {
    name: "Sana Khan",
    email: "sanakhan4321@gmail.com",
    review:
      "The quality and futuristic vibe of MomoMatrix is next level.",
    image: "/logo1.png",
  },
];
export default function Home() {

  return (
    <div className="bg-black text-white overflow-hidden">

      <Header />

      <main>

        {/* ================= HERO FULL IMAGE SECTION ================= */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

          <div className="absolute inset-0">

            <Image
              src="/2ndbigmomo.png"
              alt="Momo Hero"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black"></div>

          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight">

              FUTURE OF

              <span className="block text-red-600 glow-red">
                MOMOS IS HERE
              </span>

            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
              Premium steam cooked momos with futuristic flavors,
              spicy sauces and unforgettable experience.
            </p>

            <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">

              <Link
                href="/menu"
                className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl text-sm sm:text-base md:text-lg font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(255,0,0,0.45)]"
              >
                Explore Menu
              </Link>

              <Link
                href="/offer"
                className="border border-red-600 hover:bg-red-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl text-sm sm:text-base md:text-lg font-bold transition-all duration-300 hover:scale-105"
              >
                Hot Offers
              </Link>

            </div>

          </div>

        </section>

        {/* ================= BIG MOMO SECTION ================= */}
        <section className="relative py-28 px-6 lg:px-10 overflow-hidden">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

            <div className="relative flex justify-center items-center">

              <div className="absolute w-[450px] h-[450px] bg-red-600/20 rounded-full blur-[100px]"></div>

              <Image
                src="/big-momo.png"
                alt="Big Momo"
                width={750}
                height={750}
                priority
                quality={100}
                className="relative z-10 object-contain floating"
              />

            </div>

            <div>

              <div className="inline-flex items-center gap-3 bg-red-600/10 border border-red-600/20 px-5 py-3 rounded-full">

                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

                <span className="uppercase tracking-[4px] text-red-500 text-sm font-bold">
                  Steam Powered Taste
                </span>

              </div>

              <h2 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">

                MADE WITH

                <span className="block text-red-600">
                  PASSION & SPICE
                </span>

              </h2>

              <p className="mt-6 sm:mt-8 text-gray-300 text-base sm:text-lg leading-relaxed">
                Experience handcrafted steam momos loaded with premium fillings,
                buttery textures and signature spicy sauces designed for true momo lovers.
              </p>

              <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-5">

                <div className="feature-box">
                  🔥
                  <p>Fresh Daily</p>
                </div>

                <div className="feature-box">
                  ♨️
                  <p>Steam Cooked</p>
                </div>

                <div className="feature-box">
                  🌶️
                  <p>Spicy Sauces</p>
                </div>

                <div className="feature-box">
                  🚀
                  <p>Fast Service</p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= SPECIAL MOMOS ================= */}
        <section className="py-24 px-6 lg:px-10 relative">

          <div className="max-w-7xl mx-auto relative z-10">

            <div className="text-center mb-12 sm:mb-16 md:mb-20">

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">

                OUR SPECIAL

                <span className="text-red-600">
                  {' '}MOMOS
                </span>

              </h2>

              <p className="mt-4 sm:mt-5 text-gray-400 text-base sm:text-lg">
                Crafted with premium fillings and futuristic taste
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

              {/* Veg */}
              <div className="momo-card">

                <Image
                  src="/veg-momo.png"
                  alt="Veg Momo"
                  width={400}
                  height={400}
                  quality={100}
                  className="w-full h-[240px] object-cover rounded-3xl"
                />

                <div className="mt-4 sm:mt-6">

                  <h3 className="text-xl sm:text-2xl font-bold">
                    Veg Momo
                  </h3>

                  <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
                    Fresh vegetable stuffing with authentic steam flavor.
                  </p>

                  <div className="mt-4 sm:mt-5 flex justify-between items-center">

                    <span className="text-red-500 text-2xl sm:text-3xl font-black">
                      ₹55
                    </span>

                    <button className="order-btn">
                      Add
                    </button>

                  </div>

                </div>

              </div>

              {/* Paneer */}
              <div className="momo-card">

                <Image
                  src="/paneer-momo.png"
                  alt="Paneer Momo"
                  width={400}
                  height={400}
                  quality={100}
                  className="w-full h-[240px] object-cover rounded-3xl"
                />

                <div className="mt-4 sm:mt-6">

                  <h3 className="text-xl sm:text-2xl font-bold">
                    Paneer Momo
                  </h3>

                  <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
                    Soft paneer filling with rich spices.
                  </p>

                  <div className="mt-4 sm:mt-5 flex justify-between items-center">

                    <span className="text-red-500 text-2xl sm:text-3xl font-black">
                      ₹80
                    </span>

                    <button className="order-btn">
                      Add
                    </button>

                  </div>

                </div>

              </div>

              {/* Veg Butter */}
              <div className="momo-card featured-card">

                <div className="best-tag">
                  BEST SELLER
                </div>

                <Image
                  src="/veg-butter-momo.png"
                  alt="Veg Butter Momo"
                  width={400}
                  height={400}
                  quality={100}
                  className="w-full h-[240px] object-cover rounded-3xl"
                />

                <div className="mt-4 sm:mt-6">

                  <h3 className="text-xl sm:text-2xl font-bold">
                    Veg Butter
                  </h3>

                  <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
                    Butter coated steam momos with spicy sauce.
                  </p>

                  <div className="mt-4 sm:mt-5 flex justify-between items-center">

                    <span className="text-red-500 text-2xl sm:text-3xl font-black">
                      ₹60
                    </span>

                    <button className="order-btn">
                      Add
                    </button>

                  </div>

                </div>

              </div>

              {/* Paneer Butter */}
              <div className="momo-card">

                <Image
                  src="/paneer-butter-momo.png"
                  alt="Paneer Butter"
                  width={400}
                  height={400}
                  quality={100}
                  className="w-full h-[240px] object-cover rounded-3xl"
                />

                <div className="mt-4 sm:mt-6">

                  <h3 className="text-xl sm:text-2xl font-bold">
                    Paneer Butter
                  </h3>

                  <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
                    Creamy buttery paneer flavor with smoky finish.
                  </p>

                  <div className="mt-4 sm:mt-5 flex justify-between items-center">

                    <span className="text-red-500 text-2xl sm:text-3xl font-black">
                      ₹90
                    </span>

                    <button className="order-btn">
                      Add
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

       {/* ================= REVIEWS SECTION ================= */}
<section className="py-24 px-6 overflow-hidden">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-black">
        CUSTOMER
        <span className="text-red-600"> REVIEWS</span>
      </h2>

      <p className="mt-5 text-gray-400 text-lg">
        What momo lovers say about MomoMatrix
      </p>

    </div>

    {/* Auto Sliding Reviews */}
    <div className="review-slider">

      <div className="review-track">

        {[...reviews, ...reviews].map((item, index) => (

          <div key={index} className="review-card">

            <div className="flex items-center gap-4 mb-5">

              <Image
                src={item.image}
                alt={item.name}
                width={70}
                height={70}
                quality={100}
                className="rounded-full object-cover border-2 border-red-600"
              />

              <div>

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                {/* Updated Email Display */}
                <p className="text-red-500 text-sm">
                  {item.email.replace(
                    /(.{0})(.*)(.{4}@gmail\.com)/,
                    "****$3"
                  )}
                </p>

              </div>

            </div>

            <p className="text-gray-300 leading-relaxed">
              "{item.review}"
            </p>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>
        {/* ================= REVIEW FORM ================= */}
        <section className="py-24 px-6 lg:px-10">

          <div className="max-w-4xl mx-auto bg-white/[0.03] border border-red-600/20 rounded-[35px] p-8 md:p-14 backdrop-blur-xl">

            <div className="text-center mb-12">

              <h2 className="text-4xl md:text-5xl font-black">
                GIVE YOUR
                <span className="text-red-600"> REVIEW</span>
              </h2>

              <p className="mt-4 text-gray-400">
                Share your experience with MomoMatrix
              </p>

            </div>

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="input-box"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input-box"
                />

              </div>

              <input
                type="file"
                className="input-box file:bg-red-600 file:border-0 file:px-4 file:py-2 file:rounded-lg file:text-white"
              />

              <textarea
                rows={5}
                placeholder="Write your review..."
                className="input-box resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Submit Review
              </button>

            </form>

          </div>

        </section>

      </main>

      <Footer />

      {/* ================= CSS ================= */}
      <style jsx>{`

        .glow-red {
          text-shadow: 0 0 25px rgba(255,0,0,0.65);
        }

        .floating {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .feature-box {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,0,0,0.15);
          border-radius: 20px;
          padding: 16px;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          transition: all 0.3s ease;
          backdrop-filter: blur(12px);
        }

        .feature-box:hover {
          transform: translateY(-5px);
          border-color: rgba(255,0,0,0.7);
          box-shadow: 0 0 30px rgba(255,0,0,0.2);
        }

        .feature-box p {
          font-size: 14px;
          margin-top: 10px;
          color: #d1d5db;
        }

        .momo-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,0,0,0.15);
          border-radius: 28px;
          padding: 18px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(12px);
        }

        .momo-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255,0,0,0.7);
          box-shadow: 0 0 40px rgba(255,0,0,0.15);
        }

        .featured-card {
          border-color: rgba(255,0,0,0.5);
          box-shadow: 0 0 40px rgba(255,0,0,0.15);
        }

        .best-tag {
          position: absolute;
          top: 18px;
          right: 18px;
          background: red;
          color: white;
          font-size: 12px;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: 999px;
          z-index: 20;
        }

        .order-btn {
          background: #dc2626;
          padding: 10px 20px;
          border-radius: 14px;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .order-btn:hover {
          background: #b91c1c;
          transform: scale(1.05);
        }

        .review-slider {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .review-track {
          display: flex;
          gap: 30px;
          width: max-content;
          animation: scroll 28s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .review-card {
          min-width: 350px;
          max-width: 350px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,0,0,0.15);
          border-radius: 30px;
          padding: 30px;
          backdrop-filter: blur(10px);
          transition: 0.4s ease;
        }

        .review-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255,0,0,0.7);
          box-shadow: 0 0 35px rgba(255,0,0,0.18);
        }

        .input-box {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,0,0,0.2);
          padding: 18px 20px;
          border-radius: 18px;
          outline: none;
          color: white;
          transition: 0.3s ease;
        }

        .input-box:focus {
          border-color: #dc2626;
          box-shadow: 0 0 20px rgba(255,0,0,0.2);
        }

      `}</style>

    </div>
  );
}
// you can update this code and make reviews and form more beautiful and professional and in review form you can add image update button and submit button attractive and in reviews card you can add rating stars and better design and give me updated code