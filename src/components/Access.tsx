import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const hours = [
  { day: '月〜金', time: '8:00 – 19:00' },
  { day: '土・日', time: '9:00 – 20:00' },
  { day: '定休日', time: '火曜日' },
]

export default function Access() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="access" className="py-24 bg-[#2d1b0e]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a574] tracking-[0.3em] text-sm uppercase mb-3">Access</p>
          <h2 className="text-white font-bold text-4xl">アクセス・営業時間</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="w-full rounded-2xl overflow-hidden"
              style={{ height: 320, background: 'linear-gradient(135deg, #1a0d05 0%, #6b3f1e 100%)' }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                <span className="text-5xl">📍</span>
                <p className="text-[#e8c9a0] text-sm">Google Mapsが表示されます</p>
                <p className="text-[#d4a574]/60 text-xs">（実装時はAPIキーを設定）</p>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-[#d4a574] text-sm tracking-widest uppercase mb-4">所在地</h3>
              <p className="text-white text-base leading-relaxed">
                〒604-8XXX<br />
                京都府京都市中京区○○町○○番地<br />
                ○○ビル 1F
              </p>
              <p className="text-[#e8c9a0]/60 text-sm mt-2">
                京都市営地下鉄「四条駅」より徒歩5分
              </p>
            </div>

            <div>
              <h3 className="text-[#d4a574] text-sm tracking-widest uppercase mb-4">営業時間</h3>
              <div className="flex flex-col gap-3">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-[#6b3f1e]/30">
                    <span className="text-[#e8c9a0] text-sm">{h.day}</span>
                    <span className={`text-sm font-medium ${h.day === '定休日' ? 'text-[#d4a574]/60' : 'text-white'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#d4a574] text-sm tracking-widest uppercase mb-4">その他</h3>
              <div className="flex flex-wrap gap-2">
                {['Wi-Fi完備', 'テラス席あり', '電源コンセントあり', 'テイクアウト可', '貸切可（要予約）'].map((tag) => (
                  <span key={tag} className="bg-[#6b3f1e]/40 text-[#e8c9a0] text-xs px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
