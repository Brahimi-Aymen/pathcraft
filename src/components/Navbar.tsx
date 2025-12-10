import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO + TEXTE */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white font-bold">
            AB
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-slate-900 dark:text-white">
              Aymen Brahimi
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Admin systèmes & réseaux – ETNA
            </p>
          </div>
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-6">

          <Link
            to="/"
            className={`text-sm font-medium transition ${
              location.pathname === "/"
                ? "text-indigo-600 dark:text-indigo-400"
                : "text-slate-600 dark:text-slate-300 hover:text-indigo-500"
            }`}
          >
            Accueil
          </Link>

          <Link
            to="/a-propos"
            className={`text-sm font-medium transition ${
              location.pathname === "/a-propos"
                ? "text-indigo-600 dark:text-indigo-400"
                : "text-slate-600 dark:text-slate-300 hover:text-indigo-500"
            }`}
          >
            À propos
          </Link>

          <Link
            to="/portfolio"
            className={`text-sm font-medium transition ${
              location.pathname === "/portfolio"
                ? "text-indigo-600 dark:text-indigo-400"
                : "text-slate-600 dark:text-slate-300 hover:text-indigo-500"
            }`}
          >
            Portfolio
          </Link>

          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
