import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type ScannedModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  scan: {
    src: string;
    alt: string;
  };
};

export default function ScannedModal({ open, setOpen, scan }: ScannedModalProps) {
  const [zoom, setZoom] = useState(1);

  // ESC key close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-background rounded-xl w-full max-w-4xl max-h-[85vh] p-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ===== Controls ===== */}
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm text-muted-foreground">{scan.alt}</p>

              <div className="flex gap-2">
                <button
                  onClick={() => setZoom((z) => Math.min(z + 0.2, 2))}
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-sm"
                >
                  +
                </button>
                <button
                  onClick={() => setZoom(1)}
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-sm"
                >
                  Reset
                </button>
                <a
                  href={`/${scan.src}`}
                  download
                  className="px-3 py-1 rounded bg-white text-black text-sm font-medium"
                >
                  Download
                </a>
              </div>
            </div>

            {/* ===== Image Container ===== */}
            <div className="flex-1 overflow-auto flex items-center justify-center border border-white/10 rounded-lg">
              <motion.div
                drag
                dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                style={{ scale: zoom }}
                className="cursor-grab"
              >
                <Image
                  src={`/${scan.src}`}
                  alt={scan.alt}
                  width={900}
                  height={600}
                  className="object-contain max-h-[65vh] w-auto rounded-md"
                  priority
                />
              </motion.div>
            </div>

            {/* ===== Footer ===== */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setOpen(false)}
                className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
