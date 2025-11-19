function About() {
  return (
    <section className="relative bg-slate-950 py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About the Company</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 leading-relaxed text-slate-200/90">
            <p><span className="font-medium text-white">Company name:</span> SOLYRA SYSTEMS LTD</p>
            <p className="mt-2"><span className="font-medium text-white">UK registration number:</span> 16846441</p>
            <p className="mt-2"><span className="font-medium text-white">Registered in:</span> England and Wales</p>
            <p className="mt-2"><span className="font-medium text-white">Focus:</span> AI digital products, automation, software-like systems</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-transparent p-6">
            <h3 className="text-xl font-medium">Stripe-compliant details</h3>
            <ul className="mt-4 space-y-2 text-slate-300/90">
              <li>• Digital-only products — no physical items shipped</li>
              <li>• Clear pricing range: £20 to £200</li>
              <li>• Support channel available via email</li>
              <li>• Company registered in the UK</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
