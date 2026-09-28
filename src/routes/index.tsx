import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ServicesStrip } from "@/components/landing/ServicesStrip";
import { OurStory } from "@/components/landing/OurStory";
import { StatsBand } from "@/components/landing/StatsBand";
import { EnquiryModal } from "@/components/landing/EnquiryModal";
import { VideoModal } from "@/components/landing/VideoModal";
import { Lightbox } from "@/components/landing/Lightbox";
import { Services } from "@/components/landing/Services";
import { Gallery } from "@/components/landing/GallerySection";
import { Testimonials } from "@/components/landing/Testimonials";
import { Journal } from "@/components/landing/Journal";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import details from "@/assets/card-details.jpg";
import experiences from "@/assets/card-experiences.jpg";
import locations from "@/assets/card-locations.jpg";
import moments from "@/assets/card-moments.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ananta Sutra — Weddings That Feel Like You" },
      { name: "description", content: "Luxury Indian wedding planning: full planning, design, destination and personalised celebrations." },
      { property: "og:title", content: "Ananta Sutra — Weddings That Feel Like You" },
      { property: "og:description", content: "Luxury Indian wedding planning rooted in tradition, designed for today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const images = [
  { src: details, title: "Thoughtful Details" },
  { src: experiences, title: "Curated Experiences" },
  { src: locations, title: "Beautiful Locations" },
  { src: moments, title: "Moments That Last" },
];

function Index() {
  const [enquiry, setEnquiry] = useState(false);
  const [video, setVideo] = useState(false);
  const [lb, setLb] = useState<number | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 },
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
      <Lightbox images={images} index={lb} onChange={setLb} onClose={() => setLb(null)} />
    </div>
  );
}
