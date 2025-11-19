function HowItWorks() {
  const steps = [
    { title: 'Users access tools online', desc: 'Log in from any modern browser to use your tools immediately.' },
    { title: 'Instant delivery of digital products', desc: 'Access is granted right away — no shipping required.' },
    { title: 'No physical goods', desc: 'All products are digital. Nothing is shipped.' },
    { title: 'Monthly or one-time payments', desc: 'Choose a subscription or a one-time purchase to suit your needs.' },
  ];

  return (
    <section id="how-it-works" className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(8,145,178,0.08),transparent_55%)]"></div>
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How It Works</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200">{i + 1}</div>
              <h3 className="text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-slate-300/90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
