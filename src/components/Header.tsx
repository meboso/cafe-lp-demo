import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DISPLAY = '"Cormorant Garamond", serif'
const SERIF = '"Noto Serif JP", serif'

const navItems = [
  { label: 'コンセプト', href: '#concept' },
  { label: 'メニュー', href: '#menu' },
  { label: 'ギャラリー', href: '#gallery' },
  { label: 'アクセス', href: '#access' },
  { label: 'お問い合わせ', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.5s ease',
        backgroundColor: scrolled ? 'rgba(247, 243, 237, 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #e0dbd1' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1, gap: '3px' }}>
          <span
            style={{
              fontFamily: DISPLAY,
              fontSize: '22px',
              fontWeight: 300,
              letterSpacing: '0.28em',
              color: '#0f0e0d',
              fontVariant: 'small-caps',
            }}
          >
            Café Sora
          </span>
          <span
            style={{
              fontFamily: DISPLAY,
              fontSize: '9px',
              letterSpacing: '0.45em',
              color: '#8a8278',
              textTransform: 'uppercase',
            }}
          >
            Kyoto · Est. 2018
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '40px' }} className="md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group"
              style={{
                position: 'relative',
                textDecoration: 'none',
                fontFamily: SERIF,
                fontSize: '12px',
                fontWeight: 300,
                letterSpacing: '0.18em',
                color: '#8a8278',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0f0e0d')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8a8278')}
            >
              {item.label}
              <span
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  width: 0,
                  height: '1px',
                  backgroundColor: '#b8986a',
                  transition: 'width 0.35s ease',
                }}
                className="nav-underline"
              />
            </a>
          ))}
          <a
            href="#contact"
            style={{
              textDecoration: 'none',
              fontFamily: DISPLAY,
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.25em',
              color: '#f7f3ed',
              backgroundColor: '#0f0e0d',
              padding: '10px 24px',
              textTransform: 'uppercase',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b8986a')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0f0e0d')}
          >
            ご予約
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
        >
          <div style={{ width: '24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  height: '1px',
                  backgroundColor: '#0f0e0d',
                  transition: 'all 0.3s',
                  transform:
                    i === 0 && menuOpen ? 'rotate(45deg) translate(5px, 5px)' :
                    i === 1 && menuOpen ? 'scaleX(0)' :
                    i === 2 && menuOpen ? 'rotate(-45deg) translate(5px, -5px)' :
                    'none',
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              overflow: 'hidden',
              backgroundColor: '#f7f3ed',
              borderTop: '1px solid #e0dbd1',
            }}
            className="md:hidden"
          >
            <nav style={{ display: 'flex', flexDirection: 'column', padding: '24px 32px', gap: '0' }}>
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    fontFamily: SERIF,
                    fontSize: '13px',
                    fontWeight: 300,
                    letterSpacing: '0.18em',
                    color: '#8a8278',
                    padding: '16px 0',
                    borderBottom: '1px solid #e0dbd1',
                    transition: 'color 0.3s',
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  marginTop: '20px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontFamily: DISPLAY,
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.3em',
                  color: '#f7f3ed',
                  backgroundColor: '#0f0e0d',
                  padding: '14px',
                  textTransform: 'uppercase',
                }}
              >
                ご予約はこちら
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .group:hover .nav-underline { width: 100% !important; }
      `}</style>
    </header>
  )
}
