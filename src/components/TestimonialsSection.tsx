import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  PlayCircle,
  Star,
} from "lucide-react";

const testimonials = [
  {
    title: "S. Vellachamy Nadar College Event",
    subtitle: "Convocation Day Catering",
    caption:
      "A large college event handled with organized planning, professional service, and memorable food presentation.",
    rating: 5,
    reels: [
      "https://www.instagram.com/reel/DOvdzV5EhmC/",
      "https://www.instagram.com/reel/DQY9hIvkpzE/",
      "https://www.instagram.com/reel/DRXFW87ktfL/",
    ],
  },
  {
    title: "Wedding Couple Review",
    subtitle: "Wedding Catering Review",
    caption:
      "A heartfelt review from the couple, sharing their wedding catering experience with NRK Catering.",
    rating: 5,
    reels: ["https://www.instagram.com/reel/DQ1Zq18Ep5S/"],
  },
  {
    title: "Client Review",
    subtitle: "Real Client Feedback",
    caption:
      "A real client review reflecting the food quality, service, and overall event experience.",
    rating: 5,
    reels: ["https://www.instagram.com/reel/DTFPHCHEVWG/"],
  },
  {
    title: "LIC Event Testimonial",
    subtitle: "Corporate Event Catering",
    caption:
      "Professional catering service for a corporate event, handled with punctuality, neat setup, and dependable execution.",
    rating: 5,
    reels: [
      "https://www.instagram.com/reel/DUXRQmSkbIf/",
      "https://www.instagram.com/reel/DVswOi7karJ/",
    ],
  },
  {
    title: "Family Wedding Review",
    subtitle: "Honest Family / Relative Review",
    caption:
      "An honest wedding review from the family, sharing their satisfaction with the food and service.",
    rating: 5,
    reels: [
      "https://www.instagram.com/reel/DWguNb7EQfl/",
      "https://www.instagram.com/reel/DXTZaPNEQgF/",
    ],
  },
];

