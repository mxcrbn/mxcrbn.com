"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
      setScrolled(scrollPercentage > 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a14]' : ''}`} style={scrolled ? { boxShadow: '0px 3px 12px 0px rgba(0, 0, 0, 0.75)' } : {}}>
      <div className="w-full py-4 flex justify-center">
        <div className="w-full flex justify-between items-center" style={{ paddingLeft: '10%', paddingRight: '10%', maxWidth: '2500px' }}>
          <div style={{ opacity: 0.75 }}>
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image src="/logo.svg" alt="mxcrbn" width={160} height={53} />
            </Link>
          </div>

          <nav className="flex items-center gap-6">
            <div className="flex items-center gap-4" style={{ opacity: 0.75 }}>
            <a
              href="https://www.linkedin.com/in/mxcrbn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <Image src="/linkedin.svg" alt="LinkedIn" width={35} height={35} />
            </a>

            <a
              href="https://x.com/mxcrbn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Twitter"
            >
              <Image src="/twitter.svg" alt="Twitter" width={35} height={35} />
            </a>

            <a
              href="mailto:max@mxcrbn.com"
              className="hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              <Image src="/email.svg" alt="Email" width={35} height={35} />
            </a>
          </div>
        </nav>
        </div>
      </div>
    </header>
  );
}
