const Footer = () => {
  return (
    <footer className="border-t border-slate-800 mt-8 dark:border-slate-200 dark:bg-white/90">
      <div className="container mx-auto px-4 py-4 text-xs text-slate-400 flex flex-col md:flex-row gap-2 md:items-center md:justify-between dark:text-slate-500">
        <span>
          © {new Date().getFullYear()} • Aymen Brahimi — ETNA Architecture & Réseau
        </span>
        <span className="text-slate-500 dark:text-slate-500">
          Portfolio PathCraft · React · TypeScript · Tailwind
        </span>
      </div>
    </footer>
  );
};

export default Footer;
