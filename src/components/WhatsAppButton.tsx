import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/config/business";

export default function WhatsAppButton() {
  return (
    <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-40 group sm:bottom-6 sm:right-6" aria-label="Chat on WhatsApp">
      <div className="relative">
        <div className="absolute -inset-3 rounded-full bg-brand-gold/25 blur-xl" />
        <div className="absolute inset-0 rounded-full bg-brand-green/30 animate-ping" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-green shadow-[0_0_30px_rgba(230,166,47,0.55),0_12px_30px_rgba(0,0,0,0.25)] ring-4 ring-brand-gold/30 transition-all hover:scale-110 hover:bg-brand-green-dark sm:h-16 sm:w-16">
          <MessageCircle className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7" />
        </div>
        <div className="absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100 sm:block">
          Chat with us
        </div>
      </div>
    </a>
  );
}
