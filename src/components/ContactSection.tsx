import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
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

const foodPreferences = ["Vegetarian", "Non-Vegetarian", "Both Veg & Non-Veg", "Not Sure Yet"];

type EnquiryForm = {
  name: string;
  phone: string;
  eventType: string;
  date: string;
  guestCount: string;
  location: string;
  foodPreference: string;
  requirements: string;
};

type EnquiryFormErrors = Partial<Record<keyof EnquiryForm, string>>;

export default function ContactSection() {
  const ref = useScrollReveal();

  const [form, setForm] = useState<EnquiryForm>({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    guestCount: "",
    location: "",
    foodPreference: "",
    requirements: "",
  });

  const [errors, setErrors] = useState<EnquiryFormErrors>({});
const [touched, setTouched] = useState<Partial<Record<keyof EnquiryForm, boolean>>>({});
  const today = new Date().toISOString().split("T")[0];

  const sanitizeFieldValue = (field: keyof EnquiryForm, value: string) => {
    switch (field) {
      case "name":
        return value
          .replace(/[^\p{L}\s]/gu, "")
          .replace(/\s{2,}/g, " ")
          .slice(0, 45);

      case "phone":
        return value.replace(/\D/g, "").slice(0, 10);

      case "guestCount":
        return value.replace(/\D/g, "").slice(0, 7);

      case "location":
        return value
          .replace(/[<>#$%^*_=+{}[\]|\\]/g, "")
          .replace(/\s{2,}/g, " ")
          .slice(0, 80);

      case "requirements":
        return value
          .replace(/[<>]/g, "")
          .replace(/\s{3,}/g, " ")
          .slice(0, 250);

      default:
        return value;
    }
  };

  const validateField = (field: keyof EnquiryForm, value: string) => {
    const trimmedValue = value.trim();

    switch (field) {
      case "name":
        if (!trimmedValue) return "Please enter your name.";
        if (trimmedValue.length < 2) return "Name should be at least 2 letters.";
        if (!/^[\p{L}\s]+$/u.test(trimmedValue)) {
          return "Name should contain letters only.";
        }
        return "";

      case "phone":
        if (!trimmedValue) return "Please enter your phone number.";
        if (!/^\d+$/.test(trimmedValue)) return "Phone number should contain digits only.";
        if (trimmedValue.length !== 10) return "Phone number must be exactly 10 digits.";
        if (!/^[6-9]\d{9}$/.test(trimmedValue)) {
          return "Please enter a valid Indian mobile number.";
        }
        return "";

      case "eventType":
        if (!trimmedValue) return "Please select an event type.";
        return "";

      case "date":
        if (trimmedValue && trimmedValue < today) return "Event date cannot be in the past.";
        return "";

      case "guestCount":
        if (!trimmedValue) return "Please enter expected guest count.";
        if (!/^\d+$/.test(trimmedValue)) return "Guest count should contain numbers only.";
        if (Number(trimmedValue) < 1) return "Guest count should be at least 1.";
        if (Number(trimmedValue) > 9999999) return "Guest count looks too high. Please check again.";
        return "";

      case "location":
        if (!trimmedValue) return "Please enter the event location.";
        if (trimmedValue.length < 2) return "Location should be at least 2 characters.";
        if (!/^[\p{L}\d\s,./-]+$/u.test(trimmedValue)) {
          return "Location contains unsupported characters.";
        }
        return "";

      case "foodPreference":
        if (!trimmedValue) return "Please select a food preference.";
        return "";

      case "requirements":
        if (trimmedValue.length > 250) {
          return "Requirements should be within 250 characters.";
        }
        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const nextErrors: EnquiryFormErrors = {};

    (Object.keys(form) as Array<keyof EnquiryForm>).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) {
        nextErrors[field] = error;
      }
    });

    setErrors(nextErrors);

    setTouched({
      name: true,
      phone: true,
      eventType: true,
      date: true,
      guestCount: true,
      location: true,
      foodPreference: true,
      requirements: true,
    });

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const message = [
      `Hello ${business.name}, I would like to enquire about catering service.`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Event Type: ${form.eventType}`,
      `Event Date: ${form.date || "Not mentioned"}`,
      `Guest Count: ${form.guestCount.trim()}`,
      `Location: ${form.location.trim()}`,
      `Food Preference: ${form.foodPreference}`,
      `Requirements: ${form.requirements.trim() || "Not mentioned"}`,
    ].join("\n");

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name as keyof EnquiryForm;
    const sanitizedValue = sanitizeFieldValue(field, e.target.value);

    setForm((prev) => ({ ...prev, [field]: sanitizedValue }));

    const error = validateField(field, sanitizedValue);

    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: error || undefined,
    }));
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name as keyof EnquiryForm;
    const error = validateField(field, form[field]);

    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: error || undefined,
    }));
  };
const getFieldClassName = (field: keyof EnquiryForm) =>
  `w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground transition focus:outline-none focus:ring-2 ${
    touched[field] && errors[field]
      ? "border-red-500 focus:ring-red-500/25"
      : "border-border focus:ring-brand-green/30"
  }`;
  return (
    <section id="contact" className="bg-muted/50 py-20 sm:py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-4">
        <div className="mb-12 text-center md:mb-16">
          <p className="reveal-up mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Get In Touch
          </p>
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
              <h3 className="mb-6 font-heading text-2xl font-bold text-foreground">
                Contact Details
              </h3>

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

          <form onSubmit={handleSubmit} noValidate className="reveal-right lg:col-span-3">
            <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-lg sm:p-6 md:p-8">
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getFieldClassName("name")}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Phone *
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getFieldClassName("phone")}
                    placeholder="10-digit mobile number"
                    inputMode="numeric"
                    maxLength={10}
                    autoComplete="tel"
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getFieldClassName("eventType")}
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {touched.eventType && errors.eventType && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">
                      {errors.eventType}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Event Date
                  </label>
                  <input
                    name="date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getFieldClassName("date")}
                  />
                  {touched.date && errors.date && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">{errors.date}</p>
                  )}
                </div>
              </div>

              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Guest Count *
                  </label>
                  <input
                    name="guestCount"
                    value={form.guestCount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getFieldClassName("guestCount")}
                    placeholder="e.g. 300"
                    inputMode="numeric"
                    maxLength={7}
                  />
                  {touched.guestCount && errors.guestCount && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">
                      {errors.guestCount}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Location *
                  </label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getFieldClassName("location")}
                    placeholder="City / venue"
                    autoComplete="address-level2"
                  />
                  {touched.location && errors.location && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">
                      {errors.location}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Food Preference *
                  </label>
                  <select
                    name="foodPreference"
                    value={form.foodPreference}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getFieldClassName("foodPreference")}
                  >
                    <option value="">Select preference</option>
                    {foodPreferences.map((preference) => (
                      <option key={preference} value={preference}>
                        {preference}
                      </option>
                    ))}
                  </select>
                  {touched.foodPreference && errors.foodPreference && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">
                      {errors.foodPreference}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Requirements
                </label>
                <textarea
                  name="requirements"
                  value={form.requirements}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  className={`${getFieldClassName("requirements")} resize-none`}
                  placeholder="Tell us about menu, service style, budget, timing, or any special request..."
                />
              </div>
<div className="mt-1.5 flex items-center justify-between gap-3">
  {touched.requirements && errors.requirements ? (
    <p className="text-xs font-medium text-red-600">{errors.requirements}</p>
  ) : (
    <span />
  )}

  <p className="text-xs text-muted-foreground">
    {form.requirements.length}/250
  </p>
</div>
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-bold text-brand-green-dark shadow-lg transition hover:scale-[1.02]"
              >
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