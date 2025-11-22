"use client";

import { motion } from "framer-motion";

const sections = [
  { label: "Work", href: "/work", hint: "Selected projects & case studies" },
  { label: "Writing", href: "/writing", hint: "Notes, essays, and explorations" },
  { label: "Lab", href: "/lab", hint: "Interactive experiments & visualizations" },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="space-y-4">
        <motion.h1
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I&apos;m Adi.
        </motion.h1>

        <motion.p
          className="max-w-xl text-sm text-neutral-400 sm:text-base"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Senior fullstack engineer who likes building systems, visualizations,
          and tools that reduce friction.
        </motion.p>
      </section>

      <motion.section
        className="grid gap-4 sm:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        {sections.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
            className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 text-sm hover:border-neutral-500 hover:bg-neutral-900"
          >
            <div className="font-medium">{item.label}</div>
            <div className="mt-1 text-xs text-neutral-400">{item.hint}</div>
          </motion.a>
        ))}
      </motion.section>
    </div>
  );
}
