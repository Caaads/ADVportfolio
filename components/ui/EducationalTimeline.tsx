"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { education } from "@/constants/constants";

export default function EducationTimeline() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-8">
        Educational Background
      </h3>

      <div className="relative border-l border-white/20 pl-6 space-y-10">
        {education.map((edu, index) => {
          const isCurrent = edu.current;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              className={`relative flex gap-4 ${
                isCurrent ? "scale-[1.03]" : ""
              }`}
            >
              {/* Timeline Dot */}
              <span
                className={`absolute -left-[10px] top-2 h-4 w-4 rounded-full ${
                  isCurrent
                    ? "bg-primary animate-pulse shadow-lg shadow-primary/60"
                    : "bg-white"
                }`}
              />

              {/* Logo */}
              <div
                className={`relative w-14 h-14 rounded-lg overflow-hidden border ${
                  isCurrent
                    ? "border-primary bg-primary/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <Image
                  src={edu.logo}
                  alt={edu.school}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Content */}
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  {edu.year}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <h4
                    className={`text-lg font-semibold ${
                      isCurrent ? "text-primary" : ""
                    }`}
                  >
                    {edu.level}
                  </h4>

                  {/* CURRENT BADGE */}
                  {isCurrent && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                      Current
                    </span>
                  )}

                  {/* STRAND BADGE */}
                  {edu.strand && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/20">
                      {edu.strand}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground">
                  {edu.school}
                </p>

                {/* Optional Future Slot */}
                {isCurrent && (
                  <p className="text-sm text-muted-foreground italic">
                    Bachelor of Science in Information Technology in progress
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
