import { motion } from "framer-motion";

const items = [
  {
    title: "Grand Prize: Singapore Tech Tour",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-4 md:row-span-2",
    badge: "Experience Trip",
    glow: "from-emerald-400/30 to-cyan-400/20",
  },
  {
    title: "MacBook Air for Top 5",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1",
    badge: "Hardware",
    glow: "from-sky-400/30 to-indigo-400/20",
  },
  {
    title: "iPad for Top 10",
    img: "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1",
    badge: "Tablet",
    glow: "from-pink-400/30 to-rose-400/20",
  },
  {
    title: "Premium Hoodies for Top 50",
    img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1",
    badge: "Merch",
    glow: "from-violet-400/30 to-fuchsia-400/20",
  },
  {
    title: "AlgoU Tees for Top 250",
    img: "https://images.unsplash.com/photo-1520975922325-24baf2b6b9ea?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1",
    badge: "Merch",
    glow: "from-amber-400/30 to-orange-400/20",
  },
  {
    title: "Scholarships up to 10L",
    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1",
    badge: "Scholarships",
    glow: "from-lime-400/30 to-emerald-400/20",
  },
];

const BentoCard = ({ item, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: i * 0.03 }}
    className={`group relative overflow-hidden rounded-2xl ${item.span} border border-white/10 bg-white/5`}
  >
    <div className="absolute inset-0">
      <img
        src={item.img}
        alt={item.title}
        className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${item.glow} opacity-60 mix-blend-screen`} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    </div>
    <div className="relative z-10 flex h-full flex-col justify-between p-5">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85 backdrop-blur">
        {item.badge}
      </div>
      <h3 className="text-lg font-bold leading-snug md:text-xl">{item.title}</h3>
    </div>
  </motion.div>
);

export default function Prizes() {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col gap-2">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Win Big. Feel the FOMO.</h2>
          <p className="text-white/70">Visual peek at what top rankers take home.</p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 md:auto-rows-[220px] md:grid-cols-6">
          {items.map((it, idx) => (
            <BentoCard key={it.title} item={it} i={idx} />
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-white/60">
          Prize pool worth 10,00,000+ INR. Limited winners. Make it count.
        </div>
      </div>
    </section>
  );
}
