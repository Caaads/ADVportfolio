"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { certificates } from "@/constants/constants"; // import your certificates array

interface Certificate {
  src: string;
  alt: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

interface CertificateModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  certificate: Certificate;
}

export default function CertificateModal({ open, setOpen, certificate }: CertificateModalProps) {
  const [fullscreen, setFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(
    certificates.findIndex((c) => c.src === certificate.src)
  );

  // Detect mobile for hint text
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 768);
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  // Update currentIndex if certificate changes
  useEffect(() => {
    setCurrentIndex(certificates.findIndex((c) => c.src === certificate.src));
  }, [certificate]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % certificates.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);

  // Swipe gesture for mobile
  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 50) prev(); // swipe right
    else if (info.offset.x < -50) next(); // swipe left
  };

  return (
    <>
      {/* Main Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg w-full rounded-xl p-6 bg-background/90 backdrop-blur overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">{certificate.title}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground mt-1">
              Issued by {certificate.issuer} on {certificate.date}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <motion.div
              key={certificate.src}
              className="w-full h-80 md:h-96 relative cursor-zoom-in"
              whileTap={{ scale: 1.05 }}
              onClick={() => {
                setFullscreen(true);
                setOpen(false);
              }}
            >
              <Image
                src={`/${certificate.src}`}
                alt={certificate.alt}
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>

          {certificate.description && (
            <p className="mt-4 text-sm text-muted-foreground">{certificate.description}</p>
          )}

          <button
            className="mt-6 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </DialogContent>
      </Dialog>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay click to close */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setFullscreen(false)}
            />

            {/* Arrows for desktop */}
            <button
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/40 rounded-full hover:bg-black/70 transition"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              ‹
            </button>
            <button
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/40 rounded-full hover:bg-black/70 transition"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              ›
            </button>

            {/* Image */}
            <motion.div
              className="relative w-auto max-w-[95%] max-h-[95%] cursor-grab"
              key={certificates[currentIndex].src}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              <Image
                src={`/${certificates[currentIndex].src}`}
                alt={certificates[currentIndex].alt}
                width={1000}
                height={700}
                className="object-contain rounded-lg select-none"
              />
            </motion.div>

            {/* Hint Text */}
            <p className="absolute bottom-6 text-white text-sm text-center w-full">
              {isMobile ? "Swipe to next" : "Click arrows to next"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
