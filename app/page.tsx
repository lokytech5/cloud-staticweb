import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center min-h-[80vh] bg-blue-50 text-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/logiss.jpg"
            alt="Logistics Network"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Modern Logistics Infrastructure That Solves the Problem of On Prem Architecture
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Transform your supply chain with <span className="font-semibold text-blue-600">AI Solutions</span>. Effortless tracking, intelligent routing, and powerful analytics in one platform.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                Send Item
              </button>
            </Link>
            <Link href="/demo">
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition">
                Track your Item
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Core Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg text-center">
              <div className="w-10 h-10 mx-auto mb-4">
                <svg className="w-full h-full text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Live Monitoring</h3>
              <p className="text-gray-600 text-sm">Track shipments in real-time with precise location updates.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg text-center">
              <div className="w-10 h-10 mx-auto mb-4">
                <svg className="w-full h-full text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Routing</h3>
              <p className="text-gray-600 text-sm">Reduce costs with AI-optimized delivery routes.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg text-center">
              <div className="w-10 h-10 mx-auto mb-4">
                <svg className="w-full h-full text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Analytics</h3>
              <p className="text-gray-600 text-sm">Drive decisions with comprehensive performance insights.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg text-center">
              <div className="w-10 h-10 mx-auto mb-4">
                <svg className="w-full h-full text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Operations</h3>
              <p className="text-gray-600 text-sm">Protect your data with enterprise-grade security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Trusted by Industry Leaders
          </h2>
          <blockquote className="text-lg text-gray-600 italic">
            &quot;streamlined our global operations, cutting delivery times by 30%. Their platform is a game-changer.&quot;
          </blockquote>
          <p className="mt-4 text-gray-800 font-semibold">Jane Doe, CEO of GlobalTrade Inc.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4"></h3>
            <p className="text-gray-300 text-sm">
              Empowering businesses with smarter logistics solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition">About</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-blue-400 transition">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-blue-400 transition">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@nexusfreight.com" className="text-gray-300 hover:text-blue-400 transition">info@example.com</a></li>
              <li><a href="tel:+1987654321" className="text-gray-300 hover:text-blue-400 transition">+1 (987) 654-321</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © 2025. All rights reserved.
        </div>
      </footer>
    </div>
  );
}