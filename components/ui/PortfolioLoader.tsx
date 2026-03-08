"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const icons = [
  FaReact,
  SiNextdotjs,
  SiTailwindcss,
  FaNodeJs,
  FaGithub,
];

export default function PortfolioLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-32 h-32 rounded-full overflow-hidden border border-white/20 mb-6"
      >
        <Image
          src="/profile1.jpg"
          alt="Loading profile"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-xl font-semibold tracking-wide mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Alfred Mari Infiesto Cada
      </motion.h1>

      {/* Tech Icons */}
      <motion.div
        className="flex gap-4 text-2xl text-muted-foreground"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: index * 0.15,
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </motion.div>

      {/* Loading text */}
      <p className="mt-6 text-sm text-muted-foreground tracking-widest">
        LOADING PORTFOLIO
      </p>
    </motion.div>
  );
}
