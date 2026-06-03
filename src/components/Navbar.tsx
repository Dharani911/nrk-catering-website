import { useState, useEffect } from "react";
import nrkLogo from "@/assets/nrk-logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Special Service", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-background/95 py-2 shadow-md backdrop-blur-md"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a
          href="#hero"
          className="flex min-w-0 items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <span className="relative flex shrink-0 items-center justify-center transition-all duration-500">
            <img
              src={nrkLogo}
              alt="NRK Catering"
              className="h-9 w-auto object-contain sm:h-10 lg:h-11"
              style={{
                filter:
                  scrolled || mobileOpen
                    ? "drop-shadow(0 3px 8px rgba(0,0,0,0.18))"
                    : "drop-shadow(0 4px 14px rgba(0,0,0,0.38))",
              }}
            />
          </span>

          <span
            className={`truncate font-heading text-base font-bold sm:text-lg ${
              scrolled || mobileOpen
                ? "text-brand-green-dark"
                : "text-brand-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]"
            }`}
          >
            NRK Catering
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-brand-gold after:transition-transform after:duration-300 after:content-[''] hover:text-brand-gold hover:after:origin-left hover:after:scale-x-100 ${scrolled ? "text-foreground/80" : "text-brand-cream/90"}`}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-brand-green px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-green-dark">
            Get Quote
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="flex flex-col gap-1.5 rounded-lg p-2 lg:hidden" aria-label="Toggle menu" aria-expanded={mobileOpen}>
          <span className={`h-0.5 w-6 transition-transform ${mobileOpen ? "translate-y-2 rotate-45 bg-foreground" : scrolled ? "bg-foreground" : "bg-brand-cream"}`} />
          <span className={`h-0.5 w-6 transition-opacity ${mobileOpen ? "opacity-0 bg-foreground" : scrolled ? "bg-foreground" : "bg-brand-cream"}`} />
          <span className={`h-0.5 w-6 transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45 bg-foreground" : scrolled ? "bg-foreground" : "bg-brand-cream"}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-lg animate-fade-in">
          <div className="container mx-auto flex max-h-[calc(100svh-72px)] flex-col gap-1 overflow-y-auto px-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted hover:text-brand-green">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 rounded-full bg-brand-green px-5 py-3 text-center text-sm font-semibold text-primary-foreground">
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
