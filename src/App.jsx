import Hero from './components/Hero';
import Offerings from './components/Offerings';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-cyan-400/30 selection:text-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-white font-semibold tracking-tight">SOLYRA SYSTEMS LTD</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#offerings" className="hover:text-white">What We Offer</a>
            <a href="#how-it-works" className="hover:text-white">How It Works</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15">Get Started</a>
        </div>
      </header>

      <main>
        <Hero />
        <Offerings />
        <HowItWorks />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
