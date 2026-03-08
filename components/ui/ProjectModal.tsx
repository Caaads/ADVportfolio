"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiStripe,
  SiTypescript,
  SiDjango,
  SiPython,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { LuImageOff, LuX, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { JSX } from "react";
import type { Project } from "@/constants/constants";

/* ================= TYPES ================= */
interface ProjectModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  project: Project | null;
}

/* ================= ICON MAP ================= */
const techIcons: Record<string, JSX.Element> = {
  React: <SiReact className="text-sky-400" />,
  Nextjs: <SiNextdotjs className="text-white" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  MySQL: <SiMysql className="text-blue-400" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  ReactNative: <FaMobileAlt className="text-purple-400" />,
  Stripe: <SiStripe className="text-indigo-400" />,
  Typescript: <SiTypescript className="text-blue-400" />,
  Django: <SiDjango className="text-green-400" />,
  Python: <SiPython className="text-yellow-400" />,
  Javascript: <SiJavascript className="text-yellow-400" />,
  CSS: <SiTailwindcss className="text-cyan-400" />,
  HTML: <SiHtml5 className="text-orange-400" />,
};

/* ================= COMPONENT ================= */
export default function ProjectModal({ open, setOpen, project }: ProjectModalProps) {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'problem' | 'solution' | 'features'>('problem');
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  if (!project) return null;

  const images = project.images.filter(img => img && img.trim() !== "");
  const hasImages = images.length > 0;

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);

  // Keyboard navigation for fullscreen
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!fullscreenOpen) return;
      if (e.key === "Escape") setFullscreenOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [fullscreenOpen]);

  // Swipe on mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => setStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (diff > 50) prev();
    else if (diff < -50) next();
    setStartX(null);
  };

  return (
    <>
      {/* ================= MAIN MODAL ================= */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl md:max-w-4xl bg-background border border-white/10 p-6 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          </DialogHeader>

          <motion.div className="space-y-6">
            {/* ================= SINGLE IMAGE WITH ARROWS ================= */}
            {hasImages ? (
              <div
                className="relative flex items-center justify-center border border-white/10 rounded-lg h-[250px] md:h-[400px] bg-black/40 overflow-hidden cursor-zoom-in"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onClick={() => setFullscreenOpen(true)}
              >
                {/* Prev */}
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-white/10 rounded-full z-10"
                >
                  <LuChevronLeft />
                </button>

                {/* Image */}
                <Image
                  src={`/${images[index]}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain md:object-scale-down rounded-lg select-none"
                />

                {/* Next */}
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-white/10 rounded-full z-10"
                >
                  <LuChevronRight />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[250px] border border-white/10 rounded-lg bg-white/5">
                <LuImageOff className="text-4xl mb-2" />
                <p className="text-muted-foreground">No preview available</p>
              </div>
            )}

            {/* Dots */}
            {hasImages && (
              <div className="flex justify-center gap-2 mt-2">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
                  />
                ))}
              </div>
            )}

            {/* ================= DESCRIPTION ================= */}
            <p className="text-muted-foreground">{project.description}</p>

            {/* ================= SEGMENTED PROBLEM/SOLUTION/FEATURES ================= */}
            <div className="flex gap-2 mb-2 flex-wrap">
              <button
                onClick={() => setActiveTab('problem')}
                className={`px-3 py-1 rounded-full text-sm ${activeTab === 'problem' ? 'bg-white text-black' : 'bg-white/10 text-white'}`}
              >
                Problem
              </button>
              <button
                onClick={() => setActiveTab('solution')}
                className={`px-3 py-1 rounded-full text-sm ${activeTab === 'solution' ? 'bg-white text-black' : 'bg-white/10 text-white'}`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`px-3 py-1 rounded-full text-sm ${activeTab === 'features' ? 'bg-white text-black' : 'bg-white/10 text-white'}`}
              >
                Features
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-muted-foreground">
              {activeTab === 'problem' && <p>{project.problem}</p>}
              {activeTab === 'solution' && <p>{project.solution}</p>}
              {activeTab === 'features' && (
                <ul className="list-disc list-inside">
                  {project.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              )}
            </div>

            {/* ================= ROLE ================= */}
            <p><strong>Role:</strong> {project.role}</p>

            {/* ================= TECH STACK ================= */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <div key={t} className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
                  {techIcons[t]} {t}
                </div>
              ))}
            </div>

            {/* ================= ACTIONS ================= */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a href={project.live} target="_blank" className="px-4 py-2 bg-white text-black rounded-md">Live Demo</a>
              <a href={project.github} target="_blank" className="px-4 py-2 border border-white/20 rounded-md">GitHub</a>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* ================= FULLSCREEN IMAGE VIEWER ================= */}
      <AnimatePresence>
        {fullscreenOpen && hasImages && (
          <motion.div
            className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              onClick={() => setFullscreenOpen(false)}
              className="absolute top-6 right-6 text-white text-2xl z-50"
            >
              <LuX />
            </button>

            {/* Left */}
            <button
              onClick={prev}
              className="absolute left-6 text-white text-4xl z-50 hidden md:block"
            >
              <LuChevronLeft />
            </button>

            {/* Right */}
            <button
              onClick={next}
              className="absolute right-6 text-white text-4xl z-50 hidden md:block"
            >
              <LuChevronRight />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative max-h-[90vh] max-w-[90vw]"
              >
                <Image
                  src={`/${images[index]}`}
                  alt={`Full Image ${index + 1}`}
                  width={2000}
                  height={1200}
                  className="object-contain select-none rounded-lg"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Mobile swipe hint */}
            <div className="absolute bottom-6 text-white/50 text-sm md:hidden">
              Swipe left or right
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
