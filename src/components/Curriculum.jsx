import { motion } from "framer-motion";
import { Users, Globe, Code2, Brain, Sparkles } from "lucide-react";

const Feature = ({ icon: Icon, title, img, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, delay }}
    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
  >
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-white/10 p-2">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <div className="relative mt-4 h-40 overflow-hidden rounded-xl">
      <img src={img} alt={title} className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]" loading="lazy" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
    </div>
  </motion.div>
);

export default function Curriculum() {
  const features = [
    {
      icon: Code2,
      title: "Build Real Products",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Brain,
      title: "AI + Systems",
      img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Users,
      title: "Peer Pods & Hackathons",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Globe,
      title: "Global Mentors",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(251,191,36,0.12),transparent),radial-gradient(600px_200px_at_80%_0%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-indigo-300" />
          <h2 className="text-3xl font-extrabold sm:text-4xl">Beyond the Classroom</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Feature key={f.title} {...f} delay={i * 0.05} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1600&auto=format&fit=crop" alt="Demo App" className="h-56 w-full object-cover object-center" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop" alt="Dashboard Mockup" className="h-56 w-full object-cover object-center" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1600&auto=format&fit=crop" alt="Mobile Mockup" className="h-56 w-full object-cover object-center" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
