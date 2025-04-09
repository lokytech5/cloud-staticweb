import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="hero min-h-screen">
        <div className="hero-content bg-base-100 min-h-screen w-full relative overflow-hidden">
          {/* Decorative background ring */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="w-[40rem] h-[40rem] bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl absolute -top-40 -left-40" />
          </div>

          <div className="hero-content text-left max-w-4xl px-4 sm:px-8 z-10">
            <div>
              <p className="uppercase tracking-wider text-sm text-secondary font-medium mb-4">
                Your All-in-One Finance Toolkit
              </p>
              <h1 className="text-5xl font-bold text-primary leading-tight">
                Financial Trading System
              </h1>
              <p className="py-6 text-base-content text-lg max-w-2xl leading-relaxed">
                Take full control of your <span className="font-semibold text-secondary">business or personal finances</span> with <span className="font-semibold text-secondary">real-time analytics</span>, automated budgeting, and secure data—all in one powerful platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-outline">Request a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
