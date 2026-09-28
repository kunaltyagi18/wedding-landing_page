import {
  CalendarCheck,
  Palette,
  Plane,
  PartyPopper,
  Hotel,
  Handshake,
} from "lucide-react";

const cards = [
  {
    icon: CalendarCheck,
    title: "Full Wedding Planning",
    desc: "From the first consultation to the final farewell, we orchestrate every detail of your celebration so you can simply enjoy the journey.",
  },
  {
    icon: Palette,
    title: "Design & Styling",
    desc: "Bespoke mandaps, floral installations and decor palettes crafted to reflect your personality, traditions and aesthetic vision.",
  },
  {
    icon: Plane,
    title: "Destination Weddings",
    desc: "Extraordinary celebrations in breathtaking locations — Udaipur palaces, Goan shores or the hills of Himachal — executed flawlessly.",
  },
  {
    icon: PartyPopper,
    title: "Pre-Wedding Events",
    desc: "Mehndi mornings, haldi ceremonies, sangeet nights and cocktail evenings designed with the same care as the big day itself.",
  },
  {
    icon: Hotel,
    title: "Guest Hospitality",
    desc: "Curated welcome kits, hotel blocks, airport transfers and guest itineraries — every family member feels genuinely looked after.",
  },
  {
    icon: Handshake,
    title: "Vendor Management",
    desc: "Access to our trusted network of photographers, caterers, artists and florists — negotiated, briefed and managed end-to-end.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-16 bg-cream py-20 lg:py-28"
      aria-label="Our Services"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-[8vw]">
        {/* Label + heading */}
        <div className="reveal text-center">
          <p className="text-[10px] tracking-[0.45em] text-gold">WHAT WE DO</p>
          <div className="mx-auto mt-3 h-px w-10 bg-gold/50" />
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-maroon-dark sm:text-5xl">
            Everything Your{" "}
            <em className="text-maroon">Celebration</em> Needs.
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-serif text-[15px] leading-snug text-maroon-dark/70">
            A complete suite of wedding services — thoughtfully designed, meticulously delivered.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal group relative border border-gold/20 bg-cream p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_8px_40px_rgba(184,134,59,0.15)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Gold top line accent */}
              <span className="absolute left-8 top-0 h-[2px] w-10 bg-gold transition-all duration-300 group-hover:w-16" />

              <Icon
                className="mb-5 h-9 w-9 text-gold transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.3}
              />
              <h3 className="font-serif text-xl text-maroon-dark">{title}</h3>
              <div className="mt-2 h-px w-8 bg-gold/40 transition-all duration-300 group-hover:w-12 group-hover:bg-gold" />
              <p className="mt-3 font-serif text-[14px] leading-relaxed text-maroon-dark/65">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
