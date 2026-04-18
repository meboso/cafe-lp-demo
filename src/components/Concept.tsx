import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: '☕',
    title: 'スペシャルティコーヒー',
    desc: '世界各地から厳選した豆を、焙煎したてでご提供。バリスタが一杯ずつ丁寧に抽出します。',
  },
  {
    icon: '🌿',
    title: '国産素材にこだわった食事',
    desc: '地元農家から直接仕入れた新鮮野菜を使用。季節ごとに変わるメニューをお楽しみください。',
  },
  {
    icon: '🏡',
    title: 'ゆったりとした空間',
    desc: '古民家をリノベーションした温かみのある店内。仕事にも、読書にも、デートにも。',
  },
]

export default function Concept() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="concept" className="py-24 bg-[#fafaf7]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a574] tracking-[0.3em] text-sm uppercase mb-3">Our Concept</p>
          <h2 className="text-[#2d1b0e] font-bold text-4xl mb-5">
            日常に、ほっとする<span className="text-[#6b3f1e]">ひとときを。</span>
          </h2>
          <p className="text-[#6b3f1e]/70 text-base max-w-xl mx-auto leading-relaxed">
            2018年に地元・京都の路地裏に誕生したCAFÉ SORA。<br />
            「空」のように開放的で、心が軽くなる場所でありたいと願っています。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[#f5e6d3]"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-[#2d1b0e] font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-[#6b3f1e]/70 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