export default function TestimonialsSection() {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [activeReel, setActiveReel] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeTestimonial = testimonials[current];
  const activeReelUrl =
    activeTestimonial.reels[activeReel] ?? activeTestimonial.reels[0];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      const hasMoreReels = activeReel < activeTestimonial.reels.length - 1;

      if (hasMoreReels) {
        setActiveReel((reel) => reel + 1);
        return;
      }

      setCurrent((testimonial) =>
        testimonial === testimonials.length - 1 ? 0 : testimonial + 1
      );
      setActiveReel(0);
    }, activeTestimonial.reels.length > 1 ? 5200 : 6200);

    return () => window.clearTimeout(timer);
  }, [current, activeReel, activeTestimonial.reels.length, isPaused]);

  const goToTestimonial = (index: number) => {
    setCurrent(index);
    setActiveReel(0);
  };

  const prev = () => {
    setCurrent((testimonial) =>
      testimonial === 0 ? testimonials.length - 1 : testimonial - 1
    );
    setActiveReel(0);
  };

  const next = () => {
    setCurrent((testimonial) =>
      testimonial === testimonials.length - 1 ? 0 : testimonial + 1
    );
    setActiveReel(0);
  };

  const prevReel = () => {
    setActiveReel((reel) =>
      reel === 0 ? activeTestimonial.reels.length - 1 : reel - 1
    );
  };

  const nextReel = () => {
    setActiveReel((reel) =>
      reel === activeTestimonial.reels.length - 1 ? 0 : reel + 1
    );
  };

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-muted/50 py-14 sm:py-24 md:py-32"
    >
      <div ref={ref} className="container mx-auto px-4">
        <div className="mb-8 text-center md:mb-16">
          <p className="reveal-up mb-3 text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Client Love
          </p>

          <h2 className="reveal-up mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Real <span className="text-gradient-gold">Testimonials</span>
          </h2>

          <p className="reveal-up mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Watch real customer reviews, event highlights, and celebration
            moments from our catering services.
          </p>
        </div>

        <div
          className="reveal-up mx-auto max-w-6xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {testimonials.map((item, index) => {
                const selectedReel = index === current ? activeReel : 0;
                const reelUrl = item.reels[selectedReel] ?? item.reels[0];

                return (
                  <div
                    key={item.title}
                    className="w-full shrink-0 px-1 sm:px-3"
                  >
                    <div className="grid overflow-hidden rounded-[2rem] border border-brand-gold/20 bg-card shadow-[0_22px_65px_rgba(0,0,0,0.10)] lg:grid-cols-[0.92fr_1.08fr]">
                      <div className="relative bg-background p-3 sm:p-5">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-green/10" />

                        <div className="relative z-10 rounded-[1.5rem] border border-brand-gold/15 bg-white p-1.5 shadow-inner sm:p-2">
                          <div className="relative mx-auto h-[500px] max-w-[360px] overflow-hidden rounded-[1.25rem] bg-white sm:h-[620px] sm:max-w-[390px] lg:h-[640px]">
                            <iframe
                              key={reelUrl}
                              src={`${reelUrl}embed`}
                              title={`${item.title} Instagram preview`}
                              className="h-full w-full border-0 bg-white"
                              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {item.reels.length > 1 && (
                          <div className="relative z-10 mt-3 flex items-center justify-center gap-3 sm:mt-4">
                            <button
                              type="button"
                              onClick={prevReel}
                              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/75 text-brand-green-dark shadow-sm backdrop-blur-sm transition hover:bg-brand-gold/80"
                              aria-label="Previous Reel"
                            >
                              <ChevronLeft className="h-5 w-5" />
                            </button>

                            <div className="flex gap-2">
                              {item.reels.map((_, reelIndex) => (
                                <button
                                  key={reelIndex}
                                  type="button"
                                  onClick={() => {
                                    setCurrent(index);
                                    setActiveReel(reelIndex);
                                  }}
                                  className={`h-9 w-9 rounded-2xl border text-xs font-bold transition sm:h-10 sm:w-10 ${
                                    index === current &&
                                    activeReel === reelIndex
                                      ? "border-brand-gold bg-brand-gold text-brand-green-dark shadow-md"
                                      : "border-border bg-white text-muted-foreground hover:border-brand-gold/50"
                                  }`}
                                  aria-label={`Show preview ${reelIndex + 1}`}
                                >
                                  {reelIndex + 1}
                                </button>
                              ))}
                            </div>

                            <button
                              type="button"
                              onClick={nextReel}
                              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/75 text-brand-green-dark shadow-sm backdrop-blur-sm transition hover:bg-brand-gold/80"
                              aria-label="Next Reel"
                            >
                              <ChevronRight className="h-5 w-5" />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col justify-between p-5 sm:p-8 md:p-10">
                        <div>
                          <div className="mb-4 flex justify-center gap-1 lg:mb-5 lg:justify-start">
                            {Array.from({ length: item.rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5 fill-brand-gold text-brand-gold"
                              />
                            ))}
                          </div>

                          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/25 bg-brand-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
                            <Instagram className="h-4 w-4" />
                            Real Preview
                          </div>

                          <h3 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm font-semibold text-brand-gold">
                            {item.subtitle}
                          </p>

                          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {item.caption}
                          </p>

                          <div className="mt-6 flex items-center gap-2">
                            {item.reels.map((_, reelIndex) => (
                              <button
                                key={reelIndex}
                                type="button"
                                onClick={() => {
                                  setCurrent(index);
                                  setActiveReel(reelIndex);
                                }}
                                className={`h-2 rounded-full transition-all ${
                                  index === current && activeReel === reelIndex
                                    ? "w-8 bg-brand-gold"
                                    : "w-2 bg-brand-gold/35"
                                }`}
                                aria-label={`Show reel ${reelIndex + 1}`}
                              />
                            ))}
                          </div>
                        </div>

                        <a
                          href={reelUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-brand-green-dark sm:w-auto"
                        >
                          <PlayCircle className="h-4 w-4" />
                          Open on Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-[39%] z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/70 text-brand-green-dark shadow-sm backdrop-blur-sm transition hover:bg-brand-gold/80 sm:top-[43%]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-[39%] z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/70 text-brand-green-dark shadow-sm backdrop-blur-sm transition hover:bg-brand-gold/80 sm:top-[43%]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToTestimonial(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === current ? "w-8 bg-brand-gold" : "w-2.5 bg-border"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}