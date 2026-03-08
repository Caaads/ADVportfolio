"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useState } from "react";
import ImageModal from "./ImageModal";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface JournalEntry {
  images: string[];
  company: string;
  date: string;
  day: string;
  text: string;
}

interface JournalModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  entry: JournalEntry | null;
}

export default function JournalModal({ open, setOpen, entry }: JournalModalProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [fullImageOpen, setFullImageOpen] = useState(false);

  if (!entry) return null;

  const nextImage = () =>
    setImageIndex((prev) => (prev + 1) % entry.images.length);

  const prevImage = () =>
    setImageIndex((prev) =>
      prev === 0 ? entry.images.length - 1 : prev - 1
    );

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl bg-background border border-white/10">
          <DialogHeader>
            <DialogTitle className="text-2xl">{entry.day}</DialogTitle>
          </DialogHeader>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* IMAGE VIEW */}
            <div className="relative mb-4 w-full h-64 rounded-md overflow-hidden">
              <img
                src={`/${entry.images[imageIndex]}`}
                alt={entry.company}
                onClick={() => setFullImageOpen(true)}
                className="w-full h-full object-cover cursor-pointer rounded-md"
              />

              {/* LEFT */}
              {entry.images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                >
                  <ChevronLeft />
                </button>
              )}

              {/* RIGHT */}
              {entry.images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                >
                  <ChevronRight />
                </button>
              )}
            </div>

            {/* META */}
            <p className="text-muted-foreground mb-2">
              <span className="font-medium">{entry.company}</span> — {entry.date}
            </p>

            {/* BODY */}
            <p className="text-muted-foreground">{entry.text}</p>
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* FULL IMAGE MODAL */}
      {fullImageOpen && (
        <ImageModal
          open={fullImageOpen}
          setOpen={setFullImageOpen}
          src={entry.images[imageIndex]}
          alt={entry.company}
        />
      )}
    </>
  );
}
