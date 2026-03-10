"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!form.get("name")) errs.name = "Name is required";
    const email = form.get("email") as string;
    if (!email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Invalid email address";
    if (!form.get("inquiryType"))
      errs.inquiryType = "Please select an inquiry type";
    const message = form.get("message") as string;
    if (!message) errs.message = "Message is required";
    else if (message.length < 20)
      errs.message = "Message must be at least 20 characters";
    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-6 bg-brand-charcoal border border-brand-gold/30">
        <h3 className="text-2xl font-cormorant font-medium text-brand-light mb-4">
          Inquiry <span className="italic text-brand-gold">Received</span>
        </h3>
        <p className="text-brand-gray font-light max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to China Star Group. The appropriate department will review your message and respond within 2-3 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 font-montserrat text-xs uppercase tracking-widest text-brand-gold hover:text-brand-light transition-colors border-b border-brand-gold/50 pb-1"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass = "w-full bg-transparent border-b border-brand-gray/30 rounded-none px-0 py-3 text-brand-light font-montserrat text-sm placeholder:text-brand-gray/50 focus:outline-none focus:border-brand-gold transition-colors";
  const labelClass = "block font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-gold/80 mb-1";
  const errorClass = "text-[#FF3008] text-xs mt-1 font-montserrat tracking-wide";

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>Your Name *</label>
          <input name="name" type="text" className={inputClass} placeholder="Jane Smith" required />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input name="email" type="email" className={inputClass} placeholder="jane@company.com" required />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>Company Name</label>
          <input name="company" type="text" className={inputClass} placeholder="Optional" />
        </div>
        <div>
          <label className={labelClass}>Inquiry Type *</label>
          <div className="relative">
            <select name="inquiryType" className={`${inputClass} appearance-none cursor-pointer`} required defaultValue="">
              <option value="" disabled className="text-brand-black">Select an inquiry type...</option>
              <option value="landlord" className="text-brand-black">Landlord / Leasing</option>
              <option value="partnership" className="text-brand-black">Business Partnership</option>
              <option value="media" className="text-brand-black">Media / Press</option>
              <option value="catering" className="text-brand-black">Catering</option>
              <option value="other" className="text-brand-black">Other</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <span className="text-brand-gold text-xs">▼</span>
            </div>
          </div>
          {errors.inquiryType && <p className={errorClass}>{errors.inquiryType}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Phone Number</label>
        <input name="phone" type="tel" className={inputClass} placeholder="(555) 123-4567 (Optional)" />
      </div>

      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          name="message"
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your inquiry..."
          required
        />
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>

      <div className="pt-4 text-center md:text-left">
        <Button type="submit" variant="primary" className="w-full md:w-auto px-12 py-4 font-montserrat text-xs uppercase tracking-[0.2em] rounded-none border border-brand-gold text-brand-light hover:bg-brand-gold hover:text-brand-black transition-all duration-300 bg-transparent">
          Send Message
        </Button>
      </div>
    </form>
  );
}
