import { useEffect, useState } from "react";
import { useScrollReveal, useScrollProgress } from "@/hooks/useScrollReveal";
import {
  BriefcaseBusiness,
  Building2,
  ChevronLeft,
  ChevronRight,
  Crown,
  Download,
  ExternalLink,
  FileText,
  Gem,
  Heart,
  PartyPopper,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import familyEvents from "@/assets/family-events.jpg";
import corporateImg from "@/assets/corporate-catering.jpg";
import socialEvents from "@/assets/private-events.jpg";
import heroSadhya from "@/assets/hero-sadhya.jpg";
import { buildWhatsAppLink } from "@/config/business";

type MenuItem = {
  title: string;
  subtitle: string;
  image: string;
  icon: typeof Heart;
  tone: string;
  pdfUrl: string;
  highlights: string[];
};

const familyMenus: MenuItem[] = [
  {
    title: "Traditional Family Event",
    subtitle:
      "Authentic banana leaf dining for poojas, housewarmings, engagements, and close family functions.",
    image: heroSadhya,
    icon: Heart,
    tone: "from-brand-green/85 to-brand-green-dark/75",
    pdfUrl: "/menus/traditional-family-event-menu.pdf",
    highlights: [
      "Traditional banana leaf service",
      "Pure vegetarian festive menu",
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
    pdfUrl: "/menus/luxury-family-event-menu.pdf",
    highlights: [
      "Elegant buffet presentation",
      "Welcome drinks and dessert counters",
      "Smooth guest-flow coordination",
    ],
  },
];

const premiumEvents: MenuItem[] = [
  {
    title: "Premium Corporate Catering",
    subtitle:
      "Polished food service for offices, conferences, institutions, and executive gatherings.",
    image: corporateImg,
    icon: BriefcaseBusiness,
    tone: "from-brand-green-dark/90 to-brand-terracotta/75",
    pdfUrl: "/menus/premium-corporate-catering-menu.pdf",
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
    pdfUrl: "/menus/premium-social-events-menu.pdf",
    highlights: [
      "Stylish food presentation",
      "Custom celebration menus",
      "Live counters and festive add-ons",
    ],
  },
];

const mobileMenus = [...familyMenus, ...premiumEvents];

function MenuPopup({
  item,
  onClose,
}: {
  item: MenuItem;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-foreground/80 p-3 backdrop-blur-sm sm:p-5"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative flex h-[88svh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-background shadow-2xl">
        <div className="flex flex-col gap-3 border-b border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Menu PDF Preview
            </p>
            <h3 className="truncate font-heading text-xl font-bold text-foreground sm:text-2xl">
              {item.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={item.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2 text-xs font-bold text-primary-foreground transition hover:bg-brand-green-dark"
            >
              <ExternalLink className="h-4 w-4" />
              Open
            </a>

            <a
              href={item.pdfUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-bold text-foreground transition hover:bg-muted"
            >
              <Download className="h-4 w-4" />
              PDF
            </a>

            <button
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground transition hover:bg-brand-gold/20"
              aria-label="Close menu preview"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 bg-muted/40">
          <iframe
            title={`${item.title} PDF menu`}
            src={item.pdfUrl}
            className="h-full w-full"
          />
        </div>

        <div className="border-t border-border bg-card px-4 py-3 text-xs text-muted-foreground sm:px-5">
          Menu options can be customized based on guest count, event style,
          location, and food preferences.
        </div>
      </div>
    </div>
  );
}

function EventCard({
  item,
  onViewMenu,
}: {
  item: MenuItem;
  onViewMenu: (item: MenuItem) => void;
}) {
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

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            onClick={() => onViewMenu(item)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-brand-green-dark"
          >
            <FileText className="h-4 w-4" />
            View Menu PDF
          </button>

          <a
            href={buildWhatsAppLink(
              `Hello NRK Catering, I want to enquire about ${item.title}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-bold text-foreground transition hover:bg-muted"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  const ref = useScrollReveal();
  const { ref: progressRef, progress } = useScrollProgress();
  const lineWidth = Math.min(100, progress * 200);
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveMobileMenu((current) =>
        current === mobileMenus.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPreviousMenu = () => {
    setActiveMobileMenu((current) =>
      current === 0 ? mobileMenus.length - 1 : current - 1
    );
  };

  const goToNextMenu = () => {
    setActiveMobileMenu((current) =>
      current === mobileMenus.length - 1 ? 0 : current + 1
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
            From traditional family gatherings to refined corporate hospitality
            and elegant social celebrations, every service is planned with
            thoughtful menus, graceful presentation, and warm Tamil hospitality.
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <div className="relative mx-auto max-w-md">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${activeMobileMenu * 100}%)`,
                }}
              >
                {mobileMenus.map((item) => (
                  <div key={item.title} className="w-full shrink-0 px-1">
                    <EventCard item={item} onViewMenu={setSelectedMenu} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goToPreviousMenu}
              className="absolute left-2 top-[42%] z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg ring-1 ring-border transition hover:bg-brand-gold hover:text-brand-green-dark"
              aria-label="Show previous service"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goToNextMenu}
              className="absolute right-2 top-[42%] z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg ring-1 ring-border transition hover:bg-brand-gold hover:text-brand-green-dark"
              aria-label="Show next service"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="mt-5 flex items-center justify-center gap-2">
              {mobileMenus.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveMobileMenu(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeMobileMenu === index
                      ? "w-8 bg-brand-gold"
                      : "w-2 bg-brand-gold/35"
                  }`}
                  aria-label={`Show ${item.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop original layout */}
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
              {familyMenus.map((item) => (
                <EventCard
                  key={item.title}
                  item={item}
                  onViewMenu={setSelectedMenu}
                />
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

              <EventCard item={premiumEvents[0]} onViewMenu={setSelectedMenu} />
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

              <EventCard item={premiumEvents[1]} onViewMenu={setSelectedMenu} />
            </div>
          </div>
        </div>
      </div>

      {selectedMenu && (
        <MenuPopup item={selectedMenu} onClose={() => setSelectedMenu(null)} />
      )}
    </section>
  );
}