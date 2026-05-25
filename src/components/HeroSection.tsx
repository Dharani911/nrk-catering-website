import { useState, useEffect, useRef } from "react";
import heroSadhya from "@/assets/hero-sadhya.jpg";
import familyImg from "@/assets/family-events.jpg";
import corporateImg from "@/assets/corporate-catering.jpg";
import privateImg from "@/assets/private-events.jpg";
import nrkLogo from "@/assets/nrk-logo.png";

const services = [
  {
    id: "family",
    label: "Family Events",
    subtitle: "Traditional & Luxury Celebrations",
    image: familyImg,
    color: "from-brand-gold/80 to-brand-peach/60",
  },
  {
    id: "corporate",
    label: "Corporate Catering",
    subtitle: "Premium Business Hospitality",
    image: corporateImg,
    color: "from-brand-green/80 to-brand-green-dark/60",
  },
  {
    id: "social",
    label: "Social Events",
    subtitle: "Elegant Private Gatherings",
    image: privateImg,
    color: "from-brand-terracotta/80 to-brand-peach/60",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sequence: Array<string | null> = [
      "family",
      "corporate",
      "social",
      null,
    ];

    const durations = [3000, 3000, 3000, 2500];
    let index = 0;
    let timeoutId: number;

    const runSequence = () => {
      setActive(sequence[index]);

      timeoutId = window.setTimeout(() => {
        index = (index + 1) % sequence.length;
        runSequence();
      }, durations[index]);
    };

    runSequence();

    return () => window.clearTimeout(timeoutId);
  }, []);

  const parallaxBg = scrollY * 0.4;
  const contentOpacity = Math.max(0, 1 - scrollY / 600);
  const contentY = scrollY * 0.2;
  const scaleVal = 1 + scrollY * 0.0003;

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background image transition */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxBg}px, 0) scale(${scaleVal})`,
        }}
      >
        <img
          src={heroSadhya}
          alt="Traditional South Indian banana leaf meal"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            active ? "opacity-0" : "opacity-100"
          }`}
          width={1920}
          height={1080}
        />

        {services.map((service) => (
          <img
            key={service.id}
            src={service.image}
            alt={service.label}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
              active === service.id
                ? "scale-100 opacity-100"
                : "scale-110 opacity-0"
            }`}
            width={1280}
            height={720}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,166,47,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(42,105,54,0.28),transparent_40%)]" />
      </div>

      {/* Soft particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float rounded-full opacity-20"
            style={{
              width: `${8 + i * 6}px`,
              height: `${8 + i * 6}px`,
              background:
                i % 2 === 0 ? "hsl(46, 93%, 44%)" : "hsl(33, 70%, 65%)",
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div
        className="relative z-10 container mx-auto flex min-h-[100svh] flex-col items-center justify-center px-4 py-10 text-center will-change-transform sm:py-16 md:py-24"
        style={{
          opacity: contentOpacity,
          transform: `translate3d(0, ${
            contentY -
            (window.innerWidth >= 1280
              ? 56
              : window.innerWidth >= 1024
                ? 40
                : 0)
          }px, 0)`,
        }}
      >
        <div className="mb-1 animate-fade-in sm:mb-2">
          <img
            src={nrkLogo}
            alt="NRK Catering Logo"
            className="mx-auto h-32 w-auto animate-float sm:h-40 md:h-48 lg:h-56 xl:h-64"
            style={{
              filter:
                "drop-shadow(0 0 2px rgba(255,245,210,0.75)) drop-shadow(0 0 7px rgba(255,226,150,0.38)) drop-shadow(0 2px 7px rgba(0,0,0,0.78)) drop-shadow(0 8px 20px rgba(0,0,0,0.62))",
            }}
          />
        </div>

        <div className="-mt-7 sm:-mt-8 md:-mt-10 lg:-mt-12">
          <p
            className="mb-2 animate-slide-up text-sm font-semibold uppercase tracking-[0.28em]"
            style={{ color: "hsl(33, 70%, 65%)" }}
          >
            Premium Catering Excellence
          </p>

          <h1
            className="animate-slide-up font-heading text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
            style={{ color: "hsl(60, 20%, 97%)" }}
          >
            NRK Catering
          </h1>
        </div>

        <p
          className="mt-3 max-w-xl animate-slide-up text-sm leading-7 opacity-85 md:text-base"
          style={{
            color: "hsl(60, 20%, 90%)",
            animationDelay: "0.2s",
          }}
        >
          Traditional Tamil taste, premium presentation, and warm hospitality
          for memorable celebrations.
        </p>

        {/* Service transition cards */}
        <div
          className="mt-5 w-full max-w-5xl animate-slide-up sm:mt-6"
          style={{ animationDelay: "0.90s" }}
        >
          <div className="grid grid-cols-3 items-start gap-2 sm:gap-4">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActive(active === service.id ? null : service.id)}
                onMouseEnter={() => setActive(service.id)}
                className={`group relative min-h-[96px] overflow-hidden rounded-2xl border px-2 py-3 text-center transition-all duration-500 sm:min-h-[118px] sm:px-5 sm:py-5 ${
                  index === 1 ? "mt-12 sm:mt-0" : "mt-0"
                } ${
                  active === service.id
                    ? "scale-[1.02] border-brand-gold/70 shadow-2xl"
                    : "border-brand-cream/20 hover:border-brand-gold/50"
                }`}
                style={{
                  background:
                    active === service.id
                      ? "hsla(46, 93%, 44%, 0.16)"
                      : "hsla(0, 0%, 0%, 0.32)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="relative z-10">
                  <h3
                    className="font-heading text-[12px] font-bold leading-tight sm:text-lg md:text-xl"
                    style={{ color: "hsl(60, 20%, 97%)" }}
                  >
                    {service.label}
                  </h3>

                  <p
                    className="mt-1.5 text-[10px] leading-snug sm:text-xs md:text-sm"
                    style={{ color: "hsl(33, 70%, 65%)" }}
                  >
                    {service.subtitle}
                  </p>

                  <span
                    className={`mx-auto mt-2 block h-1 rounded-full transition-all duration-500 ${
                      active === service.id
                        ? "w-8 bg-brand-gold"
                        : "w-4 bg-brand-cream/30"
                    }`}
                  />
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-20 ${
                    active === service.id ? "opacity-15" : ""
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 animate-pulse-soft sm:block">
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "hsl(60, 20%, 80%)" }}
            >
              Scroll to explore
            </span>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="animate-float"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="hsl(33, 70%, 65%)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}