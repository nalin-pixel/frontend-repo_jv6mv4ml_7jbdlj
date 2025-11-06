import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    function update() {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

const TimeBox = ({ value, label }) => (
  <div className="flex min-w-[70px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
    <span className="text-2xl font-bold tabular-nums">{String(value).padStart(2, "0")}</span>
    <span className="text-xs text-white/60">{label}</span>
  </div>
);

export default function CTA() {
  const timeLeft = useCountdown("2025-11-15T09:00:00");

  return (
    <section id="register" className="relative w-full bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 py-16 text-white">
      <div className="absolute inset-0 mix-blend-overlay [background:radial-gradient(600px_200px_at_20%_0%,rgba(255,255,255,0.25),transparent),radial-gradient(600px_200px_at_80%_0%,rgba(255,255,255,0.15),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs">
                <Calendar className="h-4 w-4" />
                <span>Contest Date: 15th November</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold md:text-3xl">Register for Algo Scholar Contest</h3>
              <p className="mt-1 max-w-xl text-white/85">Secure your slot in the 90-minute online challenge and compete with the best. Limited seats.</p>
            </div>
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-emerald-800 shadow-lg transition hover:translate-y-[-1px] hover:shadow-white/40"
            >
              Proceed to Registration
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-center md:justify-between">
            <div className="flex gap-2">
              <TimeBox value={timeLeft.days} label="Days" />
              <TimeBox value={timeLeft.hours} label="Hours" />
              <TimeBox value={timeLeft.minutes} label="Minutes" />
              <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>
            <p className="text-sm text-white/75">Seats fill fast — don’t miss out.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
