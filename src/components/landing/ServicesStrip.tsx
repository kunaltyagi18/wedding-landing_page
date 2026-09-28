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
      <div className="mx-auto grid max-w-[1400px] gap-6 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {items.map(({ icon: I, t, d }, i) => (
          <div key={t} className={`reveal flex items-start justify-center gap-5 px-4 ${i ? "lg:border-l lg:border-gold/30" : ""}`} style={{ transitionDelay: `${i * 100}ms` }}>
            <I className="mt-1 h-9 w-9 shrink-0 text-maroon" strokeWidth={1.2} />
            <div>
              <h3 className="font-serif text-[17px] text-maroon-dark">{t}</h3>
              <p className="mt-1 max-w-[170px] font-serif text-[13px] leading-snug text-maroon-dark/60">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
