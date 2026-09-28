"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  weddingDate: string;
  location: string;
  message: string;
}

const INIT: FormState = {
  name: "",
  phone: "",
  email: "",
  weddingDate: "",
  location: "",
  message: "",
};

const info = [
  {
    icon: MapPin,
    label: "Our Studio",
    value: "42, Sunder Nagar, New Delhi – 110003",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98100 00000",
    href: "tel:+919810000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@anantasutra.com",
    href: "mailto:hello@anantasutra.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat, 10 AM – 7 PM IST",
  },
];

function validate(f: FormState) {
  const errors: Partial<FormState> = {};
  if (!f.name.trim()) errors.name = "Your name is required.";
  if (!f.phone.match(/^[+\d\s\-]{7,15}$/)) errors.phone = "Enter a valid phone number.";
  if (!f.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = "Enter a valid email address.";
  if (!f.weddingDate) errors.weddingDate = "Please select your wedding date.";
  if (!f.location.trim()) errors.location = "Wedding location is required.";
  if (!f.message.trim()) errors.message = "Please share a brief message.";
  return errors;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INIT);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    console.log("Enquiry form submission:", form);
    setSubmitted(true);
    setForm(INIT);
    setErrors({});
  };

  const inputCls = (key: keyof FormState) =>
    `w-full border-b bg-transparent py-2.5 font-serif text-[15px] text-maroon-dark placeholder:text-maroon-dark/35 outline-none transition-colors duration-200 focus:border-maroon ${
      errors[key] ? "border-red-500" : "border-gold/40 hover:border-gold/70"
    }`;

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-cream-deep py-20 lg:py-28"
      aria-label="Contact Us"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-[8vw]">
        {/* Label + heading */}
        <div className="reveal text-center">
          <p className="text-[10px] tracking-[0.45em] text-gold">GET IN TOUCH</p>
          <div className="mx-auto mt-3 h-px w-10 bg-gold/50" />
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-maroon-dark sm:text-5xl">
            Let's Plan Your <em className="text-maroon">Forever.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-serif text-[15px] leading-snug text-maroon-dark/70">
            Tell us a little about your dream — we'd love to hear it.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[40%_60%]">
          {/* Left: contact info */}
          <div className="reveal space-y-8">
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30 text-gold">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.4} />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.35em] text-gold">{label.toUpperCase()}</p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-0.5 block font-serif text-[15px] text-maroon-dark transition hover:text-maroon focus-visible:outline-none focus-visible:text-maroon active:opacity-70"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 font-serif text-[15px] text-maroon-dark">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Thin decorative gold divider */}
            <div className="h-px w-full bg-gold/25" />
            <p className="font-serif text-[13px] italic leading-relaxed text-maroon-dark/55">
              "We respond to all enquiries within 24 hours. Your forever deserves our full attention."
            </p>
          </div>

          {/* Right: form */}
          <div className="reveal">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle2
                  className="h-14 w-14 text-gold"
                  strokeWidth={1.2}
                />
                <h3 className="font-serif text-2xl text-maroon-dark">
                  Thank You, Your Enquiry is With Us!
                </h3>
                <p className="max-w-sm font-serif text-[14px] leading-relaxed text-maroon-dark/65">
                  We've received your details and will be in touch within 24 hours to begin planning your forever.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 border border-maroon px-8 py-2.5 font-serif text-[14px] text-maroon-dark transition hover:bg-maroon hover:text-cream focus-visible:outline-2 focus-visible:outline-gold active:scale-95"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="grid grid-cols-1 gap-8 sm:grid-cols-2"
              >
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your Full Name *"
                    value={form.name}
                    onChange={set("name")}
                    className={inputCls("name")}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "err-name" : undefined}
                  />
                  {errors.name && (
                    <span id="err-name" className="flex items-center gap-1 text-[12px] text-red-500">
                      <AlertCircle className="h-3 w-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={set("phone")}
                    className={inputCls("phone")}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "err-phone" : undefined}
                  />
                  {errors.phone && (
                    <span id="err-phone" className="flex items-center gap-1 text-[12px] text-red-500">
                      <AlertCircle className="h-3 w-3" /> {errors.phone}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={set("email")}
                    className={inputCls("email")}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                  />
                  {errors.email && (
                    <span id="err-email" className="flex items-center gap-1 text-[12px] text-red-500">
                      <AlertCircle className="h-3 w-3" /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Wedding Date */}
                <div className="flex flex-col gap-1">
                  <input
                    id="contact-wedding-date"
                    type="date"
                    placeholder="Wedding Date *"
                    value={form.weddingDate}
                    onChange={set("weddingDate")}
                    className={inputCls("weddingDate")}
                    aria-required="true"
                    aria-invalid={!!errors.weddingDate}
                    aria-describedby={errors.weddingDate ? "err-date" : undefined}
                  />
                  {errors.weddingDate && (
                    <span id="err-date" className="flex items-center gap-1 text-[12px] text-red-500">
                      <AlertCircle className="h-3 w-3" /> {errors.weddingDate}
                    </span>
                  )}
                </div>

                {/* Location */}
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <input
                    id="contact-location"
                    type="text"
                    placeholder="Wedding Location / City *"
                    value={form.location}
                    onChange={set("location")}
                    className={inputCls("location")}
                    aria-required="true"
                    aria-invalid={!!errors.location}
                    aria-describedby={errors.location ? "err-location" : undefined}
                  />
                  {errors.location && (
                    <span id="err-location" className="flex items-center gap-1 text-[12px] text-red-500">
                      <AlertCircle className="h-3 w-3" /> {errors.location}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us a little about your vision *"
                    value={form.message}
                    onChange={set("message")}
                    className={`resize-none ${inputCls("message")}`}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "err-message" : undefined}
                  />
                  {errors.message && (
                    <span id="err-message" className="flex items-center gap-1 text-[12px] text-red-500">
                      <AlertCircle className="h-3 w-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    id="contact-submit"
                    className="bg-maroon px-12 py-3.5 font-serif text-[15px] text-cream shadow transition hover:bg-maroon-dark hover:shadow-lg focus-visible:outline-2 focus-visible:outline-gold active:scale-95"
                  >
                    Send Enquiry →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
