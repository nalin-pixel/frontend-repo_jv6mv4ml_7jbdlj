import { motion } from "framer-motion";
import { BookOpen, Briefcase, Code, Database, Cpu, Layers } from "lucide-react";

const YearCard = ({ year, title, topics, beyond }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 text-white shadow-lg backdrop-blur"
  >
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      <BookOpen className="h-4 w-4" /> {year}
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <ul className="mt-2 list-disc space-y-1 pl-5 text-white/85">
      {topics.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
    <p className="mt-3 text-sm text-white/70"><span className="font-semibold">Beyond Classroom:</span> {beyond}</p>
  </motion.div>
);

export default function Curriculum() {
  const years = [
    {
      year: "Year 1",
      title: "DSA, Web Dev & Math",
      topics: ["Data Structures & Algorithms", "Modern Web Development", "Mathematical Foundations"],
      beyond: "Build your Snapchat • Build AI Movie Maker • Build Netflix",
    },
    {
      year: "Year 2",
      title: "Systems & Data",
      topics: ["Operating Systems", "Databases", "Distributed Systems"],
      beyond: "Google Summer of Code camp • ACM ICPC camp • Facebook HackerCup AI Track",
    },
    {
      year: "Year 3",
      title: "Specializations",
      topics: ["Hotstar-scale Streaming Web App", "iOS Engineering Track", "HFT Quant Track"],
      beyond: "Ship production-grade apps, internships, research",
    },
    {
      year: "Year 4",
      title: "FAANG Track",
      topics: ["Advanced System Design", "Interview Mastery", "Leadership in Tech"],
      beyond: "Finish with capstones & placements",
    },
  ];

  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(251,191,36,0.12),transparent),radial-gradient(600px_200px_at_80%_0%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Four-Year CS & AI Journey</h2>
          <p className="max-w-3xl text-white/80">Designed for builders, founders and elite engineers. Includes 3-month internships after Year 2 and Year 3, and a 12-month industry residency in the final year.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {years.map((y) => (
            <YearCard key={y.year} {...y} />
          ))}
        </div>

        <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
          <Briefcase className="h-4 w-4" />
          Guaranteed practical exposure: 3-month internships after 2nd and 3rd year, 12-month internship in final year.
        </div>
      </div>
    </section>
  );
}
