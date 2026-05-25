import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { business, buildWhatsAppLink } from "@/config/business";

const eventTypes = [
  "Wedding",
  "Reception",
  "Engagement",
  "Banana Leaf Dining",
  "Housewarming / Pooja",
  "Birthday / Family Function",
  "Corporate Event",
  "Packed Meals / Bulk Order",
  "Other",
];

export default function ContactSection() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    guestCount: "",
    location: "",
    foodPreference: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Hello ${business.name}, I would like to enquire about catering service.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Event Type: ${form.eventType || "Not selected"}`,
      `Event Date: ${form.date || "Not mentioned"}`,
      `Guest Count: ${form.guestCount || "Not mentioned"}`,
      `Location: ${form.location || "Not mentioned"}`,
      `Food Preference: ${form.foodPreference || "Not mentioned"}`,
      `Requirements: ${form.requirements || "Not mentioned"}`,
    ].join("\n");

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-muted/50 py-20 sm:py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-4">
        <div className="mb-12 text-center md:mb-16">
          <p className="reveal-up mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">Get In Touch</p>
          <h2 className="reveal-up mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Plan Your <span className="text-gradient-gold">Perfect Catering</span>
          </h2>
          <p className="reveal-up mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Fill the details below and it will open a ready-to-send WhatsApp enquiry message for faster lead conversion.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="reveal-left rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
              <h3 className="mb-6 font-heading text-2xl font-bold text-foreground">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green/10">
                    <Phone className="h-5 w-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-heading font-bold text-foreground">Call Us</h4>
                    <p className="text-sm text-muted-foreground">{business.phoneDisplay}</p>
                    <p className="text-sm text-muted-foreground">{business.phoneAltDisplay}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green/10">
                    <MapPin className="h-5 w-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-heading font-bold text-foreground">Location</h4>
                    <p className="text-sm text-muted-foreground">{business.location}</p>

                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green/10">
                    <Mail className="h-5 w-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-heading font-bold text-foreground">Email</h4>
                    <p className="break-all text-sm text-muted-foreground">{business.email}</p>
                  </div>
                </div>
              </div>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-brand-green-dark"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal-right lg:col-span-3">
            <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-lg sm:p-6 md:p-8">
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/30" placeholder="Your full name" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Phone *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/30" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Event Type</label>
                  <select name="eventType" value={form.eventType} onChange={handleChange} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/30">
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Event Date</label>
                  <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/30" />
                </div>
              </div>

              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Guest Count</label>
                  <input name="guestCount" value={form.guestCount} onChange={handleChange} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/30" placeholder="e.g. 300" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Location</label>
                  <input name="location" value={form.location} onChange={handleChange} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/30" placeholder="City / venue" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Food Preference</label>
                  <input name="foodPreference" value={form.foodPreference} onChange={handleChange} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/30" placeholder="Veg / Non-veg" />
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-1.5 block text-sm font-medium text-foreground">Requirements</label>
                <textarea name="requirements" value={form.requirements} onChange={handleChange} rows={5} className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/30" placeholder="Tell us about menu, service style, budget, timing, or any special request..." />
              </div>

              <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-bold text-brand-green-dark shadow-lg transition hover:scale-[1.02]">
                <Send className="h-4 w-4" />
                Send Enquiry via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
