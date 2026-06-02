import { useEffect, useState } from "react";
import { useScrollReveal, useScrollProgress } from "@/hooks/useScrollReveal";
import {
  BriefcaseBusiness,
  Building2,
  ChevronLeft,
  ChevronRight,
  Crown,
  Gem,
  Heart,
  MessageCircle,
  PartyPopper,
  Sparkles,
  UsersRound,
} from "lucide-react";
import familyEvents from "@/assets/family-events.jpg";
import corporateImg from "@/assets/corporate-catering.jpg";
import socialEvents from "@/assets/private-events.jpg";
import heroSadhya from "@/assets/hero-sadhya.jpg";
import { buildWhatsAppLink } from "@/config/business";

type ServiceItem = {
  title: string;
  subtitle: string;
  image: string;
  icon: typeof Heart;
  tone: string;
  highlights: string[];
};

const familyServices: ServiceItem[] = [
  {
    title: "Traditional Family Event",
    subtitle:
      "Authentic banana leaf dining for poojas, housewarmings, engagements, and close family functions.",
    image: heroSadhya,
    icon: Heart,
    tone: "from-brand-green/85 to-brand-green-dark/75",
    highlights: [
      "Traditional banana leaf service",
      "Menu planned around guest preference",
      "Respectful guest-focused serving",
    ],
  },
  {
    title: "Luxury Family Event",
    subtitle:
      "Refined catering for receptions, milestone celebrations, and elegant family gatherings.",
    image: familyEvents,
    icon: Crown,
    tone: "from-brand-gold/85 to-brand-terracotta/75",
    highlights: [
      "Elegant buffet presentation",
      "Custom counters and festive add-ons",
      "Smooth guest-flow coordination",
    ],
  },
];

const premiumServices: ServiceItem[] = [
  {
    title: "Premium Corporate Catering",
    subtitle:
      "Polished food service for offices, conferences, institutions, and executive gatherings.",
    image: corporateImg,
    icon: BriefcaseBusiness,
    tone: "from-brand-green-dark/90 to-brand-terracotta/75",
    highlights: [
      "Executive meal planning",
      "Buffet or packed meal service",
      "Punctual and organized coordination",
    ],
  },
  {
    title: "Premium Social Events",
    subtitle:
      "Stylish catering for birthdays, reunions, cultural functions, community events, and private celebrations.",
    image: socialEvents,
    icon: Gem,
    tone: "from-brand-terracotta/85 to-brand-peach/75",
    highlights: [
      "Stylish food presentation",
      "Customized celebration menus",
      "Live counters and festive add-ons",
    ],
  },
];

const mobileServices = [...familyServices, ...premiumServices];

