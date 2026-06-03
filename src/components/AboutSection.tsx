import { useScrollReveal, useParallax, useCountUp } from "@/hooks/useScrollReveal";
import heroSadhya from "@/assets/hero-sadhya.jpg";

function StatCounter({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const { ref, count } = useCountUp(target, 2000);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-[1rem] border border-brand-gold/25 bg-[#fffaf0]/85 px-2 py-3 text-center shadow-[0_10px_28px_rgba(66,53,27,0.08)] transition duration-500 hover:-translate-y-0.5 hover:border-brand-gold/45 sm:rounded-[1.35rem] sm:px-4 sm:py-5"
    >
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/80 to-transparent" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full bg-brand-gold/12 blur-2xl sm:h-20 sm:w-20" />

      <div className="relative z-10 font-heading text-[2rem] font-black leading-none tracking-tight text-brand-green-dark drop-shadow-[0_1px_0_rgba(255,255,255,0.55)] sm:text-5xl lg:text-[3.35rem]">
        {count}
        <span className="ml-0.5 sm:ml-1">{suffix}</span>
      </div>

      <div className="relative z-10 mx-auto mt-1.5 h-[2px] w-6 rounded-full bg-brand-gold/80 transition-all duration-500 group-hover:w-10 sm:mt-2 sm:w-8 sm:group-hover:w-12" />

      <div className="relative z-10 mt-1.5 text-[8px] font-extrabold uppercase leading-snug tracking-[0.1em] text-brand-green-dark/85 sm:mt-2 sm:text-[11px] md:text-xs">
        {label}
      </div>
    </div>
  );
}
export default function AboutSection() {
  const ref = useScrollReveal();
  const imageParallax = useParallax(-0.15);
  const decorParallax1 = useParallax(0.2);
  const decorParallax2 = useParallax(-0.25);

  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image with parallax */}
          <div className="reveal-left relative">
            <div
              ref={imageParallax}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src={heroSadhya}
                alt="Traditional South Indian meal"
                className="h-auto max-h-[360px] w-full object-contain sm:max-h-[420px] md:h-[500px] md:max-h-none md:object-cover"
                loading="lazy"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent md:from-foreground/30" />
            </div>
            {/* Parallax decorative accents */}
            <div ref={decorParallax1} className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 -z-10" />
            <div ref={decorParallax2} className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-brand-green/10 border border-brand-green/20 -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="reveal-up text-sm font-semibold tracking-widest uppercase text-brand-gold mb-3">
              Our Story
            </p>
            <h2 className="reveal-up font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Three Generations,{" "}
              <span className="text-gradient-gold">One Passion</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="reveal-up">
                NRK Catering began with the skill and dedication of a veteran cook, whose
                decades of experience in traditional South Indian cuisine shaped a legacy
                of unforgettable flavours. Every dish reflects years of practice, patience,
                and deep knowledge of traditional and authentic cooking.
              </p>

              <p className="reveal-up">
                Today, the same legacy is carried forward by the next generation, trained
                in reputed hotel management institutions and experienced in professional
                hospitality environments. This blend of{" "}
                <strong className="text-foreground">traditional culinary wisdom</strong>{" "}
                and{" "}
                <strong className="text-foreground">modern service standards</strong>{" "}
                defines the way we plan, prepare, and serve.
              </p>

              <p className="reveal-up">
                Based in Madurai and serving clients across Tamil Nadu, we bring warmth,
                discipline, elegant presentation, and the comfort of home-style tradition
                to every event. From intimate family gatherings to large corporate
                functions, our focus is simple: food that feels authentic, service that
                feels dependable, and celebrations that feel complete.
              </p>
            </div>

            {/* Animated stats */}
            <div className="reveal-up mx-auto mt-8 grid max-w-full grid-cols-3 gap-2 rounded-[1.4rem] border border-brand-gold/25 bg-gradient-to-br from-brand-gold/10 via-[#fffdf4] to-brand-green/5 p-2 shadow-[0_18px_45px_rgba(66,53,27,0.10)] sm:mt-10 sm:max-w-4xl sm:gap-3 sm:rounded-[1.8rem] sm:p-4">
              <StatCounter target={40} suffix="+" label="Years Experience" />
              <StatCounter target={800} suffix="+" label="Events Served" />
              <StatCounter target={100} suffix="%" label="Client Satisfaction" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
