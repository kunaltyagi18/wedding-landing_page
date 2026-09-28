"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    alt: "Indian bride with red dupatta and gold jewelry",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Floral mandap decoration at a luxury wedding",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
    alt: "Bride and groom at golden hour portrait",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    alt: "Mehndi ceremony close-up on hands",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
    alt: "Elegant wedding table setting with candles",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
    alt: "Sangeet night celebrations with dancing",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800&q=80",
    alt: "Wedding floral arrangement with marigolds",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Bride getting ready with bridesmaids",
    span: "",
  },
];

export function Gallery() {
  const [lb, setLb] = useState<number | null>(null);

  const prev = useCallback(() => {
    setLb((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  }, []);
  const next = useCallback(() => {
    setLb((i) => (i === null ? null : (i + 1) % galleryImages.length));
  }, []);
  const close = useCallback(() => setLb(null), []);

  useEffect(() => {
    if (lb === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lb, prev, next, close]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lb !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lb]);

  return (
    <>
      <section
        id="gallery"
        className="scroll-mt-16 bg-cream-deep py-20 lg:py-28"
        aria-label="Our Work Gallery"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-[8vw]">
          {/* Label + heading */}
          <div className="reveal text-center">
            <p className="text-[10px] tracking-[0.45em] text-gold">OUR WORK</p>
            <div className="mx-auto mt-3 h-px w-10 bg-gold/50" />
            <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-maroon-dark sm:text-5xl">
              Moments We've <em className="text-maroon">Crafted.</em>
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-serif text-[15px] leading-snug text-maroon-dark/70">
              Every frame tells a story of love, tradition and meticulous artistry.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`reveal group relative cursor-pointer overflow-hidden ${img.span}`}
                style={{ transitionDelay: `${i * 70}ms` }}
                onClick={() => setLb(i)}
                role="button"
                aria-label={`View ${img.alt}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLb(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-maroon-dark/0 transition-all duration-300 group-hover:bg-maroon-dark/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-8 w-8 text-cream" strokeWidth={1.5} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lb !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-maroon-dark/95 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold active:scale-90"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold active:scale-90 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="relative mx-16 max-h-[85vh] max-w-4xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lb].src.replace("w=800", "w=1200")}
              alt={galleryImages[lb].alt}
              className="max-h-[85vh] w-auto rounded-sm object-contain shadow-2xl"
            />
            <p className="mt-3 text-center font-serif text-sm tracking-wide text-cream/70">
              {galleryImages[lb].alt}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold active:scale-90 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-serif text-sm tracking-widest text-cream/50">
            {lb + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </>
  );
}
