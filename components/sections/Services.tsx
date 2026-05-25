"use client";

import { m } from "framer-motion";

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Lead & Outreach Automation",
      desc: "We build pipelines that find, qualify, and contact your ideal prospects automatically. Lead research, scoring, personalised outreach sequences, and CRM updates — running 24/7 without a sales rep touching it."
    },
    {
      num: "02",
      title: "Client Onboarding Pipelines",
      desc: "Every new client triggers the same manual checklist. We automate it. Contract delivery, welcome sequences, data collection, account setup, and internal notifications — done in minutes, not days."
    },
    {
      num: "03",
      title: "Sales Pipeline Automation",
      desc: "We connect your CRM, calendar, email, and data sources into a single automated pipeline. Follow-ups sent, deals updated, tasks created — your sales process runs itself while your team focuses on closing."
    },
    {
      num: "04",
      title: "Internal Ops & Admin",
      desc: "Reporting, data sync, invoice processing, meeting notes, task assignment — the operational overhead that eats your team's time. We map it, automate it, and give you the hours back."
    }
  ];

  return (
    <section id="services" className="hs-section" aria-label="AI Services">
      
      <div className="hs-section-hdr">
        <div className="hs-section-hdr-left">
          <div className="hs-mono-label">[ 01&nbsp;&nbsp;WHAT WE AUTOMATE ]</div>
        </div>
        <m.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hs-hdr-rule" 
        />
        <div className="hs-section-hdr-right">
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hs-section-headline"
          >
            PIPELINES.<br/>NOT PROMISES.
          </m.h2>
        </div>
      </div>

      <div className="hs-card-grid">
        {services.map((service, i) => (
          <m.div 
            key={service.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="hs-card"
          >
            <div className="hs-card-num">{service.num}</div>
            <h3 className="hs-card-name">{service.title}</h3>
            <p className="hs-card-desc">{service.desc}</p>
            <div className="hs-card-arrow">→</div>
          </m.div>
        ))}
      </div>

      <m.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ borderTop: '1px solid #1E1E1E', marginTop: '56px', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}
      >
        <p style={{ fontSize: '17px', fontStyle: 'italic', color: '#555', maxWidth: '560px', lineHeight: '1.6', fontFamily: "var(--font-dm-sans), sans-serif" }}>
          &quot;We don&apos;t sell AI. We replace the manual work that&apos;s slowing your business down.&quot;
        </p>
        <button 
          className="hs-btn-ghost" 
          style={{ whiteSpace: 'nowrap' }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Book a Free Call →
        </button>
      </m.div>

    </section>
  );
}
