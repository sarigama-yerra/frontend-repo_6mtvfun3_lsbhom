function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contact</h2>
              <p className="mt-3 text-slate-300/90">UK-based digital business</p>
              <p className="mt-2 text-slate-300/90">Email: <a href="mailto:support@solyrasystems.com" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">support@solyrasystems.com</a></p>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-transparent p-6">
              <h3 className="text-lg font-medium text-white">Support Hours</h3>
              <p className="mt-2 text-slate-300/90">Mon–Fri, 9:00–17:00 (UK time)</p>
              <p className="mt-4 text-slate-400 text-sm">We aim to reply within 1–2 business days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
