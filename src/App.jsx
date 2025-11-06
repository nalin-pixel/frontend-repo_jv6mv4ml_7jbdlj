import Hero from "./components/Hero";
import Prizes from "./components/Prizes";
import Curriculum from "./components/Curriculum";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Prizes />
      <Curriculum />
      <CTA />
      <footer className="border-t border-white/10 bg-black/60 py-10 text-center text-white/60">
        © {new Date().getFullYear()} Algo Scholar Contest • AlgoUniversity School of CS & AI
      </footer>
    </div>
  );
}

export default App;
