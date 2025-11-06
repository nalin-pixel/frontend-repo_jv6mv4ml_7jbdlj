import { Crown, Gift, Plane, Apple, Laptop, Tablet, Shirt } from "lucide-react";
import { motion } from "framer-motion";

const PrizeCard = ({ icon: Icon, title, subtitle, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 text-white shadow-lg backdrop-blur hover:from-white/20"
  >
    <div className={`absolute inset-0 opacity-20 blur-2xl ${accent}`} />
    <div className="relative z-10 flex items-center gap-4">
      <div className="rounded-xl bg-white/10 p-3">
        <Icon className="h-7 w-7" />
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-white/80">{subtitle}</p>
      </div>
    </div>
  </motion.div>
);

export default function Prizes() {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Lavish Prizes for Top Rankers</h2>
            <p className="mt-2 max-w-2xl text-white/70">Win experiences, gear, and scholarships worth up to 10 Lakh INR.</p>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur md:block">
            Total Prize Pool: 10,00,000+ INR
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <PrizeCard
            icon={Plane}
            title="1st Prize: International Tech Trip to Singapore"
            subtitle="Immersive tech city experience, labs, museums & innovation hubs"
            accent="bg-emerald-500"
          />
          <PrizeCard
            icon={Laptop}
            title="Top 5: Apple MacBook Air"
            subtitle="Powerful, sleek, and perfect for builders"
            accent="bg-sky-500"
          />
          <PrizeCard
            icon={Tablet}
            title="Top 10: Apple iPad"
            subtitle="Creativity meets productivity"
            accent="bg-pink-500"
          />
          <PrizeCard
            icon={Shirt}
            title="Top 50: Plush Hoodies"
            subtitle="Comfy, premium AlgoU merch"
            accent="bg-violet-500"
          />
          <PrizeCard
            icon={Gift}
            title="Top 250: T-Shirts"
            subtitle="Wear your victory on your sleeve"
            accent="bg-amber-500"
          />
          <PrizeCard
            icon={Crown}
            title="Top 500: Scholarships upto 10L + Reserved Seat"
            subtitle="Guaranteed spot at AlgoUniversity School of CS & AI"
            accent="bg-indigo-500"
          />
          <PrizeCard
            icon={Apple}
            title="Random from Top 1000: Silicon Valley Office Tours"
            subtitle="Win a tech trip to visit Google, Microsoft, Apple offices"
            accent="bg-red-500"
          />
        </div>
      </div>
    </section>
  );
}
