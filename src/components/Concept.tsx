import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const DISPLAY = '"Cormorant Garamond", serif'
const SERIF = '"Noto Serif JP", serif'
const ease = [0.25, 0.46, 0.45, 0.94] as const

const features = [
  {
    num: 'I',
    titleEn: 'Specialty Coffee',
    title: 'スペシャルティコーヒー',
    desc: '世界各地から厳選した豆を、焙煎したてでご提供。バリスタが一杯ずつ丁寧に抽出します。',
  },
  {
    num: 'II',
    titleEn: 'Farm-to-Table',
    title: '国産素材の食事',
    desc: '地元農家から直接仕入れた新鮮野菜を使用。季節ごとに変わるメニューをお楽しみください。',
  },
  {
    num: 'III',
    titleEn: 'Intimate Space',
    title: 'ゆったりとした空間',
    desc: '古民家をリノベーションした温かみのある店内。仕事にも、読書にも、大切な時間にも。',
  },
]

export default function Concept() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="concept"
      style={{ padding: '128px 0', backgroundColor: '#f7f3ed', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(32px, 8vw, 96px)' }}>

        {/* Section header */}
        <div ref={ref} style={{ position: 'relative', marginBottom: '80px' }}>
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
            01
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
                Our Concept
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
                letterSpacing: '-0.01em',
                margin: 0,
              }}
            >
              日常に、ほっとする<br />
              <span style={{ color: '#8a8278' }}>ひとときを。</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.26 }}
              style={{
                fontFamily: SERIF,
                fontSize: '13px',
                fontWeight: 300,
                lineHeight: 2.3,
                color: '#8a8278',
                letterSpacing: '0.05em',
                marginTop: '24px',
                maxWidth: '480px',
              }}
            >
              2018年に地元・京都の路地裏に誕生したCAFÉ SORA。<br />
              「空」のように開放的で、心が軽くなる場所でありたいと願っています。
            </motion.p>
          </div>
        </div>

        {/* Feature list */}
        <div style={{ borderTop: '1px solid #c5bdb4' }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.38 + i * 0.14 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 1fr',
                gap: '40px',
                alignItems: 'start',
                padding: '36px 0',
                borderBottom: '1px solid #e0dbd1',
              }}
              className="concept-row"
            >
              {/* Roman numeral */}
              <span
                style={{
                  fontFamily: DISPLAY,
                  fontSize: '2.4rem',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: '#c5bdb4',
                  letterSpacing: '0.08em',
                }}
              >
                {f.num}
              </span>

              {/* Title */}
              <div>
                <p style={{ fontFamily: DISPLAY, fontSize: '10px', letterSpacing: '0.45em', color: '#8a8278', textTransform: 'uppercase' as const, marginBottom: '10px' }}>
                  {f.titleEn}
                </p>
                <h3 style={{ fontFamily: SERIF, fontSize: '1rem', fontWeight: 500, color: '#0f0e0d', lineHeight: 1.5, margin: 0 }}>
                  {f.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{ fontFamily: SERIF, fontSize: '13px', fontWeight: 300, color: '#8a8278', lineHeight: 2.1, letterSpacing: '0.04em', margin: 0 }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .concept-row { grid-template-columns: 48px 1fr !important; }
          .concept-row > *:last-child { grid-column: 2 / 3; }
        }
      `}</style>
    </section>
  )
}
