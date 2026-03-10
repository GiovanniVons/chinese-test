"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!form.get("name")) errs.name = "Name is required";
    const email = form.get("email") as string;
    if (!email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Invalid email address";
    if (!form.get("position")) errs.position = "Please select a position";
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
      <div className="text-center py-16 px-6 border border-brand-gold/30 bg-brand-charcoal">
        <h3 className="text-2xl font-cormorant font-medium text-brand-light mb-4">
          Application <span className="italic text-brand-gold">Received</span>
        </h3>
        <p className="text-brand-gray font-light max-w-md mx-auto leading-relaxed">
          Thank you for your interest in joining China Star Group. Our talent acquisition team will review your profile and contact you if there is a fit.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 font-montserrat text-xs uppercase tracking-widest text-brand-gold hover:text-brand-light transition-colors border-b border-brand-gold/50 pb-1"
        >
          Submit another inquiry
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
          <label className={labelClass}>Full Name *</label>
          <input name="name" type="text" className={inputClass} placeholder="Jane Doe" required />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input name="email" type="email" className={inputClass} placeholder="jane@example.com" required />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>Phone Number</label>
          <input name="phone" type="tel" className={inputClass} placeholder="(555) 123-4567" />
        </div>
        <div>
          <label className={labelClass}>Position Interest *</label>
          <div className="relative">
            <select name="position" className={`${inputClass} appearance-none cursor-pointer`} required defaultValue="">
              <option value="" disabled className="text-brand-black">Select a department...</option>
              <option value="kitchen" className="text-brand-black">Culinary / Kitchen</option>
              <option value="front-of-house" className="text-brand-black">Service / Front of House</option>
              <option value="management" className="text-brand-black">Management</option>
              <option value="corporate" className="text-brand-black">Corporate</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <span className="text-brand-gold text-xs">▼</span>
            </div>
          </div>
          {errors.position && <p className={errorClass}>{errors.position}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Preferred Location</label>
        <input name="location" type="text" className={inputClass} placeholder="City, State or specific restaurant" />
      </div>

      <div>
        <label className={labelClass}>Letter of Intent</label>
        <textarea
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Share your relevant exceptional experience and why you are drawn to our brand..."
        />
      </div>

      <div className="pt-4 text-center">
        <Button type="submit" variant="primary" className="w-full md:w-auto px-12 py-4 font-montserrat text-xs uppercase tracking-[0.2em] rounded-none">
          Submit Application
        </Button>
      </div>
    </form>
  );
}
