import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const DISPLAY = '"Cormorant Garamond", serif'
const SERIF = '"Noto Serif JP", serif'
const ease = [0.25, 0.46, 0.45, 0.94] as const

const BASE = 'https://images.unsplash.com/photo-'
const PARAMS = '?auto=format&fit=crop&w=900&q=82'

const photos = [
  { label: 'コーヒー', url: `${BASE}1521302080334-4bebac2763a6${PARAMS}` },
  { label: '店内の様子', url: `${BASE}1554118811-1e0d58224f24${PARAMS}` },
  { label: 'ラテアート', url: `${BASE}1541167760496-1628856ab772${PARAMS}` },
  { label: 'フードプレート', url: `${BASE}1490645935967-10de6ba17061${PARAMS}` },
  { label: 'バリスタ', url: `${BASE}1558618666-fcd25c85cd64${PARAMS}` },
  { label: 'カフェタイム', url: `${BASE}1509042239860-f550ce710b93${PARAMS}` },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="gallery"
      style={{ padding: '128px 0', backgroundColor: '#f7f3ed', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(32px, 8vw, 96px)' }}>

        {/* Section header */}
        <div ref={ref} style={{ position: 'relative', marginBottom: '64px' }}>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-40px',
              left: '-20px',
              fontFamily: DISPLAY,
              fontSize: 'clamp(100px, 16vw, 180px)',
              fontWeight: 300,
              lineHeight: 1,
              color: '#ede9e0',
              letterSpacing: '-0.06em',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            03
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
                Gallery
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
                color: '#0f0e0d',
                margin: 0,
              }}
            >
              CAFÉ SORAの風景
            </motion.h2>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.07 }}
              className={`gallery-item-${i}`}
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              {/* Background */}
              <img
                src={photo.url}
                alt={photo.label}
                className="gallery-bg"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              />

              {/* Hover overlay */}
              <div
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(15, 14, 13, 0)',
                  transition: 'background-color 0.5s ease',
                }}
              />

              {/* Corner brackets */}
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  width: '18px',
                  height: '18px',
                  borderTop: '1px solid rgba(255,255,255,0.2)',
                  borderLeft: '1px solid rgba(255,255,255,0.2)',
                  transition: 'border-color 0.4s',
                }}
                className="bracket-tl"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  right: '14px',
                  width: '18px',
                  height: '18px',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  borderRight: '1px solid rgba(255,255,255,0.2)',
                  transition: 'border-color 0.4s',
                }}
                className="bracket-br"
              />

              {/* Label */}
              <div
                className="gallery-label"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '16px 20px',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: '13px',
                    fontWeight: 400,
                    color: 'rgba(247, 243, 237, 0.95)',
                    letterSpacing: '0.18em',
                    margin: 0,
                  }}
                >
                  {photo.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          style={{
            textAlign: 'center',
            marginTop: '28px',
            fontFamily: SERIF,
            fontSize: '13px',
            fontWeight: 400,
            color: '#a09890',
          }}
        >
          ※ 実際のサイトでは本物の写真に差し替えます
        </motion.p>
      </div>

      <style>{`
        .gallery-grid > div:hover .gallery-bg { transform: scale(1.06); }
        .gallery-grid > div:hover .gallery-overlay { background-color: rgba(15, 14, 13, 0.32) !important; }
        .gallery-grid > div:hover .gallery-label { transform: translateY(0) !important; }
        .gallery-grid > div:hover .bracket-tl,
        .gallery-grid > div:hover .bracket-br {
          border-color: rgba(255,255,255,0.5) !important;
        }
      `}</style>
    </section>
  )
}
