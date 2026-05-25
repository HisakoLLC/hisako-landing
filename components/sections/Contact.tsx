'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// TODO: Replace with your actual Calendly URL
// Format: https://calendly.com/[username]/[event-name]
const CALENDLY_URL = 'https://calendly.com/hello-hisako/30min'

function openCalendly() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).Calendly.initPopupWidget({ url: CALENDLY_URL })
  }
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={ref}
      aria-label="Book a Call"
      style={{ background: '#FFFFFF', padding: '160px 0' }}
    >
      <div className="hs-hero-container">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: '10px',
            color: '#888',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          [ 05&nbsp;&nbsp;BOOK A CALL ]
        </motion.div>

        {/* Two column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}>

          {/* LEFT — headline + copy + details */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-bebas-neue), sans-serif',
                fontSize: 'clamp(3rem, 5vw, 5.5rem)',
                lineHeight: 0.88,
                color: '#0A0A0A',
                marginBottom: '28px',
              }}
            >
              LET&apos;S BUILD<br />
              SOMETHING<br />
              SERIOUS.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '15px',
                color: '#555',
                lineHeight: 1.8,
                maxWidth: '400px',
                marginBottom: '48px',
              }}
            >
              Pick a time that works. 30 minutes to map where AI automation
              creates the most leverage in your operations.
              No pitch. No commitment.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              {[
                { label: 'EMAIL', value: 'hello@hisako.eu' },
                { label: 'LOCATION', value: 'Nairobi, Kenya' },
                { label: 'AVAILABILITY', value: 'Open to AI Projects' },
              ].map(({ label, value }) => (
                <div key={label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-jetbrains-mono), monospace',
                    fontSize: '9px',
                    color: '#666',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    width: '100px',
                  }}>
                    {label}
                  </span>
                  <span style={{ color: '#666', fontSize: '12px', margin: '0 14px' }}>→</span>
                  <span style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '13px',
                    color: '#555',
                  }}>
                    {value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ display: 'flex', gap: '24px', marginTop: '28px' }}
            >
              {['LINKEDIN', 'GITHUB'].map((link) => (
                <span key={link} style={{
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontSize: '9px',
                  color: '#666',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}>
                  {link}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — CTA block */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              border: '1px solid #E5E5E5',
              padding: '56px 48px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            {/* What to expect */}
            <div>
              <div style={{
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: '9px',
                color: '#888',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                [ WHAT TO EXPECT ]
              </div>

              {[
                { time: '0–10 min', desc: 'You walk us through your current operations' },
                { time: '10–20 min', desc: 'We identify the highest-leverage automation opportunities' },
                { time: '20–30 min', desc: 'We outline what a pipeline solution looks like for you' },
              ].map(({ time, desc }) => (
                <div key={time} style={{
                  display: 'flex',
                  gap: '20px',
                  paddingBottom: '16px',
                  marginBottom: '16px',
                  borderBottom: '1px solid #E5E5E5',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-jetbrains-mono), monospace',
                    fontSize: '9px',
                    color: '#888',
                    letterSpacing: '0.08em',
                    whiteSpace: 'nowrap',
                    paddingTop: '2px',
                    minWidth: '60px',
                  }}>
                    {time}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '13px',
                    color: '#555',
                    lineHeight: 1.6,
                  }}>
                    {desc}
                  </span>
                </div>
              ))}
            </div>

            {/* THE BUTTON */}
            <button
              onClick={openCalendly}
              style={{
                background: '#0A0A0A',
                color: '#FFFFFF',
                border: '1px solid #0A0A0A',
                height: '52px',
                width: '100%',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 500,
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#0A0A0A'
                e.currentTarget.style.border = '1px solid #0A0A0A'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0A0A0A'
                e.currentTarget.style.color = '#FFFFFF'
                e.currentTarget.style.border = '1px solid #0A0A0A'
              }}
            >
              Book a Free Strategy Call →
            </button>

            <p style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: '9px',
              color: '#666',
              letterSpacing: '0.1em',
              textAlign: 'center',
              margin: '-16px 0 0',
            }}>
              30 MINUTES · NO COMMITMENT · FREE
            </p>
          </motion.div>

        </div>

        {/* Horizontal rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
          style={{
            width: '100%',
            height: '1px',
            background: '#E5E5E5',
            transformOrigin: 'left',
            marginTop: '80px',
          }}
        />

      </div>
    </section>
  )
}
