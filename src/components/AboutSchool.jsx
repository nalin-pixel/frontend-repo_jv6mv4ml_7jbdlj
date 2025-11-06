import { motion } from "framer-motion";
import { School, Users, Star, BookOpen, Briefcase } from "lucide-react";

const FacultyCard = ({ name, role, company, avatar }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur"
  >
    <img src={avatar} alt={name} className="h-12 w-12 rounded-lg object-cover" />
    <div>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-white/70">{role} • {company}</p>
    </div>
  </motion.div>
);

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

export default function AboutSchool() {
  const faculty = [
    { name: "Ananya Rao", role: "Staff SWE", company: "Google", avatar: "https://i.pravatar.cc/100?img=5" },
    { name: "Karan Mehta", role: "ML Engineer", company: "Apple", avatar: "https://i.pravatar.cc/100?img=15" },
    { name: "Sana Kapoor", role: "Principal Engineer", company: "Microsoft", avatar: "https://i.pravatar.cc/100?img=25" },
    { name: "Arjun Singh", role: "CTO", company: "AlgoUniversity", avatar: "https://i.pravatar.cc/100?img=35" },
  ];

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
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_10%_10%,rgba(99,102,241,0.15),transparent),radial-gradient(500px_200px_at_90%_10%,rgba(16,185,129,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
            <School className="h-4 w-4" />
            AlgoUniversity School of CS & AI
          </div>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">A School for the Future</h2>
          <p className="mt-2 text-white/80">Previously ran a headline-making online school with 25 LPA average salary outcomes. Here, you learn from not-so-typical professors — you’re taught by builders from Google, Apple, Microsoft and more.</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2"><Users className="h-4 w-4" /> Mentors who ship</div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2"><Star className="h-4 w-4" /> 25 LPA average</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f) => (
            <FacultyCard key={f.name} {...f} />
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6">
            <h3 className="text-2xl font-bold sm:text-3xl">Four-Year CS & AI Journey</h3>
            <p className="mt-2 max-w-3xl text-white/80">Designed for builders, founders and elite engineers. Includes 3-month internships after Year 2 and Year 3, and a 12-month industry residency in the final year.</p>
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
      </div>
    </section>
  );
}
