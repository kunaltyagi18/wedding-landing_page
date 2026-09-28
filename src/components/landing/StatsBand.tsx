import { go } from "./Navbar";

const stats = [["200+", "Happy Families"], ["50+", "Destination Weddings"], ["4.9★", "Client Satisfaction"]];

export function StatsBand() {
  return (
    <section id="glimpse" className="scroll-mt-16 bg-maroon-dark text-cream">
      <div className="reveal mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-[12vw]">
        <div>
          <p className="text-[10px] tracking-[0.4em] text-cream/80">A GLIMPSE</p>
          <h2 className="mt-2 font-serif text-3xl">More Than Events, We Craft <em className="text-gold">Memories.</em></h2>
        </div>
        <div className="flex flex-wrap gap-6 lg:gap-0">
          {stats.map(([n, l]) => (
            <div key={l} className="border-gold/40 lg:border-l lg:px-7">
              <p className="font-serif text-2xl text-gold">{n}</p>
              <p className="font-serif text-sm text-cream/80">{l}</p>
            </div>
          ))}
        </div>
        <button onClick={() => go("gallery")} className="self-start font-serif text-[15px] text-cream transition hover:text-gold focus-visible:outline-none focus-visible:text-gold active:opacity-70 lg:self-auto">
          View Full Gallery →
        </button>
      </div>
    </section>
  );
}
