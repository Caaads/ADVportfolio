"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  src: string;
  alt: string;
}

export default function ImageModal({ open, setOpen, src, alt }: ImageModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-4xl bg-background border border-white/10 p-4">
            <DialogHeader>
              <DialogTitle className="text-2xl">{alt}</DialogTitle>
            </DialogHeader>

            <motion.div
              key={src} // ensures animation triggers on image change
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex justify-start" // aligns image to top-left
            >
              <Image
                src={`/${src}`}
                alt={alt}
                width={600}
                height={400}
                className="object-cover rounded-md"
              />
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
