import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const DISPLAY = '"Cormorant Garamond", serif'
const SERIF = '"Noto Serif JP", serif'
const ease = [0.25, 0.46, 0.45, 0.94] as const

const hours = [
  { day: '月曜 — 金曜', time: '8:00 — 19:00', closed: false },
  { day: '土曜・日曜', time: '9:00 — 20:00', closed: false },
  { day: '定休日', time: '火曜日', closed: true },
]

const amenities = ['Wi-Fi完備', 'テラス席あり', '電源コンセントあり', 'テイクアウト可', '貸切可（要予約）']

export default function Access() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="access"
      style={{ padding: '128px 0', backgroundColor: '#111110', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(32px, 8vw, 96px)' }}>

        {/* Section header */}
        <div ref={ref} style={{ position: 'relative', marginBottom: '72px' }}>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-20px',
              textAlign: 'right',
              fontFamily: DISPLAY,
              fontSize: 'clamp(100px, 16vw, 180px)',
              fontWeight: 300,
              lineHeight: 1,
              color: '#1e1c1a',
              letterSpacing: '-0.06em',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            04
          </div>

          <div style={{ position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease }}
              style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '28px' }}
            >
              <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#b8986a' }} />
              <span style={{ fontFamily: DISPLAY, fontSize: '11px', letterSpacing: '0.5em', color: '#b8986a', textTransform: 'uppercase' as const, fontWeight: 400 }}>
                Access
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease, delay: 0.12 }}
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(1.9rem, 4.5vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.25,
                color: '#f7f3ed',
                margin: 0,
              }}
            >
              アクセス・営業時間
            </motion.h2>
          </div>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="access-grid">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 0.28 }}
          >
            <div
              style={{
                height: '380px',
                background: 'linear-gradient(155deg, #1a1916 0%, #2d2a26 100%)',
                border: '1px solid #2a2826',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Grid line decoration */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={`h${i}`}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '1px',
                    backgroundColor: '#2a2826',
                    top: `${(i + 1) * 16.6}%`,
                  }}
                />
              ))}
              {[...Array(3)].map((_, i) => (
                <div
                  key={`v${i}`}
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '1px',
                    backgroundColor: '#2a2826',
                    left: `${(i + 1) * 25}%`,
                  }}
                />
              ))}

              {/* Pin icon */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '1px solid rgba(184, 152, 106, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#b8986a' }} />
                </div>
              </div>
              <p
                style={{
                  position: 'relative',
                  zIndex: 1,
                  fontFamily: DISPLAY,
                  fontSize: '10px',
                  letterSpacing: '0.4em',
                  color: '#3a3836',
                  textTransform: 'uppercase',
                }}
              >
                Google Maps
              </p>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 0.38 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}
          >
            {/* Address */}
            <div>
              <p style={{ fontFamily: DISPLAY, fontSize: '10px', letterSpacing: '0.5em', color: '#b8986a', textTransform: 'uppercase' as const, marginBottom: '16px' }}>
                Location
              </p>
              <p style={{ fontFamily: SERIF, fontSize: '0.875rem', fontWeight: 300, color: '#f7f3ed', lineHeight: 2.2, letterSpacing: '0.04em' }}>
                〒604-8XXX<br />
                京都府京都市中京区○○町○○番地
              </p>
              <p style={{ fontFamily: SERIF, fontSize: '12px', fontWeight: 300, color: '#3a3836', marginTop: '8px', letterSpacing: '0.04em' }}>
                京都市営地下鉄「四条駅」より徒歩5分
              </p>
            </div>

            {/* Hours */}
            <div>
              <p style={{ fontFamily: DISPLAY, fontSize: '10px', letterSpacing: '0.5em', color: '#b8986a', textTransform: 'uppercase' as const, marginBottom: '20px' }}>
                Hours
              </p>
              <div>
                {hours.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      padding: '14px 0',
                      borderBottom: '1px solid #1e1c1a',
                    }}
                  >
                    <span style={{ fontFamily: SERIF, fontSize: '13px', fontWeight: 300, color: h.closed ? '#3a3836' : '#8a8278', letterSpacing: '0.05em' }}>
                      {h.day}
                    </span>
                    <span style={{ fontFamily: DISPLAY, fontSize: '1rem', fontWeight: 300, color: h.closed ? '#3a3836' : '#f7f3ed', letterSpacing: '0.06em' }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <p style={{ fontFamily: DISPLAY, fontSize: '10px', letterSpacing: '0.5em', color: '#b8986a', textTransform: 'uppercase' as const, marginBottom: '16px' }}>
                Facilities
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {amenities.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '7px 14px',
                      border: '1px solid #2a2826',
                      fontFamily: SERIF,
                      fontSize: '11px',
                      fontWeight: 300,
                      color: '#3a3836',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .access-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
