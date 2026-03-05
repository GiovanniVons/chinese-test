"use client";

import { useState, FormEvent } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
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
      <div className="text-center py-12 px-6 bg-green-50 rounded-xl">
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Message Sent!
        </h3>
        <p className="text-green-700">
          Thank you for reaching out. Our team will review your inquiry and
          respond within 2-3 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-green-600 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Your Name"
          name="name"
          required
          error={errors.name}
          placeholder="Jane Smith"
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          required
          error={errors.email}
          placeholder="jane@company.com"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Company"
          name="company"
          placeholder="Company name (optional)"
        />
        <Select
          label="Inquiry Type"
          name="inquiryType"
          required
          error={errors.inquiryType}
          placeholder="Select inquiry type..."
          options={[
            { value: "landlord", label: "Landlord / Leasing" },
            { value: "partnership", label: "Business Partnership" },
            { value: "media", label: "Media / Press" },
            { value: "catering", label: "Catering" },
            { value: "other", label: "Other" },
          ]}
        />
      </div>
      <Input label="Phone" name="phone" type="tel" placeholder="(555) 123-4567 (optional)" />
      <Textarea
        label="Message"
        name="message"
        required
        error={errors.message}
        rows={5}
        placeholder="Tell us about your inquiry..."
      />
      <Button type="submit" size="lg">
        Send Message
      </Button>
    </form>
  );
}
