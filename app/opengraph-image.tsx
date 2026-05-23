import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Hisako — AI Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ color: '#F5F5F0', fontSize: '14px', letterSpacing: '0.2em' }}>
            HISAKO
          </div>
          <div style={{ width: '1px', height: '14px', background: '#2A2A2A' }} />
          <div style={{ color: '#555', fontSize: '11px', letterSpacing: '0.15em' }}>
            AI AGENCY
          </div>
        </div>
        <div>
          <div
            style={{
              color: '#F5F5F0',
              fontSize: '88px',
              fontWeight: 900,
              lineHeight: 0.87,
              letterSpacing: '-0.02em',
            }}
          >
            ENGINEER
            YOUR WORLD.
          </div>
          <div
            style={{
              color: '#555',
              fontSize: '20px',
              marginTop: '28px',
              letterSpacing: '0.02em',
            }}
          >
            Custom AI Agents · LLM Integration · Workflow Automation
          </div>
        </div>
        <div style={{ color: '#333', fontSize: '13px', letterSpacing: '0.15em' }}>
          HISAKO.EU
        </div>
      </div>
    ),
    { ...size }
  )
}
