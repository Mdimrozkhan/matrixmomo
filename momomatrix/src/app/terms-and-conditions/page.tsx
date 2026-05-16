'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsAndConditions() {
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
              TERMS AND
              <span className="block text-red-600 glow-red">CONDITIONS</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg text-center max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-600/20 rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 backdrop-blur-lg space-y-6 sm:space-y-8">
              
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">1. Acceptance of Terms</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  By accessing or using MomoMatrix services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">2. Services Description</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  MomoMatrix provides online food ordering and delivery services for momos and related products. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">3. User Accounts</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  To use certain features, you may be required to create an account. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 ml-4 text-sm sm:text-base">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>Providing accurate and complete information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">4. Orders and Payments</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  All orders are subject to availability and acceptance. We reserve the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 ml-4 text-sm sm:text-base">
                  <li>Refuse or cancel any order at our discretion</li>
                  <li>Modify prices without prior notice</li>
                  <li>Request additional verification for orders</li>
                  <li>Limit order quantities for promotional items</li>
                </ul>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4">
                  Payment must be made at the time of ordering. We accept various payment methods including credit/debit cards, UPI, and cash on delivery where available.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">5. Delivery Policy</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  Delivery times are estimates and not guaranteed. Factors affecting delivery include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 ml-4 text-sm sm:text-base">
                  <li>Weather conditions</li>
                  <li>Traffic and road conditions</li>
                  <li>Order volume</li>
                  <li>Product availability</li>
                </ul>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4">
                  We are not liable for delays or failures to deliver due to circumstances beyond our control.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">6. Cancellations and Refunds</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  Cancellation policy:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 ml-4 text-sm sm:text-base">
                  <li>Orders can be cancelled within 5 minutes of placement</li>
                  <li>Once preparation begins, cancellations may not be accepted</li>
                  <li>Refunds will be processed within 5-7 business days</li>
                  <li>Refund method will be the same as original payment</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">7. Product Information</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  We strive to provide accurate product information, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 ml-4 text-sm sm:text-base">
                  <li>Ingredients and allergen information</li>
                  <li>Nutritional data</li>
                  <li>Pricing and availability</li>
                </ul>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4">
                  However, we do not guarantee that all information is complete, accurate, or current. Please contact us for specific dietary requirements.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">8. User Conduct</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 ml-4 text-sm sm:text-base">
                  <li>Use the service for any illegal purpose</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Attempt to gain unauthorized access</li>
                  <li>Harass or abuse other users or staff</li>
                  <li>Provide false or misleading information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">9. Intellectual Property</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  All content, trademarks, and intellectual property on this website belong to MomoMatrix. You may not use, reproduce, or distribute any content without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">10. Limitation of Liability</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  MomoMatrix shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific order in question.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">11. Indemnification</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  You agree to indemnify and hold MomoMatrix harmless from any claims, damages, or expenses arising from your use of the service or violation of these terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">12. Governing Law</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be resolved in the courts of [Your City], India.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">13. Changes to Terms</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">14. Contact Information</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  For questions about these terms, please contact:
                </p>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  Email: legal@momomatrix.com<br />
                  Phone: +91 98765 43210<br />
                  Address: 123 Tech Street, Future City, FC 12345
                </p>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-red-600/20">
                <p className="text-gray-400 text-xs sm:text-sm">
                  Last Updated: May 2026
                </p>
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
