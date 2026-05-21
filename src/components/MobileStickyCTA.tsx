import { Phone, FileText } from "lucide-react";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-[#0588C6]/30 bg-black/95 backdrop-blur-lg">
      <div className="grid grid-cols-2 gap-px">
        <a
          href="tel:8055149050"
          className="flex items-center justify-center gap-2 py-4 bg-[#0588C6] text-white font-bold text-sm"
        >
          <Phone className="h-4 w-4" />
          CALL NOW
        </a>
        <a
          href="#quote"
          className="flex items-center justify-center gap-2 py-4 bg-[#010305] text-white font-bold text-sm border-l border-[#0588C6]/30"
        >
          <FileText className="h-4 w-4" />
          FREE QUOTE
        </a>
      </div>
    </div>
  );
}
