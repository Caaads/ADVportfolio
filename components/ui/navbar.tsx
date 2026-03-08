"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Sections per page
  const sectionsMap: Record<string, string[]> = {
    "/": ["projects", "about", "certificates", "contact"],
    "/educational-tour": ["gallery", "journal"],
  };

  const sections = sectionsMap[pathname] || [];

  // Active section tracking (scroll highlight)
  useEffect(() => {
    const handler = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [sections]);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-purple-400 to-cyan-400 origin-left z-60"
        style={{ scaleX }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/70 backdrop-blur"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold">
            Cads
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-sm items-center">
            {pathname !== "/" && (
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Back to Main
              </Link>
            )}
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`transition ${
                  active === id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>

          {/* Mobile nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              {/* Accessibility: Add a title for screen readers */}
              <SheetTitle className="text-lg font-semibold mb-4">
                Navigation Menu
              </SheetTitle>

              <nav className="flex flex-col gap-6 mt-2">
                {pathname !== "/" && (
                  <Link href="/">
                    Back to Main
                  </Link>
                )}
                {sections.map((id) => (
                  <a key={id} href={`#${id}`}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </>
  );
}
