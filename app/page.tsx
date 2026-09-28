"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ServicesStrip } from "@/components/landing/ServicesStrip";
import { OurStory } from "@/components/landing/OurStory";
import { StatsBand } from "@/components/landing/StatsBand";
import { Services } from "@/components/landing/Services";
import { Gallery } from "@/components/landing/GallerySection";
import { Testimonials } from "@/components/landing/Testimonials";
import { Journal } from "@/components/landing/Journal";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import { EnquiryModal } from "@/components/landing/EnquiryModal";
import { VideoModal } from "@/components/landing/VideoModal";
import { Lightbox } from "@/components/landing/Lightbox";

// Static image assets — Next.js returns StaticImageData; extract .src for <img> compatibility
import detailsImg from "@/assets/card-details.jpg";
import experiencesImg from "@/assets/card-experiences.jpg";
import locationsImg from "@/assets/card-locations.jpg";
import momentsImg from "@/assets/card-moments.jpg";

const images = [
  { src: detailsImg.src, title: "Thoughtful Details" },
  { src: experiencesImg.src, title: "Curated Experiences" },
  { src: locationsImg.src, title: "Beautiful Locations" },
  { src: momentsImg.src, title: "Moments That Last" },
];

export default function Home() {
  const [enquiry, setEnquiry] = useState(false);
  const [video, setVideo] = useState(false);
  const [lb, setLb] = useState<number | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onEnquire={() => setEnquiry(true)} />
      <main>
        <Hero onEnquire={() => setEnquiry(true)} onVideo={() => setVideo(true)} />
        <ServicesStrip />
        <OurStory images={images} onOpen={setLb} />
        <StatsBand />
        {/* ── New sections ── */}
        <Services />
        <Gallery />
        <Testimonials />
        <Journal />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <EnquiryModal open={enquiry} onClose={() => setEnquiry(false)} />
      <VideoModal open={video} onClose={() => setVideo(false)} />
      <Lightbox
        images={images}
        index={lb}
        onChange={setLb}
        onClose={() => setLb(null)}
      />
    </div>
  );
}
