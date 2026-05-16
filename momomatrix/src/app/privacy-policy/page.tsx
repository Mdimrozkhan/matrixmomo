'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
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
              PRIVACY
              <span className="block text-red-600 glow-red">POLICY</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg text-center max-w-2xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-600/20 rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 backdrop-blur-lg space-y-6 sm:space-y-8">
              
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">1. Information We Collect</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  At MomoMatrix, we collect information to provide better services to our customers. This includes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 ml-4 text-sm sm:text-base">
                  <li>Personal information (name, email, phone number)</li>
                  <li>Order details and preferences</li>
                  <li>Payment information (processed securely)</li>
                  <li>Location data for delivery purposes</li>
                  <li>Usage data and browsing behavior</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">2. How We Use Your Information</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 ml-4 text-sm sm:text-base">
                  <li>Processing and delivering your orders</li>
                  <li>Improving our products and services</li>
                  <li>Communicating with you about orders and promotions</li>
                  <li>Personalizing your experience</li>
                  <li>Ensuring security and fraud prevention</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">3. Data Security</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  We implement industry-standard security measures to protect your information. This includes encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">4. Information Sharing</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 ml-4 text-sm sm:text-base">
                  <li>With service providers who assist in operating our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your consent for specific purposes</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">5. Cookies and Tracking</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze usage patterns, and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">6. Your Rights</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 ml-4 text-sm sm:text-base">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with regulatory authorities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">7. Children's Privacy</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Our services are not intended for children under 13. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete it.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">8. Changes to This Policy</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-red-500">9. Contact Us</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  Email: privacy@momomatrix.com<br />
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
