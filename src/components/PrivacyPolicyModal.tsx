import { X } from "lucide-react";
import { business } from "@/config/business";

type PrivacyPolicyModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function PrivacyPolicyModal({
  open,
  onClose,
}: PrivacyPolicyModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/65 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close privacy policy"
      />

      <div className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-brand-gold/30 bg-background shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="flex items-start justify-between gap-4 border-b border-border/70 bg-brand-gold/10 px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
              NRK Catering
            </p>

            <h2 className="mt-1 font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Privacy Policy
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Last updated: June 2026
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-brand-gold hover:text-brand-green-dark"
            aria-label="Close privacy policy"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[68vh] overflow-y-auto px-5 py-6 sm:px-7">
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                1. Information We Collect
              </h3>

              <p>
                When you contact {business.name}, we may collect details such as
                your name, phone number, email address, event date, event type,
                guest count, location, and catering requirements. This
                information is collected only when you voluntarily submit an
                enquiry through our website, WhatsApp, phone call, email, or
                social media.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                2. How We Use Your Information
              </h3>

              <p>
                We use your information to understand your catering needs,
                respond to enquiries, prepare customized menu suggestions,
                provide quotations, coordinate event details, and improve our
                services.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                3. WhatsApp, Phone, and Email Communication
              </h3>

              <p>
                By submitting an enquiry, you agree that {business.name} may
                contact you through WhatsApp, phone, or email regarding your
                catering request. We do not send unrelated promotional messages
                without your interest or consent.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                4. Sharing of Information
              </h3>

              <p>
                We do not sell or rent your personal information. Your details
                may only be shared with our internal team or trusted service
                partners when required to plan, prepare, or deliver catering
                services for your event.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                5. Website Analytics
              </h3>

              <p>
                Our website may use analytics tools such as Google Analytics to
                understand visitor traffic, page performance, and user
                interaction. This helps us improve the website experience and
                service visibility.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                6. Data Security
              </h3>

              <p>
                We take reasonable steps to protect the information shared with
                us. However, no online transmission or storage system can be
                guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                7. Your Choices
              </h3>

              <p>
                You may contact us to update, correct, or request deletion of
                your enquiry details. You may also ask us not to contact you for
                future follow-ups.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                8. Contact Us
              </h3>

              <p>
                For privacy-related questions, please contact us at{" "}
                <a
                  href={`mailto:${business.email}`}
                  className="font-semibold text-brand-green underline underline-offset-4"
                >
                  {business.email}
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${business.phoneDisplay.replace(/\s/g, "")}`}
                  className="font-semibold text-brand-green underline underline-offset-4"
                >
                  {business.phoneDisplay}
                </a>
                .
              </p>
            </section>

            <p className="rounded-2xl border border-brand-gold/20 bg-brand-gold/10 p-4 text-xs leading-relaxed text-muted-foreground">
              Note: This privacy policy is a general website privacy notice for
              NRK Catering. It can be updated as business requirements, website
              features, or legal requirements change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}