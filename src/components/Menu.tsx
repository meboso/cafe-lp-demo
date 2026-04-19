import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const DISPLAY = '"Cormorant Garamond", serif'
const SERIF = '"Noto Serif JP", serif'
const ease = [0.25, 0.46, 0.45, 0.94] as const

const categories = [
  {
    name: 'COFFEE',
    nameJa: 'コーヒー',
    items: [
      { name: 'エスプレッソ', desc: '濃厚でコクのあるシングルショット', price: '¥500' },
      { name: 'カフェラテ', desc: 'まろやかなミルクフォームとエスプレッソ', price: '¥650' },
      { name: 'フラットホワイト', desc: 'ベルベットのような滑らかな口当たり', price: '¥680' },
      { name: '季節のラテ', desc: '旬のフルーツ・スパイスを使った限定メニュー', price: '¥750' },
    ],
  },
  {
    name: 'FOOD',
    nameJa: 'フード',
    items: [
      { name: 'アボカドトースト', desc: '自家製パンに新鮮アボカドとポーチドエッグ', price: '¥950' },
      { name: 'キッシュセット', desc: '日替わりキッシュ＋サラダ＋スープ', price: '¥1,100' },
      { name: 'パンケーキ', desc: 'ふわふわの厚焼きに旬のベリーソース', price: '¥1,050' },
      { name: '焼き野菜プレート', desc: '地元農家の旬野菜をロースト', price: '¥1,200' },
    ],
  },
  {
    name: 'SWEETS',
    nameJa: 'スイーツ',
    items: [
      { name: 'ガトーショコラ', desc: '濃厚なチョコレートケーキ', price: '¥620' },
      { name: 'ティラミス', desc: 'マスカルポーネ香るイタリアン風', price: '¥650' },
      { name: 'スコーン', desc: '自家製クロテッドクリームと共に', price: '¥450' },
      { name: '本日のタルト', desc: '毎日変わるシェフのおすすめ', price: '¥580' },
    ],
  },
]

export default function Menu() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="menu"
      style={{ padding: '128px 0', backgroundColor: '#ede9e0', overflow: 'hidden' }}
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
              color: '#e0dbd1',
              letterSpacing: '-0.06em',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            02
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
                Menu
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
              こだわりのメニュー
            </motion.h2>
          </div>
        </div>

        {/* Menu categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease, delay: 0.28 + ci * 0.14 }}
            >
              {/* Category heading */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid #c5bdb4',
                  marginBottom: '8px',
                }}
              >
                <span style={{ fontFamily: DISPLAY, fontSize: '2rem', fontWeight: 300, color: '#0f0e0d', letterSpacing: '0.22em' }}>
                  {cat.name}
                </span>
                <span style={{ fontFamily: SERIF, fontSize: '11px', fontWeight: 300, color: '#8a8278', letterSpacing: '0.2em' }}>
                  {cat.nameJa}
                </span>
              </div>

              {/* Items grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0' }}>
                {cat.items.map((item, ii) => (
                  <div
                    key={ii}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '16px',
                      padding: '18px 0 18px',
                      borderBottom: '1px solid #e0dbd1',
                    }}
                    className={`menu-item-${ii % 2 === 0 ? 'odd' : 'even'}`}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span
                        style={{
                          display: 'block',
                          fontFamily: SERIF,
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          color: '#0f0e0d',
                          letterSpacing: '0.04em',
                          marginBottom: '4px',
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        style={{
                          display: 'block',
                          fontFamily: SERIF,
                          fontSize: '11px',
                          fontWeight: 300,
                          color: '#8a8278',
                          lineHeight: 1.7,
                          letterSpacing: '0.02em',
                        }}
                      >
                        {item.desc}
                      </span>
                    </div>
                    <span
                      style={{
                        flexShrink: 0,
                        fontFamily: DISPLAY,
                        fontSize: '1.1rem',
                        fontWeight: 300,
                        color: '#b8986a',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          style={{
            marginTop: '48px',
            textAlign: 'center',
            fontFamily: SERIF,
            fontSize: '11px',
            fontWeight: 300,
            color: '#c5bdb4',
            letterSpacing: '0.12em',
          }}
        >
          ※ 価格は税込みです。メニューは季節により変更する場合があります。
        </motion.p>
      </div>
    </section>
  )
}
