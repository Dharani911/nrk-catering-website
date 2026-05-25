import { useEffect, useState } from "react";
import {
  useScrollReveal,
  useScrollProgress,
} from "@/hooks/useScrollReveal";
import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Instagram,
  PauseCircle,
  PlayCircle,
  X,
} from "lucide-react";
import { business } from "@/config/business";

import weddingEvent from "@/assets/gallery/wedding-event.mp4";
import weddingEventPoster from "@/assets/gallery/wedding-event-poster.jpg";
import licEvent from "@/assets/gallery/lic-event.mp4";
import licEventPoster from "@/assets/gallery/lic-event-poster.jpg";
import neeyamoEvent from "@/assets/gallery/neeyamo-event.mp4";
import neeyamoEventPoster from "@/assets/gallery/neeyamo-event-poster.jpg";
import bniEvent from "@/assets/gallery/bni-event.mp4";
import bniEventPoster from "@/assets/gallery/bni-event-poster.jpg";
import serviceMoments from "@/assets/gallery/service-moments.mp4";
import serviceMomentsPoster from "@/assets/gallery/service-moments-poster.jpg";
import vadiveluFamilyEvent from "@/assets/gallery/vadivelu-family-event.jpg";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  type: "video" | "image";
  poster?: string;
};

const items: GalleryItem[] = [
  {
    src: weddingEvent,
    poster: weddingEventPoster,
    alt: "Wedding event catering highlight",
    category: "Wedding",
    type: "video",
  },
  {
    src: licEvent,
    poster: licEventPoster,
    alt: "LIC of India catering event",
    category: "Corporate",
    type: "video",
  },
  {
    src: neeyamoEvent,
    poster: neeyamoEventPoster,
    alt: "Neeyamo corporate catering event",
    category: "Corporate",
    type: "video",
  },
  {
    src: bniEvent,
    poster: bniEventPoster,
    alt: "BNI Madurai and Sivagangai Mega Members Day",
    category: "Corporate",
    type: "video",
  },
  {
    src: serviceMoments,
    poster: serviceMomentsPoster,
    alt: "NRK Catering service moments",
    category: "Service",
    type: "video",
  },
  {
    src: vadiveluFamilyEvent,
    alt: "Family event with Vaigaipuyal Vadivelu sir",
    category: "Celebrity Event",
    type: "image",
  },
];

