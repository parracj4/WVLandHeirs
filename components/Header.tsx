"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 py-3 px-4">
      <nav
        aria-label="Main navigation"
        className="max-w-xl mx-auto rounded-full transition-all duration-300 relative overflow-hidden"
        style={{
          boxShadow: scrolled
            ? "0 0 0 1px rgba(45, 80, 22, 0.12), 0 4px 20px rgba(0,0,0,0.1)"
            : "0 0 0 1px rgba(45, 80, 22, 0.08)",
          backdropFilter: "blur(12px) saturate(180%)",
          WebkitBackdropFilter: "blur(12px) saturate(180%)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        {/* Content */}
        <div className="relative z-10 flex justify-between items-center px-6 py-3">
          <Link href="/" className="flex-shrink-0 font-bold text-lg sm:text-xl text-brand-dark">
            WV Land Heirs
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/mineral-rights"
              className="text-brand-dark hover:text-brand-medium font-medium transition-colors text-sm sm:text-base"
            >
              Minerals
            </Link>
            <Link
              href="/timber"
              className="text-brand-dark hover:text-brand-medium font-medium transition-colors text-sm sm:text-base"
            >
              Timber
            </Link>
            <Link
              href="/#contact"
              className="text-brand-dark hover:text-brand-medium font-medium transition-colors text-sm sm:text-base"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