function EventCard({ item }: { item: ServiceItem }) {
  const Icon = item.icon;

  return (
    <article className="reveal-scale group overflow-hidden rounded-[2rem] border border-brand-gold/15 bg-card shadow-[0_18px_45px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-gold/35 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
      <div className="relative h-60 overflow-hidden sm:h-72">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        <div className={`absolute inset-0 bg-gradient-to-t ${item.tone}`} />

        <div className="absolute inset-x-0 bottom-0 p-5 text-brand-cream sm:p-6">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/20">
            <Icon className="h-6 w-6 text-brand-gold" />
          </div>

          <h3 className="font-heading text-2xl font-bold">{item.title}</h3>

          <p className="mt-2 text-sm leading-relaxed text-brand-cream/85">
            {item.subtitle}
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-6">


        <ul className="space-y-3">
          {item.highlights.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <a
          href={buildWhatsAppLink(
            `Hello NRK Catering, I want to enquire about ${item.title}. Please help me plan a customized menu based on my event details.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-brand-green-dark"
        >
          <MessageCircle className="h-4 w-4" />
          Enquire for Custom Menu
        </a>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  const ref = useScrollReveal();
  const { ref: progressRef, progress } = useScrollProgress();
  const lineWidth = Math.min(100, progress * 200);
  const [activeMobileService, setActiveMobileService] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveMobileService((current) =>
        current === mobileServices.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPreviousService = () => {
    setActiveMobileService((current) =>
      current === 0 ? mobileServices.length - 1 : current - 1
    );
  };

  const goToNextService = () => {
    setActiveMobileService((current) =>
      current === mobileServices.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-muted/50 py-20 sm:py-24 md:py-32"
      ref={progressRef}
    >
      <div
        className="absolute left-0 top-0 h-1 bg-gradient-gold transition-none"
        style={{ width: `${lineWidth}%` }}
      />

      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-gold opacity-[0.04]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-brand-green opacity-[0.04]" />

      <div ref={ref} className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <p className="reveal-up mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Signature Event Experiences
          </p>

          <h2 className="reveal-up mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Catering Crafted for{" "}
            <span className="text-gradient-gold">Meaningful Occasions</span>
          </h2>

          <p className="reveal-up mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every event is unique. NRK Catering plans menus around your guest
            count, event style, food preference, service format, and celebration
            expectations instead of offering fixed menus.
          </p>

        </div>

        <div className="mb-5 rounded-2xl border border-brand-gold/20 bg-brand-gold/10 p-4">
                                        <p className="text-sm font-semibold leading-relaxed text-brand-green-dark">
                                          Every menu is thoughtfully customized based on event type, guest
                                          count, food preference, service style, and the memories you want to create.
                                        </p>
                                      </div>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <div className="relative mx-auto max-w-md">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${activeMobileService * 100}%)`,
                }}
              >
                {mobileServices.map((item) => (
                  <div key={item.title} className="w-full shrink-0 px-1">
                    <EventCard item={item} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goToPreviousService}
              className="absolute left-2 top-[42%] z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg ring-1 ring-border transition hover:bg-brand-gold hover:text-brand-green-dark"
              aria-label="Show previous service"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goToNextService}
              className="absolute right-2 top-[42%] z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg ring-1 ring-border transition hover:bg-brand-gold hover:text-brand-green-dark"
              aria-label="Show next service"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="mt-5 flex items-center justify-center gap-2">
              {mobileServices.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveMobileService(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeMobileService === index
                      ? "w-8 bg-brand-gold"
                      : "w-2 bg-brand-gold/35"
                  }`}
                  aria-label={`Show ${item.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:block">
          <div className="mb-14 rounded-[2rem] border border-border/60 bg-background/80 p-4 shadow-sm backdrop-blur sm:p-6 md:p-8">
            <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-terracotta">
                  <UsersRound className="h-4 w-4" />
                  Family Events
                </div>

                <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  Family celebrations served with tradition and elegance
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                Choose from soulful traditional dining or an elevated family
                celebration experience designed for weddings, engagements,
                poojas, and milestone gatherings.
              </p>
            </div>


            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {familyServices.map((item) => (
                <EventCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-border/60 bg-background/80 p-4 shadow-sm backdrop-blur sm:p-6 md:p-8">
              <div className="mb-7">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
                  <Building2 className="h-4 w-4" />
                  Corporate Event
                </div>

                <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  Premium professional service
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A refined service experience built around punctuality,
                  hygiene, organized setup, and professional guest handling.
                </p>
              </div>

              <EventCard item={premiumServices[0]} />
            </div>

            <div className="rounded-[2rem] border border-border/60 bg-background/80 p-4 shadow-sm backdrop-blur sm:p-6 md:p-8">
              <div className="mb-7">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-terracotta/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-terracotta">
                  <PartyPopper className="h-4 w-4" />
                  Social Events
                </div>

                <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  Premium service for joyful gatherings
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Designed for joyful gatherings where food, presentation, and
                  service come together to create a memorable celebration.
                </p>
              </div>

              <EventCard item={premiumServices[1]} />
            </div>
          </div>
        </div>
       <div className="reveal-up mx-auto mt-14 max-w-4xl px-4">
         <div className="relative overflow-hidden rounded-[2.2rem] border border-brand-gold/30 bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-dark px-6 py-8 text-center shadow-[0_28px_80px_rgba(0,0,0,0.18)] sm:px-10 sm:py-10 md:px-14">
           {/* soft luxury glow */}
           <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-brand-gold/20 blur-3xl" />
           <div className="pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-brand-gold/10 blur-3xl" />

           {/* subtle pattern lines */}
           <div className="pointer-events-none absolute inset-x-10 top-5 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
           <div className="pointer-events-none absolute inset-x-10 bottom-5 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

           <div className="relative z-10 mx-auto max-w-3xl">
             <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/35 bg-white/10 font-heading text-4xl leading-none text-brand-gold shadow-inner">
               “
             </span>

             <p className="font-heading text-xl font-semibold leading-relaxed text-brand-cream sm:text-2xl md:text-3xl">
               Because at NRK, we don’t serve menus.
             </p>

             <p className="mt-3 bg-gradient-to-r from-brand-gold via-brand-peach to-brand-gold bg-clip-text font-heading text-2xl font-bold leading-tight text-transparent sm:text-3xl md:text-4xl">
               We serve memories that last beyond the meal.
             </p>

             <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-brand-gold/80" />
           </div>
         </div>
       </div>
      </div>

    </section>
  );
}