"use client";

import { m } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);

    if (result.error) {
      setError(result.error);
      setIsSubmitting(false);
    } else {
      router.push("/success");
    }
  };

  return (
    <section id="contact" className="hs-section hs-contact" aria-label="Contact">
      <div className="hs-mono-label" style={{ marginBottom: "20px" }}>
        [ 05&nbsp;&nbsp;CONTACT ]
      </div>
      
      <h2 className="hs-contact-headline">
        <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>LET&apos;S BUILD</m.div>
        <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>SOMETHING</m.div>
        <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>SERIOUS.</m.div>
      </h2>
      
      <div className="hs-contact-grid">
        <m.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="hs-body">
            We work with startups and businesses building serious AI systems and products. If you know what you want to build — or need help figuring it out — let&apos;s talk.
          </p>
          <div style={{ marginTop: "36px" }}>
            <div className="hs-contact-detail">
              <span className="hs-contact-key">EMAIL</span>
              <span className="hs-contact-arrow">→</span>
              <span className="hs-contact-val">hello@hisako.eu</span>
            </div>
            <div className="hs-contact-detail">
              <span className="hs-contact-key">LOCATION</span>
              <span className="hs-contact-arrow">→</span>
              <span className="hs-contact-val">Nairobi, Kenya</span>
            </div>
            <div className="hs-contact-detail">
              <span className="hs-contact-key">AVAILABILITY</span>
              <span className="hs-contact-arrow">→</span>
              <span className="hs-contact-val">Open to AI Projects</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px", marginTop: "28px" }}>
            <a href="#" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "9px", color: "#333", letterSpacing: "0.12em", textTransform: "uppercase" }}>LinkedIn</a>
            <a href="#" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "9px", color: "#333", letterSpacing: "0.12em", textTransform: "uppercase" }}>GitHub</a>
          </div>
        </m.div>
        
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="hs-form-group">
              <label htmlFor="name" className="hs-form-label">Name</label>
              <input id="name" className="hs-form-input" name="name" type="text" required disabled={isSubmitting} />
            </div>
            <div className="hs-form-group">
              <label htmlFor="email" className="hs-form-label">Email</label>
              <input id="email" className="hs-form-input" name="email" type="email" required disabled={isSubmitting} />
            </div>
            <div className="hs-form-group">
              <label htmlFor="message" className="hs-form-label">What are you building?</label>
              <textarea id="message" className="hs-form-textarea" name="message" required placeholder="Tell us about your business and what you're trying to automate, build, or improve with AI..." disabled={isSubmitting}></textarea>
            </div>
            {error && (
              <div style={{ color: "#E8400C", fontSize: "12px", fontFamily: "var(--font-dm-sans), sans-serif", marginTop: "12px" }}>
                {error}
              </div>
            )}
            <button type="submit" className="hs-submit" disabled={isSubmitting}>
              {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE →"}
            </button>
          </form>
        </m.div>
      </div>

    </section>
  );
}
