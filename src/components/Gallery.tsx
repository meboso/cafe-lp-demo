import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const photos = [
  { id: 1, seed: 'coffee-cup', label: 'エスプレッソ', color: '#3d2010' },
  { id: 2, seed: 'cafe-interior', label: '店内の様子', color: '#5a3820' },
  { id: 3, seed: 'latte-art', label: 'ラテアート', color: '#8b5e3c' },
  { id: 4, seed: 'food-plate', label: 'アボカドトースト', color: '#6b4c2a' },
  { id: 5, seed: 'pastry', label: 'スコーン', color: '#c4956a' },
  { id: 6, seed: 'cafe-terrace', label: 'テラス席', color: '#4a2d14' },
]

const gradients = [
  'linear-gradient(135deg, #2d1b0e 0%, #6b3f1e 100%)',
  'linear-gradient(135deg, #6b3f1e 0%, #d4a574 100%)',
  'linear-gradient(135deg, #d4a574 0%, #e8c9a0 100%)',
  'linear-gradient(135deg, #3d2010 0%, #8b5e3c 100%)',
  'linear-gradient(135deg, #8b5e3c 0%, #c4956a 100%)',
  'linear-gradient(135deg, #2d1b0e 0%, #4a2d14 100%)',
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="gallery" className="py-24 bg-[#fafaf7]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a574] tracking-[0.3em] text-sm uppercase mb-3">Gallery</p>
          <h2 className="text-[#2d1b0e] font-bold text-4xl mb-5">CAFÉ SORAの風景</h2>
          <p className="text-[#6b3f1e]/70 text-base">
            店内の様子や、毎日丁寧に作るコーヒーと料理をご覧ください。
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="relative group overflow-hidden rounded-xl aspect-square"
            >
              <div
                className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                style={{ background: gradients[i] }}
              />
              {/* Overlay with label */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <p className="w-full text-white text-sm font-medium px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {photo.label}
                </p>
              </div>
              {/* Decorative icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="text-white text-5xl">
                  {['☕', '🏡', '✨', '🍳', '🥐', '🌿'][i]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-[#6b3f1e]/40 text-xs mt-6"
        >
          ※ 実際のサイトでは本物の写真に差し替えます
        </motion.p>
      </div>
    </section>
  )
}
