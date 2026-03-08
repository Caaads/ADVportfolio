//tech stack for the projects itself

"use client";

import { techStack } from "@/constants/techStack";
import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <section id="tech" className="py-24">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        <p className="text-muted-foreground mt-2">
          Tools and technologies I actively use in my projects
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition"
            >
              <Icon className="text-4xl text-white/80 group-hover:text-white transition" />
              <span className="text-sm text-muted-foreground group-hover:text-white transition">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
