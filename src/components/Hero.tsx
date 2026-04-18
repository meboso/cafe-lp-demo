import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1a0d05 0%, #2d1b0e 30%, #6b3f1e 65%, #d4a574 100%)',
        }}
      />
      {/* Overlay texture */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #d4a574 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #6b3f1e 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#d4a574] tracking-[0.4em] text-sm mb-6 uppercase"
        >
          Specialty Coffee &amp; Food
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white font-bold leading-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
        >
          一杯のコーヒーが、<br />
          <span className="text-[#d4a574]">特別な時間</span>をつくる。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#e8c9a0] text-lg mb-10 leading-relaxed"
        >
          豆の個性を活かしたスペシャルティコーヒーと、<br className="hidden sm:block" />
          素材にこだわった軽食をご用意しています。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="bg-[#d4a574] text-[#2d1b0e] font-bold px-10 py-4 rounded-full text-base hover:bg-[#e8c9a0] transition-all duration-300 hover:scale-105"
          >
            メニューを見る
          </a>
          <a
            href="#contact"
            className="border-2 border-[#d4a574] text-[#d4a574] font-bold px-10 py-4 rounded-full text-base hover:bg-[#d4a574]/10 transition-all duration-300"
          >
            ご予約・お問い合わせ
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#d4a574] text-xs tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-[#d4a574] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
