import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const menuItems = [
  {
    category: 'COFFEE',
    color: 'from-[#6b3f1e] to-[#2d1b0e]',
    items: [
      { name: 'エスプレッソ', price: '¥500', desc: '濃厚でコクのあるシングルショット' },
      { name: 'カフェラテ', price: '¥650', desc: 'まろやかなミルクフォームとエスプレッソ' },
      { name: 'フラットホワイト', price: '¥680', desc: 'ベルベットのような滑らかな口当たり' },
      { name: '季節のラテ', price: '¥750', desc: '旬のフルーツ・スパイスを使った限定メニュー' },
    ],
  },
  {
    category: 'FOOD',
    color: 'from-[#d4a574] to-[#6b3f1e]',
    items: [
      { name: 'アボカドトースト', price: '¥950', desc: '自家製パンに新鮮アボカドとポーチドエッグ' },
      { name: 'キッシュセット', price: '¥1,100', desc: '日替わりキッシュ＋サラダ＋スープ' },
      { name: 'パンケーキ', price: '¥1,050', desc: 'ふわふわの厚焼きに旬のベリーソース' },
      { name: '焼き野菜プレート', price: '¥1,200', desc: '地元農家の旬野菜をロースト' },
    ],
  },
  {
    category: 'SWEETS',
    color: 'from-[#e8c9a0] to-[#d4a574]',
    textDark: true,
    items: [
      { name: 'ガトーショコラ', price: '¥620', desc: '濃厚なチョコレートケーキ' },
      { name: 'ティラミス', price: '¥650', desc: 'マスカルポーネ香るイタリアン風' },
      { name: 'スコーン', price: '¥450', desc: '自家製クロテッドクリームと共に' },
      { name: '本日のタルト', price: '¥580', desc: '毎日変わるシェフのおすすめ' },
    ],
  },
]

export default function Menu() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="menu" className="py-24 bg-[#f5e6d3]/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a574] tracking-[0.3em] text-sm uppercase mb-3">Menu</p>
          <h2 className="text-[#2d1b0e] font-bold text-4xl mb-5">こだわりのメニュー</h2>
          <p className="text-[#6b3f1e]/70 text-base">
            季節の食材と厳選豆を使った、心と体に優しいメニューをご用意しています。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.map((category, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + ci * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-sm"
            >
              <div className={`bg-gradient-to-br ${category.color} p-6`}>
                <h3 className={`font-bold text-xl tracking-widest ${category.textDark ? 'text-[#2d1b0e]' : 'text-white'}`}>
                  {category.category}
                </h3>
              </div>
              <div className="bg-white p-6 flex flex-col gap-4">
                {category.items.map((item, ii) => (
                  <div key={ii} className="flex justify-between items-start gap-4 pb-4 border-b border-[#f5e6d3] last:border-0 last:pb-0">
                    <div>
                      <p className="text-[#2d1b0e] font-semibold text-sm">{item.name}</p>
                      <p className="text-[#6b3f1e]/60 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-[#6b3f1e] font-bold text-sm whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-[#6b3f1e]/50 text-xs mt-8"
        >
          ※ 価格は税込みです。メニューは季節により変更する場合があります。
        </motion.p>
      </div>
    </section>
  )
}
