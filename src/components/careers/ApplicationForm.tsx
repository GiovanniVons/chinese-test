"use client";

import { useState, FormEvent } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
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
      <div className="text-center py-12 px-6 bg-green-50 rounded-xl">
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Application Submitted!
        </h3>
        <p className="text-green-700">
          Thank you for your interest in joining China Star Group. We will review
          your application and contact you if there is a fit.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-green-600 hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          name="name"
          required
          error={errors.name}
          placeholder="John Doe"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          required
          error={errors.email}
          placeholder="john@example.com"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" />
        <Select
          label="Position Interest"
          name="position"
          required
          error={errors.position}
          placeholder="Select a category..."
          options={[
            { value: "kitchen", label: "Kitchen / Cook" },
            { value: "front-of-house", label: "Front of House / Cashier" },
            { value: "management", label: "Management" },
            { value: "corporate", label: "Corporate" },
          ]}
        />
      </div>
      <Input
        label="Preferred Location"
        name="location"
        placeholder="City or state (e.g., Dallas, TX)"
      />
      <Textarea
        label="Tell us about yourself"
        name="message"
        rows={4}
        placeholder="Share your relevant experience, availability, and why you'd like to join our team..."
      />
      <Button type="submit" size="lg">
        Submit Application
      </Button>
    </form>
  );
}
