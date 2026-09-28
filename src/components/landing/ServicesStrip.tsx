"use client";

import { Gem, Flower2, MapPin, Users } from "lucide-react";

const items = [
  { icon: Gem, t: "Full Wedding Planning", d: "End-to-end planning for a seamless celebration." },
  { icon: Flower2, t: "Design & Styling", d: "Bespoke decor and aesthetics that reflect you." },
  { icon: MapPin, t: "Destination Weddings", d: "Extraordinary celebrations in breathtaking locations." },
  { icon: Users, t: "Personalized Experiences", d: "Thoughtful details for you and your loved ones." },
];

export function ServicesStrip() {
  return (
    <section id="services" className="scroll-mt-16 border-y border-gold/20 bg-cream">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-4 gap-y-8 px-4 py-8 lg:grid-cols-4 lg:gap-0 lg:py-6">
        {items.map(({ icon: I, t, d }, i) => (
          <div key={t} className={`reveal flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-start sm:justify-center gap-3 sm:gap-5 sm:px-4 ${i ? "lg:border-l lg:border-gold/30" : ""}`} style={{ transitionDelay: `${i * 100}ms` }}>
            <I className="h-8 w-8 sm:mt-1 sm:h-9 sm:w-9 shrink-0 text-maroon" strokeWidth={1.2} />
            <div>
              <h3 className="font-serif text-[15px] sm:text-[17px] leading-tight text-maroon-dark">{t}</h3>
              <p className="mx-auto sm:mx-0 mt-1.5 max-w-[140px] sm:max-w-[170px] font-serif text-[12px] sm:text-[13px] leading-snug text-maroon-dark/60">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
