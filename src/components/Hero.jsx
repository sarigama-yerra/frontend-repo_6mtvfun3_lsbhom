import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient & vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)]"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20">
        {/* Top brand line */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,.6)]"></span>
          <span className="text-sm tracking-wide text-cyan-200/90">SOLYRA SYSTEMS LTD • solyrasystems.com</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-white max-w-3xl">
          AI-Powered Digital Tools and Automation Systems
        </h1>
        <p className="mt-5 max-w-2xl text-lg sm:text-xl text-slate-200/90">
          We create smart digital products, software-like tools, and business automation workflows designed to help users save time and make better decisions.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a href="#contact" className="group inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-900 transition hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/30">
            Get Started
            <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#offerings" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
            Explore what we offer
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
