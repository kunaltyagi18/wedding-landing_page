"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import heroImg from "@/assets/hero-couple.jpg";
const hero = heroImg.src;

const avatars = [
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
];

export function Hero({ onEnquire, onVideo }: { onEnquire: () => void; onVideo: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-deep">
      <div className="flex flex-col-reverse lg:grid lg:min-h-[410px] lg:grid-cols-[42%_58%]">
        <div className="reveal relative z-10 px-6 py-12 lg:py-10 lg:pl-[6.5vw] lg:pr-0">
          <p className="text-[9px] tracking-[0.35em] text-maroon-dark/70 sm:text-[10px]">
            TIMELESS PLANNING &nbsp;|&nbsp; MEANINGFUL MOMENTS &nbsp;|&nbsp; YOURS, ALWAYS
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-maroon-dark sm:text-5xl xl:text-[64px]">
            Weddings<br />That Feel Like <em className="text-maroon">You.</em>
          </h1>
          <div className="mt-5 h-px w-12 bg-gold" />
          <p className="mt-4 max-w-md font-serif text-lg leading-snug text-maroon-dark/85">
            Thoughtful planning, refined design and unforgettable celebrations — crafted around your story, your traditions and your dreams.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <button onClick={onEnquire} className="bg-maroon px-8 py-3 font-serif text-[16px] text-cream shadow transition hover:bg-maroon-dark hover:shadow-lg focus-visible:outline-2 focus-visible:outline-gold active:scale-95">
              Plan Your Wedding →
            </button>
            <button onClick={onVideo} className="group flex items-center gap-3 font-serif text-[16px] text-maroon-dark transition hover:text-maroon focus-visible:outline-none">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold text-gold transition group-hover:bg-gold group-hover:text-cream group-active:scale-90">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
              Watch Our Story
            </button>
          </div>
          <div className="mt-6 flex items-center gap-3 border-b border-gold/30 pb-2 sm:w-72">
            <div className="flex -space-x-2">
              {avatars.map((a) => (
                <div key={a} className="relative h-8 w-8 shrink-0">
                  <Image src={a} alt="" fill sizes="32px" className="rounded-full border-2 border-cream object-cover" />
                </div>
              ))}
            </div>
            <span className="font-serif text-sm text-maroon-dark">200+ Happy Families</span>
          </div>
        </div>
        <div className="relative h-[40vh] min-h-[300px] sm:h-96 lg:h-auto">
          <Image src={hero} alt="Bride and groom under a floral mandap at sunset" fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="absolute inset-0 object-cover" />
          <div className="absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-cream-deep to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}
