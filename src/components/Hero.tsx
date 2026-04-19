import { motion } from 'framer-motion'

const DISPLAY = '"Cormorant Garamond", serif'
const SERIF = '"Noto Serif JP", serif'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#f7f3ed',
        overflow: 'hidden',
        display: 'flex',
      }}
    >
      {/* Background section numeral */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-40px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: DISPLAY,
          fontSize: 'clamp(200px, 28vw, 380px)',
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

      {/* Left text panel */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(100px, 12vw, 140px) clamp(32px, 8vw, 96px) 80px',
          width: '100%',
          maxWidth: '60%',
        }}
        className="hero-left"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease }}
          style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '56px' }}
        >
          <span style={{ display: 'block', width: '48px', height: '1px', backgroundColor: '#b8986a' }} />
          <span
            style={{
              fontFamily: DISPLAY,
              fontSize: '10px',
              letterSpacing: '0.55em',
              color: '#b8986a',
              textTransform: 'uppercase',
              fontWeight: 400,
            }}
          >
            Specialty Coffee &amp; Food
          </span>
        </motion.div>

        {/* Headline */}
        <div style={{ marginBottom: '36px' }}>
          {['一杯の', 'コーヒーが、'].map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.0, ease, delay: 0.1 + i * 0.13 }}
                style={{
                  fontFamily: DISPLAY,
                  fontSize: 'clamp(2.8rem, 7vw, 7rem)',
                  fontWeight: 300,
                  lineHeight: 1.06,
                  letterSpacing: '-0.015em',
                  color: '#0f0e0d',
                  margin: 0,
                }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.0, ease, delay: 0.36 }}
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(1.6rem, 4vw, 3.8rem)',
                fontWeight: 300,
                lineHeight: 1.35,
                letterSpacing: '0.02em',
                color: '#b8986a',
                margin: 0,
              }}
            >
              特別な時間をつくる。
            </motion.h1>
          </div>
        </div>

        {/* Animated rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.65, ease }}
          style={{
            height: '1px',
            backgroundColor: '#c5bdb4',
            maxWidth: '320px',
            marginBottom: '32px',
            transformOrigin: 'left center',
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            fontFamily: SERIF,
            fontSize: '13px',
            fontWeight: 300,
            lineHeight: 2.2,
            color: '#8a8278',
            letterSpacing: '0.05em',
            marginBottom: '52px',
            maxWidth: '360px',
          }}
        >
          豆の個性を活かしたスペシャルティコーヒーと、<br />
          素材にこだわった軽食をご用意しています。
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{ display: 'flex', alignItems: 'center', gap: '48px' }}
        >
          {[
            { href: '#menu', label: 'メニューを見る', accent: false },
            { href: '#contact', label: 'ご予約はこちら', accent: true },
          ].map(({ href, label, accent }) => (
            <a
              key={href}
              href={href}
              className="cta-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                textDecoration: 'none',
              }}
            >
              <span
                className="cta-rule"
                style={{
                  display: 'block',
                  width: '32px',
                  height: '1px',
                  backgroundColor: accent ? '#b8986a' : '#0f0e0d',
                  transition: 'width 0.4s ease',
                }}
              />
              <span
                style={{
                  fontFamily: DISPLAY,
                  fontSize: '11px',
                  letterSpacing: '0.25em',
                  color: accent ? '#b8986a' : '#0f0e0d',
                  textTransform: 'uppercase',
                }}
              >
                {label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Right decorative panel */}
      <div
        className="hero-right"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '42%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.35, ease }}
          style={{ position: 'relative', width: '380px', height: '380px' }}
        >
          {/* Outer ring */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px solid #c5bdb4',
            }}
          />
          {/* Inner ring with photo */}
          <div
            style={{
              position: 'absolute',
              inset: '44px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid rgba(197,189,180,0.5)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=500&q=80"
              alt="specialty coffee"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: 0.72,
              }}
            />
            {/* Text overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundColor: 'rgba(15, 14, 13, 0.22)',
              }}
            >
              <span
                style={{
                  fontFamily: DISPLAY,
                  fontSize: '56px',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: 'rgba(247, 243, 237, 0.92)',
                  letterSpacing: '0.12em',
                }}
              >
                SORA
              </span>
              <span
                style={{
                  fontFamily: SERIF,
                  fontSize: '16px',
                  fontWeight: 300,
                  color: 'rgba(247, 243, 237, 0.65)',
                  letterSpacing: '0.3em',
                  marginTop: '8px',
                }}
              >
                空
              </span>
            </div>
          </div>

          {/* Rotating badge text */}
          <motion.svg
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            viewBox="0 0 380 380"
            animate={{ rotate: 360 }}
            transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          >
            <defs>
              <path
                id="badge-path"
                d="M 190,190 m -158,0 a 158,158 0 1,1 316,0 a 158,158 0 1,1 -316,0"
              />
            </defs>
            <text
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '9px',
              }}
              fill="#8a8278"
            >
              <textPath href="#badge-path">
                SPECIALTY COFFEE ✦ KYOTO ✦ EST. 2018 ✦ SPECIALTY COFFEE ✦ KYOTO ✦
              </textPath>
            </text>
          </motion.svg>

        </motion.div>

        {/* Vertical label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            writingMode: 'vertical-rl',
          }}
        >
          <span
            style={{
              fontFamily: DISPLAY,
              fontSize: '9px',
              letterSpacing: '0.45em',
              color: '#c5bdb4',
              textTransform: 'uppercase',
            }}
          >
            Kyoto · Japan
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: 'clamp(32px, 8vw, 96px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, #b8986a, transparent)',
            transformOrigin: 'top center',
          }}
        />
        <span
          style={{
            fontFamily: DISPLAY,
            fontSize: '8px',
            letterSpacing: '0.55em',
            color: '#8a8278',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
      </motion.div>

      <style>{`
        @media (max-width: 1023px) {
          .hero-left { max-width: 100% !important; }
          .hero-right { display: none !important; }
        }
        .cta-link:hover .cta-rule { width: 56px !important; }
      `}</style>
    </section>
  )
}
