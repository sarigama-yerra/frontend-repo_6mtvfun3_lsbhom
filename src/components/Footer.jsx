function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white font-medium">SOLYRA SYSTEMS LTD</p>
            <p className="text-sm text-slate-400">No physical products — all items are digital.</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
        <div className="mt-6 text-sm text-slate-500">© {year} SOLYRA SYSTEMS LTD. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
