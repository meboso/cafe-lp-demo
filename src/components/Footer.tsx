const DISPLAY = '"Cormorant Garamond", serif'
const SERIF = '"Noto Serif JP", serif'

const navLinks = [
  { label: 'コンセプト', href: '#concept' },
  { label: 'メニュー', href: '#menu' },
  { label: 'ギャラリー', href: '#gallery' },
  { label: 'アクセス', href: '#access' },
]

const socialLinks = ['Instagram', 'Twitter', 'LINE']

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d0c0b', padding: '72px clamp(32px, 8vw, 96px)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '48px',
            paddingBottom: '48px',
            borderBottom: '1px solid #1e1c1a',
          }}
          className="footer-top"
        >
          {/* Brand */}
          <div>
            <a href="#" style={{ textDecoration: 'none', display: 'block' }}>
              <span
                style={{
                  fontFamily: DISPLAY,
                  fontSize: '1.7rem',
                  fontWeight: 300,
                  letterSpacing: '0.32em',
                  color: '#f7f3ed',
                  fontVariant: 'small-caps',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Café Sora
              </span>
            </a>
            <span
              style={{
                fontFamily: DISPLAY,
                fontSize: '9px',
                letterSpacing: '0.45em',
                color: '#3a3836',
                textTransform: 'uppercase',
              }}
            >
              Specialty Coffee &amp; Food · Kyoto
            </span>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '64px' }} className="footer-links">
            <div>
              <p
                style={{
                  fontFamily: DISPLAY,
                  fontSize: '9px',
                  letterSpacing: '0.5em',
                  color: '#b8986a',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                Navigation
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {navLinks.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="footer-link"
                      style={{
                        textDecoration: 'none',
                        fontFamily: SERIF,
                        fontSize: '12px',
                        fontWeight: 300,
                        color: '#3a3836',
                        letterSpacing: '0.1em',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#8a8278')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#3a3836')}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                style={{
                  fontFamily: DISPLAY,
                  fontSize: '9px',
                  letterSpacing: '0.5em',
                  color: '#b8986a',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                Contact
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: '075-000-0000', href: 'tel:075-000-0000' },
                  { label: 'info@cafe-sora.jp', href: 'mailto:info@cafe-sora.jp' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    style={{
                      textDecoration: 'none',
                      fontFamily: DISPLAY,
                      fontSize: '13px',
                      fontWeight: 300,
                      color: '#3a3836',
                      letterSpacing: '0.06em',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#8a8278')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#3a3836')}
                  >
                    {label}
                  </a>
                ))}

                <div style={{ display: 'flex', gap: '20px', marginTop: '8px' }}>
                  {socialLinks.map(sns => (
                    <span
                      key={sns}
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: '9px',
                        letterSpacing: '0.25em',
                        color: '#2a2826',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#3a3836')}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#2a2826')}
                    >
                      {sns}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#2a2826',
            }}
          >
            © 2024 CAFÉ SORA. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: '10px',
              fontWeight: 300,
              color: '#1e1c1a',
            }}
          >
            ※ これはポートフォリオ用のデモサイトです
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-top { flex-direction: column !important; }
          .footer-links { gap: 40px !important; }
        }
      `}</style>
    </footer>
  )
}
