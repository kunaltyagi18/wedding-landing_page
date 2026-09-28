"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Ananta Sutra turned our dream wedding into a reality that surpassed every expectation. Their attention to detail, calm presence and creative vision made us feel truly cared for from day one. Our families still talk about it.",
    name: "Priya & Arjun Mehra",
    city: "New Delhi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote:
      "We chose a destination wedding in Udaipur and were initially worried about coordinating everything remotely. Ananta Sutra handled every vendor, every ceremony, every guest query — flawlessly. We only felt joy.",
    name: "Sneha & Rohan Kapoor",
    city: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote:
      "The mandap they designed was straight out of a fairytale — traditional yet deeply personal. Every element reflected who we are as a couple. We couldn't have imagined anything more beautiful.",
    name: "Ananya & Vikram Sharma",
    city: "Jaipur",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section
      className="scroll-mt-16 bg-maroon-dark py-20 lg:py-28"
      aria-label="Client Testimonials"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-[8vw]">
        {/* Label + heading */}
        <div className="reveal text-center">
          <p className="text-[10px] tracking-[0.45em] text-gold">LOVE NOTES</p>
          <div className="mx-auto mt-3 h-px w-10 bg-gold/50" />
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-cream sm:text-5xl">
            Words From <em className="text-gold">Our Families.</em>
          </h2>
        </div>

        {/* Desktop: 3 cards side by side */}
        <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal group relative border border-gold/20 bg-maroon p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote
                className="mb-4 h-8 w-8 text-gold/40"
                strokeWidth={1.2}
                fill="currentColor"
              />
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif text-[15px] leading-relaxed text-cream/80 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-gold/20 pt-5">
                <div className="relative h-11 w-11 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="rounded-full border-2 border-gold/40 object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-[15px] font-medium text-cream">{t.name}</p>
                  <p className="text-[11px] tracking-widest text-gold/70">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: slider */}
        <div className="reveal mt-12 lg:hidden">
          <div className="relative border border-gold/20 bg-maroon p-8">
            <Quote
              className="mb-4 h-8 w-8 text-gold/40"
              strokeWidth={1.2}
              fill="currentColor"
            />
            <div className="mb-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <p className="font-serif text-[15px] leading-relaxed text-cream/80 italic">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-gold/20 pt-5">
              <div className="relative h-11 w-11 shrink-0">
                <Image
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  fill
                  sizes="44px"
                  className="rounded-full border-2 border-gold/40 object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-[15px] font-medium text-cream">{testimonials[active].name}</p>
                <p className="text-[11px] tracking-widest text-gold/70">{testimonials[active].city}</p>
              </div>
            </div>
          </div>

          {/* Slider controls */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-cream transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold active:scale-90"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold ${i === active ? "w-6 bg-gold" : "w-1.5 bg-gold/30"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-cream transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold active:scale-90"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
