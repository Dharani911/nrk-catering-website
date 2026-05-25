import { useScrollReveal, useParallax } from "@/hooks/useScrollReveal";
import {
  Award,
  Clock,
  ChefHat,
  MapPin,
  Sparkles,
  HeartHandshake,
  Leaf,
  Shield,
} from "lucide-react";
import bananaLeafServer from "@/assets/banana-leaf-premium-server.png";
import professionalServer from "@/assets/professional-server.png";

const reasons = [
  {
    icon: ChefHat,
    title: "Veteran Culinary Expertise",
    desc: "Decades of experience in authentic South Indian cooking, carried forward with care and consistency.",
  },
  {
    icon: HeartHandshake,
    title: "Guest-First Hospitality",
    desc: "Every guest is served with warmth, respect, and the attention expected at Tamil celebrations.",
  },
  {
    icon: Award,
    title: "Tradition with Modern Standards",
    desc: "Heritage recipes are matched with clean presentation, organized planning, and professional service.",
  },
  {
    icon: Sparkles,
    title: "Tailored Menus",
    desc: "Menus are planned around your event type, guest count, preferences, and budget.",
  },
  {
    icon: Leaf,
    title: "Elegant Presentation",
    desc: "From banana leaf meals to buffet counters, every setup is arranged with care.",
  },
  {
    icon: Clock,
    title: "Dependable Execution",
    desc: "Punctual, organized, and reliable service from preparation to final serving.",
  },
  {
    icon: MapPin,
    title: "Across Tamil Nadu",
    desc: "Based in Madurai and serving weddings, functions, and events across Tamil Nadu.",
  },
  {
    icon: Shield,
    title: "Family-Run Commitment",
    desc: "Personal attention, responsibility, and accountability in every event we handle.",
  },
];

export default function WhyChooseUsSection() {
  const ref = useScrollReveal();
  const bgParallax = useParallax(0.15);

  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-32"
    >
      {/* Parallax background pattern */}
      <div ref={bgParallax} className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-10 h-40 w-40 rounded-full bg-brand-gold/[0.04]" />
        <div className="absolute bottom-10 right-[15%] h-56 w-56 rounded-full bg-brand-green/[0.04]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-peach/[0.025]" />
      </div>

      {/* Desktop large cutouts - desktop layout locked */}
      <img
        src={bananaLeafServer}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 top-1/2 hidden h-[72%] max-h-[730px] min-h-[540px] w-auto -translate-y-1/2 opacity-95 drop-shadow-[0_32px_60px_rgba(0,0,0,0.22)] 2xl:block 2xl:-left-44 min-[1800px]:-left-28"
        loading="lazy"
      />

      <img
        src={professionalServer}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-60 top-1/2 hidden h-[74%] max-h-[750px] min-h-[560px] w-auto -translate-y-1/2 opacity-95 drop-shadow-[0_32px_60px_rgba(0,0,0,0.22)] 2xl:block 2xl:-right-48 min-[1800px]:-right-32"
        loading="lazy"
      />
      <div ref={ref} className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 md:mb-16">
          <p className="reveal-up mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
            The NRK Difference
          </p>

          <h2 className="reveal-up mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Why Families & Corporates{" "}
            <span className="text-gradient-gold">Trust Us</span>
          </h2>

          <p className="reveal-up mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            From traditional family celebrations to professionally managed
            corporate events, NRK Catering is trusted for authentic food,
            graceful presentation, disciplined service, and dependable execution.
          </p>

          {/* Mobile meaningful server placement */}
          <div className="reveal-up mx-auto mt-7 max-w-sm overflow-hidden rounded-[2rem] border border-brand-gold/15 bg-brand-gold/10 px-4 pt-4 shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:max-w-md 2xl:hidden">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-terracotta">
              Warm family service · Professional event care
            </div>

            <div className="flex items-end justify-center gap-3">
              <img
                src={bananaLeafServer}
                alt="Traditional banana leaf catering server"
                className="h-44 w-auto object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.18)] sm:h-56"
                loading="lazy"
              />

              <img
                src={professionalServer}
                alt="Professional catering server"
                className="h-44 w-auto object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.18)] sm:h-56"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Desktop original view locked. Mobile made compact. */}
        <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6 xl:max-w-4xl xl:gap-8 2xl:max-w-[900px] min-[1800px]:max-w-5xl">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="reveal-up group cursor-default rounded-2xl border border-border/60 bg-card/90 p-3 text-center shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30 hover:shadow-xl sm:rounded-3xl sm:p-5 lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0 lg:hover:translate-y-0 lg:hover:border-transparent lg:hover:shadow-none"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-green/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-green group-hover:shadow-lg sm:mb-5 sm:h-16 sm:w-16">
                <reason.icon className="h-5 w-5 text-brand-green transition-colors duration-500 group-hover:text-primary-foreground sm:h-7 sm:w-7" />
              </div>

              <h3 className="mx-auto max-w-[130px] font-heading text-[13px] font-bold leading-snug text-foreground sm:max-w-none sm:text-lg">
                {reason.title}
              </h3>

              <p className="mt-2 hidden text-sm leading-relaxed text-muted-foreground sm:block">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}