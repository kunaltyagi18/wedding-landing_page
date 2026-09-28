"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Img } from "./Lightbox";
import { go } from "./Navbar";

export function OurStory({ images, onOpen }: { images: Img[]; onOpen: (i: number) => void }) {
  return (
    <section className="relative bg-cream-deep">
      <div className="grid lg:grid-cols-[34%_66%]">
        <div id="our-story" className="reveal scroll-mt-16 px-6 py-12 lg:py-6 lg:pl-[9.5vw] lg:pr-6">
          <p className="text-[10px] tracking-[0.4em] text-gold">OUR STORY</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-maroon-dark">
            Rooted in Traditions,<br />Designed for <em className="text-maroon">Today.</em>
          </h2>
          <div className="mt-3 h-px w-12 bg-gold" />
          <p className="mt-3 font-serif text-[15px] leading-snug text-maroon-dark/85">
            At ANANTA SUTRA, we blend tradition, creativity and meticulous planning to create celebrations that are timeless, personal and beautifully executed.
          </p>
          <button onClick={() => go("our-story")} className="mt-5 border border-maroon px-8 py-2.5 font-serif text-[15px] text-maroon-dark transition hover:bg-maroon hover:text-cream focus-visible:outline-2 focus-visible:outline-gold active:scale-95">
            Discover Our Story →
          </button>
        </div>
        <div id="gallery" className="grid scroll-mt-16 grid-cols-2 gap-2 p-2 md:grid-cols-4">
          {images.map((im, i) => (
            <div key={im.title} className="reveal group relative h-60 overflow-hidden" style={{ transitionDelay: `${i * 100}ms` }}>
              <Image src={im.src} alt={im.title} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 max-w-[60%] font-serif text-xl leading-tight text-cream">{im.title}</p>
              <button onClick={() => onOpen(i)} aria-label={`View ${im.title}`} className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-cream text-cream transition hover:bg-cream hover:text-maroon focus-visible:outline-2 focus-visible:outline-gold active:scale-90">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
