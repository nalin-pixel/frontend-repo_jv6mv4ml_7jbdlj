import { Rocket, Trophy, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Aurora / Gradient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-32 bg-[radial-gradient(60%_40%_at_20%_10%,rgba(99,102,241,0.45),transparent),radial-gradient(50%_40%_at_80%_0%,rgba(251,191,36,0.35),transparent),radial-gradient(40%_30%_at_50%_60%,rgba(16,185,129,0.25),transparent)] blur-3xl" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_40%,#000_60%,transparent_100%)]"
        />

        {/* Floating orbs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute left-10 top-24 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1.4, delay: 0.1 }}
          className="absolute right-0 top-40 h-56 w-56 rounded-full bg-amber-400/20 blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1.6, delay: 0.15 }}
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl"
        />

        {/* Twinkling stars */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-0.5 w-0.5 rounded-full bg-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2 + (i % 5) * 0.6, repeat: Infinity, delay: i * 0.05 }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
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

        {/* Accent row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex items-center gap-3 text-sm text-white/70"
        >
          <Sparkles className="h-4 w-4 text-indigo-300" />
          Trusted by 50,000+ learners • Scholarships up to 10L • Elite mentorship
        </motion.div>
      </div>
    </section>
  );
}
