"use client";

import { useState } from "react";

const initialState = {
  state: "idle",
  message: "",
};

const ContactForm = () => {
  const [result, setResult] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    try {
      setIsSubmitting(true);
      setResult(initialState);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setResult({
          state: "error",
          message: data.error || "Unable to submit inquiry right now.",
        });
        return;
      }

      form.reset();
      setResult({
        state: "success",
        message: data.message || "Inquiry submitted successfully.",
      });
    } catch {
      setResult({
        state: "error",
        message: "Unable to submit inquiry right now. Please try again shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="gue-page-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="gue-page-form-honeypot"
        aria-hidden="true"
      />

      <div className="gue-page-form-grid">
        <div>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required minLength={2} />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="you@company.com" required />
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="text" placeholder="+234 ..." />
        </div>
        <div>
          <label htmlFor="service">Primary need</label>
          <select id="service" name="service" defaultValue="Software Development" required>
            <option>Software Development</option>
            <option>AI Automation</option>
            <option>SaaS & Open-Source</option>
            <option>DevOps & Cloud Engineering</option>
            <option>IT Training</option>
            <option>Technical Consulting</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message">Project brief</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          minLength={20}
          maxLength={3000}
          placeholder="Describe the problem, expected outcome, timeline, and any existing systems."
          required
        />
      </div>

      <button type="submit" className="gue-page-button" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>

      {result.message ? (
        <p
          className={`gue-page-form-status gue-page-form-status--${result.state}`}
          role={result.state === "error" ? "alert" : "status"}
        >
          {result.message}
        </p>
      ) : null}

      <p className="gue-page-form-note">
        Your inquiry is sent securely to our intake queue. For urgent requests, email
        {" "}
        <a href="mailto:hello@gueengineering.com">hello@gueengineering.com</a>.
      </p>
    </form>
  );
};

export default ContactForm;
