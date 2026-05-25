import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Flower2,
  HandHeart,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import templeService from "@/assets/temple-service.jpg";
import prasadamService from "@/assets/prasadam-service.jpg";
import prasadamPongal from "@/assets/prasadam-pongal.jpg";

const highlights = [
  "Prasadam preparation",
  "Bulk quantity planning",
  "Clean packing support",
  "Traditional veg menus",
];

const prasadamImages = [
  {
    src: prasadamService,
    alt: "Traditional prasadam served in leaf bowl",
  },
  {
    src: prasadamPongal,
    alt: "Temple prasadam pongal prepared for devotional service",
  },
];

export default function DiningPackagesSection() {
  const ref = useScrollReveal();
  const [activePrasadamImage, setActivePrasadamImage] = useState(0);
  const [activeMobileCard, setActiveMobileCard] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePrasadamImage((current) =>
        current === prasadamImages.length - 1 ? 0 : current + 1
      );
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let timeoutId: number;

    const runMobileCardSequence = () => {
      setActiveMobileCard((current) => {
        const next = current === 1 ? 0 : 1;

        timeoutId = window.setTimeout(
          runMobileCardSequence,
          next === 1 ? 6500 : 4500
        );

        return next;
      });
    };

    timeoutId = window.setTimeout(runMobileCardSequence, 4500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const goToPreviousMobileCard = () => {
    setActiveMobileCard((current) => (current === 0 ? 1 : 0));
  };

  const goToNextMobileCard = () => {
    setActiveMobileCard((current) => (current === 1 ? 0 : 1));
  };

  const TempleCard = ({ compact = false }: { compact?: boolean }) => (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-brand-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.10)] ${
        compact
          ? "h-[640px]"
          : "h-full min-h-[420px] lg:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
      }`}
    >
      <img
        src={templeService}
        alt="Tamil Nadu temple festival service"
        className="h-full w-full object-cover object-center"

        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 md:p-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-black/35 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-peach backdrop-blur-sm sm:px-4 sm:text-xs">
          <Flower2 className="h-4 w-4" />
          Festival & Temple Work
        </div>

        <h3 className="font-heading text-2xl font-bold leading-tight text-brand-cream sm:text-3xl">
          Serving sacred occasions with discipline and respect
        </h3>

        <p className="mt-3 hidden max-w-xl text-sm leading-relaxed text-brand-cream/85 sm:block">
          From prasadam preparation to community food service, every order is
          handled with care for the occasion, the guests, and the traditional
          values behind the event.
        </p>
      </div>
    </div>
  );

  const PrasadamCard = ({ compact = false }: { compact?: boolean }) => (
    <div
      className={`flex flex-col justify-between rounded-[2rem] border border-brand-gold/20 bg-card shadow-[0_20px_50px_rgba(0,0,0,0.08)] ${
        compact ? "h-[640px] p-4" : "h-full p-7 md:p-9"
      }`}
    >
      <div>
        <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-brand-gold/20 shadow-[0_12px_32px_rgba(0,0,0,0.08)] sm:mb-6">
          <div
            className={`relative w-full overflow-hidden ${
              compact ? "h-40" : "h-72 md:h-80"
            }`}
          >
            {prasadamImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                  index === activePrasadamImage
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                } ${index === 0 ? "object-[center_42%]" : "object-center"}`}
                loading="lazy"
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {prasadamImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActivePrasadamImage(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activePrasadamImage
                      ? "w-7 bg-brand-gold"
                      : "w-2 bg-white/70"
                  }`}
                  aria-label={`Show prasadam image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/15 sm:h-14 sm:w-14">
            <HandHeart className="h-5 w-5 text-brand-gold sm:h-6 sm:w-6" />
          </div>

          <h3 className="font-heading text-xl font-bold leading-tight text-foreground sm:text-3xl">
            Chithirai Thiruvizha Prasadam Supply
          </h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
          Prasadam and traditional vegetarian food for temple festivals, poojas,
          annadhanam, and devotional gatherings.
        </p>

        <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex min-h-[58px] items-center gap-2 rounded-2xl border border-border/60 bg-background/70 p-2.5 text-[11px] leading-snug text-muted-foreground sm:min-h-0 sm:items-start sm:gap-3 sm:p-4 sm:text-sm"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 rounded-3xl border border-brand-gold/20 bg-brand-gold/10 p-3 sm:mt-8 sm:p-5">
        <div className="mb-2 flex items-center gap-2">
          <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 sm:h-11 sm:w-11">
            <UtensilsCrossed className="h-5 w-5 text-brand-gold" />
          </div>

          <h4 className="font-heading text-base font-bold leading-tight text-foreground sm:text-lg">
            Planned for devotion, prepared with care
          </h4>
        </div>

        <p className="hidden text-sm leading-relaxed text-muted-foreground sm:block">
          Menu, quantity, packing, and serving style can be customized based on
          the festival, location, guest count, and devotional requirements.
        </p>

        <a
          href="#contact"
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-brand-green-dark sm:mt-5 sm:py-3"
        >
          <Sparkles className="h-4 w-4" />
          Enquire for Festival Service
        </a>
      </div>
    </div>
  );

  return (
    <section
      id="packages"
      ref={ref}
      className="relative overflow-hidden bg-background py-12 sm:py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-gold/10" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-brand-green/10" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 md:mb-16">
          <p className="reveal-up mb-3 text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Our Special Festival Service
          </p>

          <h2 className="reveal-up mb-4 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Prasadam & Festival Catering with{" "}
            <span className="text-gradient-gold">Devotional Care</span>
          </h2>

          <p className="reveal-up mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            During auspicious festivals such as Chithirai Thiruvizha, temple
            functions, poojas, and devotional gatherings, NRK Catering supports
            families and communities with prasadam preparation, traditional
            vegetarian food, and respectful serving arrangements.
          </p>
        </div>

        <div className="reveal-up lg:hidden">
          <div className="relative mx-auto max-w-sm overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${activeMobileCard * 100}%)`,
              }}
            >
              <div className="w-full shrink-0 px-1">
                <TempleCard compact />
              </div>

              <div className="w-full shrink-0 px-1">
                <PrasadamCard compact />
              </div>
            </div>

            <button
              type="button"
              onClick={goToPreviousMobileCard}
              className="absolute left-3 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/25 text-brand-green-dark shadow-sm backdrop-blur-sm transition hover:bg-brand-gold/80 hover:text-brand-green-dark"
              aria-label="Show previous festival card"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goToNextMobileCard}
              className="absolute right-3 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/25 text-brand-green-dark shadow-sm backdrop-blur-sm transition hover:bg-brand-gold/80 hover:text-brand-green-dark"
              aria-label="Show next festival card"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="mt-5 flex items-center justify-center gap-2">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveMobileCard(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeMobileCard === index
                      ? "w-8 bg-brand-gold"
                      : "w-2 bg-brand-gold/35"
                  }`}
                  aria-label={`Show festival card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden items-stretch gap-6 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="reveal-left">
            <TempleCard />
          </div>

          <div className="reveal-right">
            <PrasadamCard />
          </div>
        </div>
      </div>
    </section>
  );
}