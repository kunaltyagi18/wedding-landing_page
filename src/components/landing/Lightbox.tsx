import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Modal } from "./Modal";

export type Img = { src: string; title: string };

export function Lightbox({ images, index, onChange, onClose }: { images: Img[]; index: number | null; onChange: (i: number) => void; onClose: () => void }) {
  const open = index !== null;
  const i = index ?? 0;
  const prev = () => onChange((i - 1 + images.length) % images.length);
  const next = () => onChange((i + 1) % images.length);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => { if (e.key === "ArrowLeft") prev(); if (e.key === "ArrowRight") next(); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  });
  const btn = "absolute top-1/2 -translate-y-1/2 rounded-full border border-cream/50 bg-maroon-dark/60 p-3 text-cream transition hover:bg-gold hover:text-maroon-dark active:scale-90";
  return (
    <Modal open={open} onClose={onClose} dark className="max-w-3xl">
      <img src={images[i]?.src} alt={images[i]?.title} className="max-h-[80vh] w-full object-contain" />
      <p className="mt-3 text-center font-serif text-2xl text-cream">{images[i]?.title}</p>
      <button onClick={prev} aria-label="Previous" className={`${btn} left-2`}><ChevronLeft className="h-5 w-5" /></button>
      <button onClick={next} aria-label="Next" className={`${btn} right-2`}><ChevronRight className="h-5 w-5" /></button>
    </Modal>
  );
}