export default function GallerySection() {
  const ref = useScrollReveal();
  const { ref: progressRef, progress } = useScrollProgress();

  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const categories = [
    "All",
    ...Array.from(new Set(items.map((item) => item.category))),
  ];

  const filtered =
    filter === "All" ? items : items.filter((item) => item.category === filter);

  const activeItem = filtered[activeIndex] ?? filtered[0];

  useEffect(() => {
    setActiveIndex(0);
    setPlayingIndex(null);
  }, [filter]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const updateScreenSize = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateScreenSize();
    mediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    if (filtered.length <= 1) return;
    if (playingIndex !== null) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current === filtered.length - 1 ? 0 : current + 1
      );
    }, 5200);

    return () => window.clearInterval(timer);
  }, [filtered.length, playingIndex]);

  const getOriginalIndex = (item: GalleryItem) => items.indexOf(item);

  const goToPrevious = () => {
    setPlayingIndex(null);
    setActiveIndex((current) =>
      current === 0 ? filtered.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setPlayingIndex(null);
    setActiveIndex((current) =>
      current === filtered.length - 1 ? 0 : current + 1
    );
  };

  const openLightbox = (item: GalleryItem) => {
    setPlayingIndex(null);
    setLightbox(getOriginalIndex(item));
  };

  const navigateLightbox = (direction: number) => {
    if (lightbox === null) return;

    const currentItem = items[lightbox];
    const currentIndex = filtered.indexOf(currentItem);
    const safeIndex = currentIndex === -1 ? 0 : currentIndex;
    const nextIndex =
      (safeIndex + direction + filtered.length) % filtered.length;

    setLightbox(getOriginalIndex(filtered[nextIndex]));
  };

  const getCircularOffset = (index: number) => {
    const total = filtered.length;
    let offset = index - activeIndex;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    return offset;
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-background py-14 sm:py-20 md:py-32"
      ref={progressRef}
    >
      <div
        className="absolute right-0 top-0 h-1 bg-gradient-warm transition-none"
        style={{ width: `${Math.min(100, progress * 200)}%` }}
      />

      <div ref={ref} className="container mx-auto px-4">
        <div className="mb-8 text-center md:mb-12">
          <p className="reveal-up mb-3 text-xs font-semibold uppercase tracking-widest text-brand-gold sm:text-sm">
            Our Work
          </p>

          <h2 className="reveal-up mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Real Event <span className="text-gradient-gold">Gallery</span>
          </h2>

          <p className="reveal-up mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Watch real wedding, corporate, and catering service moments from
            our completed events.
          </p>
        </div>

        <div className="reveal-up">
          <div
            className="relative mx-auto h-[560px] max-w-7xl overflow-hidden rounded-[2.8rem] border border-brand-gold/20 bg-gradient-to-b from-brand-cream/30 via-background to-muted/30 shadow-[0_34px_110px_rgba(0,0,0,0.14)] sm:h-[620px] lg:h-[760px]"
            style={{ perspective: "2200px" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(230,166,47,0.22),transparent_34%),radial-gradient(circle_at_bottom,rgba(20,83,45,0.16),transparent_38%)]" />

            <div
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              {filtered.map((item, index) => {
                const offset = getCircularOffset(index);
                const absOffset = Math.abs(offset);
                const isActive = offset === 0;
                const isVisible = absOffset <= 2;
                const isPlaying =
                  playingIndex === index && item.type === "video";

                const translateX = isDesktop ? offset * 360 : offset * 132;
                const translateZ = isActive
                  ? isDesktop
                    ? 230
                    : 150
                  : -absOffset * 135;
                const rotateY = offset * -32;
                const scale = isActive
                  ? isDesktop
                    ? 1.08
                    : 1
                  : 1 - absOffset * 0.14;
                const opacity = isVisible ? 1 - absOffset * 0.22 : 0;
                const zIndex = 40 - absOffset;

                return (
                  <div
                    key={item.alt}
                    className="absolute left-1/2 top-1/2 h-[430px] w-[280px] overflow-hidden rounded-[2rem] border border-brand-gold/20 bg-card shadow-[0_26px_70px_rgba(0,0,0,0.22)] transition-all duration-700 ease-out sm:h-[480px] sm:w-[320px] lg:h-[620px] lg:w-[430px] lg:rounded-[2.4rem] lg:shadow-[0_34px_95px_rgba(0,0,0,0.26)]"
                    style={{
                      transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                      zIndex,
                      pointerEvents: isVisible ? "auto" : "none",
                    }}
                  >
                    <div className="relative h-full w-full bg-black">
                      {item.type === "video" ? (
                        <>
                          <video
                            key={item.src}
                            src={item.src}
                            poster={item.poster}
                            className="h-full w-full object-cover"
                            controls={isPlaying}
                            playsInline
                            preload="metadata"
                            autoPlay={isPlaying}
                          />

                          {!isPlaying && (
                            <button
                              type="button"
                              onClick={() => {
                                if (!isActive) {
                                  setPlayingIndex(null);
                                  setActiveIndex(index);
                                  return;
                                }

                                setPlayingIndex(index);
                              }}
                              className="absolute inset-0 flex items-center justify-center bg-black/25"
                              aria-label="Play gallery video"
                            >
                              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-brand-gold backdrop-blur-md ring-1 ring-white/35 transition hover:scale-105 hover:bg-brand-gold hover:text-brand-green-dark lg:h-24 lg:w-24">
                                <PlayCircle className="h-11 w-11 lg:h-13 lg:w-13" />
                              </span>
                            </button>
                          )}

                          {isPlaying && (
                            <button
                              type="button"
                              onClick={() => setPlayingIndex(null)}
                              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/35 text-brand-gold backdrop-blur-md"
                              aria-label="Pause gallery video"
                            >
                              <PauseCircle className="h-6 w-6" />
                            </button>
                          )}
                        </>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            isActive
                              ? openLightbox(item)
                              : setActiveIndex(index)
                          }
                          className="h-full w-full"
                          aria-label="Open gallery image"
                        >
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      )}

                      {!isPlaying && (
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent p-5 lg:p-7">
                          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-black/35 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-peach backdrop-blur-sm">
                            {item.type === "video" ? (
                              <PlayCircle className="h-3.5 w-3.5" />
                            ) : (
                              <ImageIcon className="h-3.5 w-3.5" />
                            )}
                            {item.category}
                          </div>

                          <h3 className="font-heading text-xl font-bold leading-tight text-brand-cream sm:text-2xl lg:text-3xl">
                            {item.alt}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {filtered.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 z-50 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/70 text-brand-green-dark shadow-sm backdrop-blur-sm transition hover:bg-brand-gold/90 lg:left-8 lg:h-12 lg:w-12"
                  aria-label="Show previous gallery item"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 z-50 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/70 text-brand-green-dark shadow-sm backdrop-blur-sm transition hover:bg-brand-gold/90 lg:right-8 lg:h-12 lg:w-12"
                  aria-label="Show next gallery item"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          <div className="mx-auto mt-6 max-w-xl text-center lg:mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
              {activeItem?.category}
            </p>

            <h3 className="mt-2 font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              {activeItem?.alt}
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {activeItem?.type === "video"
                ? "Tap the center card to play the video here. Use the arrows to move through the gallery."
                : "Tap the center card to view the photo larger. Use the arrows to move through the gallery."}
            </p>

            <div className="mt-4 flex items-center justify-center gap-1.5">
              {filtered.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setPlayingIndex(null);
                    setActiveIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-8 bg-brand-gold"
                      : "w-2 bg-brand-gold/35"
                  }`}
                  aria-label={`Show gallery item ${index + 1}`}
                />
              ))}
            </div>

            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-brand-green-dark"
            >
              <Instagram className="h-4 w-4" />
              View More on Instagram
            </a>
          </div>
        </div>
      </div>

      {lightbox !== null && items[lightbox] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4 backdrop-blur-sm animate-fade-in-slow"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 z-10 rounded-full bg-background/20 p-2 backdrop-blur-sm transition-colors hover:bg-background/30"
            onClick={() => setLightbox(null)}
            aria-label="Close gallery preview"
          >
            <X className="h-6 w-6 text-brand-cream" />
          </button>

          <button
            type="button"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/20 p-3 backdrop-blur-sm transition-colors hover:bg-background/30 sm:left-6"
            onClick={(event) => {
              event.stopPropagation();
              navigateLightbox(-1);
            }}
            aria-label="Previous gallery item"
          >
            <ChevronLeft className="h-6 w-6 text-brand-cream" />
          </button>

          <button
            type="button"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/20 p-3 backdrop-blur-sm transition-colors hover:bg-background/30 sm:right-6"
            onClick={(event) => {
              event.stopPropagation();
              navigateLightbox(1);
            }}
            aria-label="Next gallery item"
          >
            <ChevronRight className="h-6 w-6 text-brand-cream" />
          </button>

          {items[lightbox].type === "video" ? (
            <video
              src={items[lightbox].src}
              poster={items[lightbox].poster}
              className="max-h-[86vh] max-w-full rounded-2xl object-contain animate-scale-in"
              controls
              playsInline
              autoPlay
              preload="metadata"
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              src={items[lightbox].src}
              alt={items[lightbox].alt}
              className="max-h-[86vh] max-w-full rounded-2xl object-contain animate-scale-in"
              onClick={(event) => event.stopPropagation()}
            />
          )}

          <div className="absolute bottom-6 left-1/2 w-[92%] max-w-md -translate-x-1/2 text-center animate-fade-in">
            <p className="text-sm font-semibold text-brand-cream">
              {items[lightbox].alt}
            </p>

            <p className="mt-1 text-xs text-brand-peach">
              {items[lightbox].category}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}