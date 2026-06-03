import { useState } from "react";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import nrkLogo from "@/assets/nrk-logo.png";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { business, buildWhatsAppLink } from "@/config/business";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = ["Family Events", "Corporate Catering", "Social Events"];

export default function Footer() {
const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <footer className="bg-foreground py-14 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="relative inline-flex">
                <span className="absolute inset-0 rounded-full " />
                <img
                  src={nrkLogo}
                  alt="NRK Catering"
                  className="h-12 w-auto object-contain brightness-110 drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)] sm:h-14 lg:h-16"
                />
              </span>
              <span className="font-heading text-lg font-bold text-brand-cream">{business.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-brand-cream/70">{business.serviceArea}</p>
            <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 px-4 py-2 text-xs font-bold text-brand-gold transition hover:bg-brand-gold/10">
              <Instagram className="h-4 w-4" /> Follow on Instagram
            </a>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-bold text-brand-peach">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-brand-cream/70 transition-colors hover:text-brand-gold">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-bold text-brand-peach">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => <li key={s} className="text-sm text-brand-cream/70">{s}</li>)}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-bold text-brand-peach">Contact</h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-brand-cream/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <span>{business.location}</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-brand-cream/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <span>{business.phoneDisplay}</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-brand-cream/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <span className="break-all">{business.email}</span>
              </div>

              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-brand-cream/70 transition-colors hover:text-brand-gold"
              >
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <span>Instagram</span>
              </a>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full max-w-[180px] items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-colors hover:bg-brand-green-dark"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-cream/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-xs text-brand-cream/50">
              © {new Date().getFullYear()} {business.name}. All rights reserved.
            </p>
<button
  type="button"
  onClick={() => setPrivacyOpen(true)}
  className="text-sm text-brand-cream/70 transition hover:text-brand-gold"
>
  Privacy Policy
</button>
            <div className="flex flex-col items-center gap-1 md:items-end">
              <p className="text-xs text-brand-cream/50">
                Traditional taste, premium service, and memorable catering for every celebration.
              </p>

              <p className="text-[11px] text-brand-cream/40">
                Website crafted by{" "}
                <a
                  href="https://your-portfolio-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-gold/80 transition hover:text-brand-gold"
                >
                  Dharani Perumal Samy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <PrivacyPolicyModal
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </footer>
  );
}
