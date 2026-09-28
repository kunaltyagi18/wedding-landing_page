"use client";

import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80",
    date: "September 12, 2026",
    category: "PLANNING GUIDE",
    title: "How to Choose Your Wedding Venue: 10 Questions You Must Ask",
    excerpt:
      "Selecting the right venue sets the tone for your entire celebration. From capacity and catering to lighting and parking — here's what to ask before you sign.",
  },
  {
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&q=80",
    date: "August 28, 2026",
    category: "DESIGN TRENDS",
    title: "Indian Wedding Decor Trends We're Absolutely Loving in 2026",
    excerpt:
      "From terracotta and dried botanicals to maximalist marigold installations — discover the palette and aesthetic choices defining celebrations this season.",
  },
  {
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=700&q=80",
    date: "August 10, 2026",
    category: "REAL WEDDINGS",
    title: "Sneha & Rohan's Palace Wedding in Udaipur: A Complete Story",
    excerpt:
      "Three days, five ceremonies, one unforgettable celebration. We take you through every detail of this breathtaking destination wedding by Lake Pichola.",
  },
];

export function Journal() {
  return (
    <section
      id="journal"
      className="scroll-mt-16 bg-cream py-20 lg:py-28"
      aria-label="From the Journal"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-[8vw]">
        {/* Label + heading */}
        <div className="reveal flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] tracking-[0.45em] text-gold">FROM THE JOURNAL</p>
            <div className="mt-3 h-px w-10 bg-gold/50" />
            <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-maroon-dark sm:text-5xl">
              Stories, Tips &amp; <em className="text-maroon">Inspiration.</em>
            </h2>
          </div>
          <p className="font-serif text-[14px] text-maroon-dark/60 sm:pb-2">
            Curated reads for every couple
          </p>
        </div>

        {/* Blog cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <article
              key={p.title}
              className="reveal group cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
              aria-label={p.title}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-maroon-dark/0 transition-all duration-300 group-hover:bg-maroon-dark/20" />
              </div>

              {/* Content */}
              <div className="mt-5 border-l-[2px] border-gold/30 pl-5 transition-all duration-300 group-hover:border-gold">
                <div className="flex items-center gap-3">
                  <p className="text-[9px] tracking-[0.35em] text-gold">{p.category}</p>
                  <span className="h-px w-4 bg-gold/30" />
                  <span className="flex items-center gap-1 text-[11px] text-maroon-dark/50">
                    <CalendarDays className="h-3 w-3" />
                    {p.date}
                  </span>
                </div>
                <h3 className="mt-2 font-serif text-[18px] leading-snug text-maroon-dark transition-colors duration-200 group-hover:text-maroon">
                  {p.title}
                </h3>
                <p className="mt-2 font-serif text-[13px] leading-relaxed text-maroon-dark/60">
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-serif text-[13px] text-maroon-dark/50 transition-all duration-200 group-hover:gap-2.5 group-hover:text-maroon">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
