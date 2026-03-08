import "./globals.css";
import Navbar from "@/components/ui/navbar";
import type { ReactNode } from "react";

export const metadata = {
  title: "Cads",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
