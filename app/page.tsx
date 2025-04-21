import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white font-sans">
      <main className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Section: Text Content */}
        <div className="lg:w-1/2 bg-gradient-to-b from-teal-50 to-white flex flex-col justify-center p-8 lg:p-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
            Master Your Taxes with Ease
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-md leading-relaxed">
            Transform your financial management with our cutting-edge <span className="font-semibold text-teal-600">Financial-Tax System</span>. Automate tax filings, track expenses, and gain insights with powerful analytics—all in a secure, user-friendly platform.
          </p>
          <div className="flex gap-4">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition">
              Try It Now
            </button>
            <button className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Section: Visual */}
        <div className="lg:w-1/2 relative flex items-center justify-center p-8 lg:p-16 bg-teal-700">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#ffffff_0,_transparent_70%)]" />
          </div>
          <div className="relative z-10">
            <Image
              src="/images.png"
              alt="Financial-Tax System Dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <p className="text-sm">© 2025 Financial-Tax System. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/support" className="text-sm hover:text-teal-400 transition">Support</a>
            <a href="/pricing" className="text-sm hover:text-teal-400 transition">Pricing</a>
            <a href="/about" className="text-sm hover:text-teal-400 transition">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}