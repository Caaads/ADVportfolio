"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ImageModal from "@/components/ui/ImageModal";
import JournalModal from "@/components/ui/JournalModal";
import ScannedModal from "@/components/ui/ScannedModal";
import { gallery, journal, scannedDocs } from "@/constants/constants";

export default function EducationalTour() {
  const router = useRouter();

  // === IMAGE MODAL STATE ===
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [imageOpen, setImageOpen] = useState(false);

  // === JOURNAL & SCANNED STATE ===
  const [activeTab, setActiveTab] = useState<"journal" | "scanned">("journal");
  const [selectedJournal, setSelectedJournal] = useState<typeof journal[0] | null>(null);
  const [journalOpen, setJournalOpen] = useState(false);
  const [selectedScan, setSelectedScan] = useState<null | { src: string; alt: string }>(null);
  const [scanOpen, setScanOpen] = useState(false);

  // === GALLERY REF & HOVER STATE ===
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // === INFINITE GALLERY ===
  const infiniteGallery = [...gallery, ...gallery]; // duplicate once for seamless loop

  // === AUTO SCROLL LOGIC ===
  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;

    let animationFrame: number;

    const autoScroll = () => {0
      if (!isHovering) {
        el.scrollLeft += 0.6; // adjust speed
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovering]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      {/* ===== BACK BUTTON ===== */}
      <button
        onClick={() => router.push("/")}
        className="mb-8 px-6 py-3 rounded-md border border-white/20 hover:bg-white/10 transition"
      >
        Back to Main Page
      </button>

      <h1 className="text-4xl font-semibold mb-12 text-center">Educational Tour</h1>

      {/* ================= GALLERY SECTION ================= */}
      <motion.section
        id="gallery"
        className="min-h-screen py-20" 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <h2 className="text-3xl font-semibold mb-8">Gallery</h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* SCROLLER */}
          <div
            ref={galleryRef}
            className="flex gap-4 overflow-x-auto scroll-smooth whitespace-nowrap"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {infiniteGallery.map((img, index) => (
              <motion.div
                key={index}
                onClick={() => {
                  setSelectedImage(img);
                  setImageOpen(true);
                }}
                className="shrink-0 w-64 h-40 md:w-72 md:h-48 rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={`/${img.src}`}
                  alt={img.alt}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>

          {/* LEFT/RIGHT ARROWS */}
          <button
            onClick={() =>
              galleryRef.current?.scrollBy({ left: -400, behavior: "smooth" })
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/70 transition z-10"
          >
            ‹
          </button>
          <button
            onClick={() =>
              galleryRef.current?.scrollBy({ left: 400, behavior: "smooth" })
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/70 transition z-10"
          >
            ›
          </button>
        </div>
      </motion.section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <ImageModal
          open={imageOpen}
          setOpen={setImageOpen}
          src={selectedImage.src}
          alt={selectedImage.alt}
        />
      )}

      {/* ================= JOURNALS & SCANNED SECTION ================= */}
      <motion.section
        id="journal"
        className="min-h-screen py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <h2 className="text-3xl font-semibold mb-4">Journals</h2>

        {/* STICKY TABS */}
        <div className="sticky top-28 z-30 bg-background/80 backdrop-blur rounded-xl pt-4 pb-4 mb-6 pl-3">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("journal")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "journal"
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Companies
            </button>
            <button
              onClick={() => setActiveTab("scanned")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "scanned"
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Scanned
            </button>
          </div>
        </div>

        {/* CONTEXT TEXT */}
        <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
          {activeTab === "journal"
            ? "Daily reflections, learnings, and experiences during the educational tour."
            : "Official scanned journals documenting each day of the educational tour."}
        </p>

        <AnimatePresence mode="wait">
          {/* JOURNAL TAB */}
          {activeTab === "journal" && (
            <motion.div
              key="journal"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 max-w-3xl"
            >
              {journal.map((entry, index) => (
                <motion.div
                  key={index}
                  onClick={() => {
                    setSelectedJournal(entry);
                    setJournalOpen(true);
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="border border-white/10 rounded-xl p-4 bg-white/5 backdrop-blur flex flex-col md:flex-row gap-4 cursor-pointer"
                >
                  <div className="shrink-0 w-full md:w-48 h-32 relative rounded-md overflow-hidden">
                    <Image
                      src={`/${entry.images[0]}`}
                      alt={entry.company}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{entry.day}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">{entry.company}</span> — {entry.date}
                    </p>
                    <p className="text-muted-foreground">{entry.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* SCANNED TAB */}
          {activeTab === "scanned" && (
            <motion.div
              key="scanned"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl"
            >
              {scannedDocs.map((doc, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => {
                    setSelectedScan(doc);
                    setScanOpen(true);
                  }}
                  className="cursor-pointer space-y-2"
                >
                  <Image
                    src={`/${doc.src}`}
                    alt={doc.alt}
                    width={400}
                    height={300}
                    className="rounded-md object-cover"
                  />
                  <p className="text-sm text-muted-foreground text-center">{doc.alt}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* MODALS */}
      {selectedJournal && (
        <JournalModal open={journalOpen} setOpen={setJournalOpen} entry={selectedJournal} />
      )}
      {selectedScan && <ScannedModal open={scanOpen} setOpen={setScanOpen} scan={selectedScan} />}
      {selectedImage && (
        <ImageModal open={imageOpen} setOpen={setImageOpen} src={selectedImage.src} alt={selectedImage.alt} />
      )}
    </main>
  );
}
