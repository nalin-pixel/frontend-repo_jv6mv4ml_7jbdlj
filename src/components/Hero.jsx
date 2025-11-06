import { Rocket, Trophy, Clock } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-indigo-900 via-slate-900 to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1zZ4xDkNZIxh3Q5G/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm backdrop-blur"
        >
          <Rocket className="h-4 w-4 text-amber-400" />
          <span className="font-medium tracking-wide">Algo Scholar Contest • 90 minutes • Online</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
        >
          Crack Aptitude & Logic Puzzles. Rank High. Win Big.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-3xl text-base text-white/80 sm:text-lg"
        >
          A high-intensity challenge designed for the sharpest minds. Compete with thousands,
          solve clever problems, and unlock prizes worth up to 10 Lakh INR.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#register"
            className="group inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-black shadow-[0_10px_30px_-10px_rgba(251,191,36,0.7)] transition hover:translate-y-[-1px] hover:shadow-amber-400/40"
          >
            Register Now
            <Trophy className="h-5 w-5 transition-transform group-hover:scale-110" />
          </a>
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 backdrop-blur">
            <Clock className="h-5 w-5 text-emerald-300" />
            <span>Only 90 minutes. Infinite bragging rights.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
