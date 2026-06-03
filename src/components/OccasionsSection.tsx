import {
  Baby,
  BriefcaseBusiness,
  Cake,
  Gift,
  HeartHandshake,
  Home,
  PartyPopper,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Stories,
  StoriesContent,
  Story,
  StoryImage,
  StoryOverlay,
} from "@/components/ui/stories-carousel";

import babyShowerEvent from "@/assets/babyshower-event.jpg";
import birthdayEvent from "@/assets/birthday-event.jpg";
import corporateEvent from "@/assets/corporate-event.jpg";
import engagementEvent from "@/assets/engagement-event.jpg";
import getTogetherEvent from "@/assets/get-together-event.jpg";
import housewarmingEvent from "@/assets/housewarming-event.jpg";
import otherEvent from "@/assets/other-event.jpg";
import receptionEvent from "@/assets/reception-event.jpg";
import weddingEvent from "@/assets/wedding-event.jpg";

type OccasionItem = {
  title: string;
  description: string;
  image: string;
  icon: typeof Sparkles;
};

const occasions: OccasionItem[] = [
  {
    title: "Wedding",
    description:
      "Traditional and premium wedding menus planned around your rituals, guest count, and service style.",
    image: weddingEvent,
    icon: HeartHandshake,
  },
  {
    title: "Engagement",
    description:
      "Elegant catering for engagement ceremonies, family gatherings, and festive celebrations.",
    image: engagementEvent,
    icon: Gift,
  },
  {
    title: "Reception",
    description:
      "Refined buffet, counters, and serving arrangements for grand reception celebrations.",
    image: receptionEvent,
    icon: PartyPopper,
  },
  {
    title: "Baby Shower / Seemantham",
    description:
      "Traditional menus for Seemantham, Valaikappu, and meaningful family baby shower functions.",
    image: babyShowerEvent,
    icon: Baby,
  },
  {
    title: "Birthday Parties",
    description:
      "Customized menus and joyful food presentation for birthday celebrations of all sizes.",
    image: birthdayEvent,
    icon: Cake,
  },
  {
    title: "Get Together",
    description:
      "Comfortable catering for family reunions, friends’ gatherings, and private celebrations.",
    image: getTogetherEvent,
    icon: UsersRound,
  },
  {
    title: "Housewarming / Pooja",
    description:
      "Authentic vegetarian menus for grahapravesam, poojas, and traditional family rituals.",
    image: housewarmingEvent,
    icon: Home,
  },
  {
    title: "Corporate Events",
    description:
      "Professional catering for office gatherings, meetings, institutions, and executive events.",
    image: corporateEvent,
    icon: BriefcaseBusiness,
  },
  {
    title: "And Many More",
    description:
      "Every menu is customized based on your celebration, guests, tradition, and preferences.",
    image: otherEvent,
    icon: Sparkles,
  },
];

export default function OccasionsSection() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24"
    >
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-brand-green/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
          <p className="reveal-up mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Events We Cater
          </p>

          <h2 className="reveal-up mb-4 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Popular Celebrations We Cater to{" "}
            <span className="text-gradient-gold">And Many More</span>
          </h2>

          <p className="reveal-up mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            From weddings and engagements to baby showers, birthdays, corporate
            events, and traditional family rituals, NRK Catering creates
            customized menus based on your occasion, guest count, food
            preference, and service style.
          </p>
        </div>

        <div className="reveal-up">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="max-w-xl text-xs font-semibold uppercase tracking-[0.18em] text-brand-green-dark/70">
              Swipe to explore occasions
            </p>

            <p className="hidden text-sm text-muted-foreground sm:block">
              These are only some of the events we cater.
            </p>
          </div>

          <Stories
            opts={{
              align: "start",
              loop: false,
              dragFree: true,
            }}
          >
            <StoriesContent className="gap-3 pb-4 sm:gap-4">
              {occasions.map((occasion) => {
                const Icon = occasion.icon;

                return (
                  <Story
                    key={occasion.title}
                    className="aspect-[3/4] !w-[235px] rounded-[1.75rem] border border-brand-gold/15 bg-card shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:!w-[270px] md:!w-[300px]"
                  >
                    <StoryImage
                      src={occasion.image}
                      alt={occasion.title}
                      className="transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
                    <StoryOverlay className="h-28 from-black/60" />

                    <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-gold backdrop-blur-md">
                      Custom Menu
                    </div>

                    <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-brand-cream sm:p-5">
                      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md sm:h-12 sm:w-12">
                        <Icon className="h-5 w-5 text-brand-gold sm:h-6 sm:w-6" />
                      </div>

                      <h3 className="font-heading text-xl font-bold leading-tight sm:text-2xl">
                        {occasion.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-brand-cream/85 sm:text-sm">
                        {occasion.description}
                      </p>
                    </div>
                  </Story>
                );
              })}
            </StoriesContent>
          </Stories>
        </div>

        <div className="reveal-up mx-auto mt-7 max-w-3xl rounded-3xl border border-brand-gold/20 bg-brand-gold/10 p-5 text-center sm:mt-8 sm:p-6">
          <p className="font-heading text-lg font-bold text-brand-green-dark sm:text-xl">
            Not limited to these events.
          </p>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            These are some of the occasions we commonly cater for. Every menu
            can be customized based on your event type, guest count, tradition,
            food preference, service style, and budget.
          </p>
        </div>
      </div>
    </section>
  );
}