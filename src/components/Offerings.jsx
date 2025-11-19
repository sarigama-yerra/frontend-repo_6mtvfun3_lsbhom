function Offerings() {
  const items = [
    { title: 'Subscription-based access to AI tools', desc: 'Flexible plans that scale with your workflow.' },
    { title: 'Digital automation systems', desc: 'Automate routine processes and save hours every week.' },
    { title: 'Custom generators', desc: 'Bespoke content and data generators tailored to your needs.' },
    { title: 'Digital product bundles', desc: 'Curated collections for specific business outcomes.' },
  ];

  return (
    <section id="offerings" className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_55%)]"></div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What We Offer</h2>
            <p className="mt-2 text-slate-300/90">Pricing ranges from £20 to £200 depending on the toolkit and access level.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200/90">Stripe-ready • Digital-only</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition hover:border-cyan-400/30">
              <div className="mb-3 h-9 w-9 rounded-lg bg-cyan-400/15 text-cyan-300 grid place-items-center">
                <span className="text-lg">★</span>
              </div>
              <h3 className="text-xl font-medium">{it.title}</h3>
              <p className="mt-2 text-slate-300/90">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offerings;
