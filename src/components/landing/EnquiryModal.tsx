"use client";

import { useState, type FormEvent } from "react";
import { Modal } from "./Modal";

type Form = { name: string; phone: string; email: string; date: string; message: string };
const empty: Form = { name: "", phone: "", email: "", date: "", message: "" };

export function EnquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Form>>({});
  const [done, setDone] = useState(false);

  const close = () => {
    onClose();
    setTimeout(() => { setDone(false); setForm(empty); setErrors({}); }, 200);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const er: Partial<Form> = {};
    if (form.name.trim().length < 2) er.name = "Please enter your name";
    if (!/^[+\d\s-]{8,15}$/.test(form.phone.trim())) er.phone = "Enter a valid phone number";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) er.email = "Enter a valid email";
    if (!form.date) er.date = "Choose your wedding date";
    setErrors(er);
    if (Object.keys(er).length) return;
    console.log("Enquiry submitted:", form);
    setDone(true);
  };

  const field = "w-full border border-gold/40 bg-cream/60 px-4 py-3 text-sm text-maroon-dark outline-none transition focus:border-maroon focus:ring-1 focus:ring-maroon";
  const set = (k: keyof Form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  return (
    <Modal open={open} onClose={close} className="max-w-lg bg-cream p-8 shadow-2xl">
      {done ? (
        <div className="py-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Thank you</p>
          <h3 className="mt-3 font-serif text-4xl text-maroon">We&apos;ll be in touch <em>soon.</em></h3>
          <p className="mt-4 text-sm text-maroon-dark/70">Our planners will reach out within 24 hours.</p>
          <button onClick={close} className="mt-8 bg-maroon px-8 py-3 text-sm text-cream transition hover:bg-maroon-dark active:scale-95">Close</button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Enquiry</p>
          <h3 className="font-serif text-3xl text-maroon">Plan Your <em>Wedding</em></h3>
          {([
            ["name", "Name", "text"],
            ["phone", "Phone", "tel"],
            ["email", "Email", "email"],
            ["date", "Wedding Date", "date"],
          ] as const).map(([k, label, type]) => (
            <div key={k}>
              <label className="mb-1 block text-xs text-maroon-dark/70">{label}</label>
              <input type={type} value={form[k]} onChange={set(k)} className={field} />
              {errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>}
            </div>
          ))}
          <div>
            <label className="mb-1 block text-xs text-maroon-dark/70">Message</label>
            <textarea rows={3} value={form.message} onChange={set("message")} className={field} />
          </div>
          <button type="submit" className="w-full bg-maroon py-3 text-sm text-cream transition hover:bg-maroon-dark focus-visible:outline-2 focus-visible:outline-gold active:scale-[0.98]">
            Send Enquiry →
          </button>
        </form>
      )}
    </Modal>
  );
}
