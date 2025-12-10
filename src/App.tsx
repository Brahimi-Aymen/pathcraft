import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      {/* ⚠️ Base = clair, dark: = sombre */}
      <div className="min-h-screen flex flex-col bg-[#F7F7F8] text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        <Navbar />

        <main className="flex-1 max-w-7xl mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
