"use client";

import { useState } from "react";
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";
import { go } from "./Navbar";

// Pinterest icon (not in lucide, so inline SVG)
function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

const quickLinks: [string, string][] = [
  ["Home", "top"],
  ["Our Story", "our-story"],
  ["Services", "services"],
  ["Gallery", "gallery"],
  ["Journal", "journal"],
  ["Contact", "contact"],
];

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return;
    console.log("Newsletter subscribe:", email);
    setNewsletterDone(true);
    setEmail("");
  };

  return (
    <footer className="bg-maroon-dark text-cream" aria-label="Site footer">
      {/* Main footer content */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-[8vw] lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-maroon text-center font-serif text-[9px] leading-tight text-cream shadow">
                ANANTA<br />SUTRA
              </span>
              <div>
                <p className="font-serif text-xl tracking-wide text-cream">Ananta Sutra</p>
                <p className="text-[10px] tracking-[0.3em] text-gold/70">WEDDING PLANNERS</p>
              </div>
            </div>
            <p className="font-serif text-[14px] leading-relaxed text-cream/60">
              Weddings rooted in tradition, designed for today. Every celebration we craft is a reflection of your unique love story.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-cream/70 transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold active:scale-90"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-cream/70 transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold active:scale-90"
              >
                <PinterestIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-[10px] tracking-[0.4em] text-gold">QUICK LINKS</h3>
            <div className="h-px w-8 bg-gold/40 mb-5" />
            <ul className="space-y-3">
              {quickLinks.map(([label, id]) => (
                <li key={label}>
                  <button
                    onClick={() => go(id)}
                    className="font-serif text-[14px] text-cream/65 transition hover:text-gold focus-visible:outline-none focus-visible:text-gold active:opacity-70"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-5 text-[10px] tracking-[0.4em] text-gold">CONTACT</h3>
            <div className="h-px w-8 bg-gold/40 mb-5" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/60" strokeWidth={1.4} />
                <p className="font-serif text-[13px] leading-snug text-cream/60">
                  42, Sunder Nagar,<br />New Delhi – 110003
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold/60" strokeWidth={1.4} />
                <a
                  href="tel:+919810000000"
                  className="font-serif text-[13px] text-cream/60 transition hover:text-gold focus-visible:outline-none focus-visible:text-gold active:opacity-70"
                >
                  +91 98100 00000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold/60" strokeWidth={1.4} />
                <a
                  href="mailto:hello@anantasutra.com"
                  className="font-serif text-[13px] text-cream/60 transition hover:text-gold focus-visible:outline-none focus-visible:text-gold active:opacity-70"
                >
                  hello@anantasutra.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-[10px] tracking-[0.4em] text-gold">STAY INSPIRED</h3>
            <div className="h-px w-8 bg-gold/40 mb-5" />
            <p className="font-serif text-[13px] leading-relaxed text-cream/55">
              Get wedding inspiration, planning tips and exclusive offers — delivered to your inbox.
            </p>
            {newsletterDone ? (
              <p className="mt-5 font-serif text-[13px] text-gold">
                ✓ You're subscribed! Welcome to the family.
              </p>
            ) : (
              <form onSubmit={handleNewsletter} className="mt-5 flex flex-col gap-3">
                <input
                  id="footer-newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Newsletter email address"
                  className="w-full border-b border-gold/30 bg-transparent py-2 font-serif text-[13px] text-cream placeholder:text-cream/35 outline-none transition hover:border-gold/60 focus:border-gold"
                />
                <button
                  type="submit"
                  id="footer-newsletter-submit"
                  className="self-start border border-gold px-6 py-2 font-serif text-[13px] text-gold transition hover:bg-gold hover:text-maroon-dark focus-visible:outline-2 focus-visible:outline-gold active:scale-95"
                >
                  Subscribe →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Thin gold divider */}
      <div className="h-px w-full bg-gold/15" />

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-[8vw]">
        <p className="font-serif text-[12px] text-cream/40">
          © 2026 Ananta Sutra. All rights reserved.
        </p>
        <button
          onClick={() => go("top")}
          id="back-to-top"
          aria-label="Back to top"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-cream/50 transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold active:scale-90"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}
