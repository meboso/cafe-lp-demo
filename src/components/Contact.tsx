import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const DISPLAY = '"Cormorant Garamond", serif'
const SERIF = '"Noto Serif JP", serif'
const ease = [0.25, 0.46, 0.45, 0.94] as const

const inputBase: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid #c5bdb4',
  padding: '12px 0',
  fontFamily: SERIF,
  fontSize: '14px',
  fontWeight: 300,
  color: '#0f0e0d',
  outline: 'none',
  transition: 'border-color 0.3s',
  letterSpacing: '0.04em',
}

const labelBase: React.CSSProperties = {
  fontFamily: DISPLAY,
  fontSize: '10px',
  letterSpacing: '0.45em',
  color: '#8a8278',
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: '10px',
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', date: '', people: '2名', message: '' })

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderBottomColor = '#0f0e0d'
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderBottomColor = '#c5bdb4'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      style={{ padding: '128px 0', backgroundColor: '#f7f3ed', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 clamp(32px, 8vw, 64px)' }}>

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
              color: '#ede9e0',
              letterSpacing: '-0.06em',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            05
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
                Contact
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
              ご予約・お問い合わせ
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.26 }}
              style={{
                fontFamily: SERIF,
                fontSize: '13px',
                fontWeight: 300,
                lineHeight: 2.1,
                color: '#8a8278',
                letterSpacing: '0.04em',
                marginTop: '20px',
              }}
            >
              ご予約は前日18時まで受け付けています。当日のご利用は直接ご来店ください。
            </motion.p>
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease, delay: 0.38 }}
        >
          {submitted ? (
            <div
              style={{
                padding: '80px 0',
                textAlign: 'center',
                borderTop: '1px solid #c5bdb4',
                borderBottom: '1px solid #c5bdb4',
              }}
            >
              <p
                style={{
                  fontFamily: DISPLAY,
                  fontSize: '3.5rem',
                  fontWeight: 300,
                  color: '#b8986a',
                  marginBottom: '20px',
                  lineHeight: 1,
                }}
              >
                ✓
              </p>
              <h3
                style={{
                  fontFamily: DISPLAY,
                  fontSize: '1.6rem',
                  fontWeight: 300,
                  color: '#0f0e0d',
                  marginBottom: '16px',
                  letterSpacing: '0.05em',
                }}
              >
                送信が完了しました
              </h3>
              <p style={{ fontFamily: SERIF, fontSize: '13px', fontWeight: 300, color: '#8a8278', lineHeight: 2.2 }}>
                ご連絡いただきありがとうございます。<br />
                2営業日以内にご返信いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ borderTop: '1px solid #c5bdb4' }}>
              <div
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 48px', paddingTop: '40px' }}
                className="contact-grid"
              >
                <div>
                  <label style={labelBase}>お名前 *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputBase}
                    placeholder="山田 太郎"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <label style={labelBase}>メールアドレス *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputBase}
                    placeholder="example@email.com"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <label style={labelBase}>希望日時</label>
                  <input
                    type="datetime-local"
                    value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                    style={inputBase}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <label style={labelBase}>人数</label>
                  <select
                    value={form.people}
                    onChange={e => setForm({ ...form, people: e.target.value })}
                    style={{ ...inputBase, cursor: 'pointer' }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  >
                    {['1名', '2名', '3名', '4名', '5名以上'].map(p => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelBase}>メッセージ</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputBase, resize: 'none', paddingTop: '12px' }}
                    placeholder="アレルギーや特別なご要望がございましたらご記入ください。"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e0dbd1' }}>
                <button
                  type="submit"
                  className="submit-btn"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: 0,
                  }}
                >
                  <span
                    className="submit-rule"
                    style={{
                      display: 'block',
                      width: '40px',
                      height: '1px',
                      backgroundColor: '#0f0e0d',
                      transition: 'width 0.4s ease',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '13px',
                      letterSpacing: '0.35em',
                      color: '#0f0e0d',
                      textTransform: 'uppercase',
                    }}
                  >
                    送信する
                  </span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 639px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        .submit-btn:hover .submit-rule { width: 72px !important; }
        input::placeholder, textarea::placeholder {
          color: #c5bdb4;
          font-weight: 300;
        }
      `}</style>
    </section>
  )
}
