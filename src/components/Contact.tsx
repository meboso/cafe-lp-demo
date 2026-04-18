import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', date: '', people: '2名', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#f5e6d3]/40">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-[#d4a574] tracking-[0.3em] text-sm uppercase mb-3">Contact</p>
          <h2 className="text-[#2d1b0e] font-bold text-4xl mb-5">ご予約・お問い合わせ</h2>
          <p className="text-[#6b3f1e]/70 text-sm leading-relaxed">
            ご予約は前日18時まで受け付けています。<br />
            当日のご利用は直接ご来店ください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {submitted ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-[#2d1b0e] font-bold text-xl mb-3">送信が完了しました</h3>
              <p className="text-[#6b3f1e]/70 text-sm">
                ご連絡いただきありがとうございます。<br />
                2営業日以内にご返信いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#2d1b0e] text-sm font-medium">お名前 <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="border border-[#e8c9a0] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4a574] transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#2d1b0e] text-sm font-medium">メールアドレス <span className="text-red-400">*</span></label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="border border-[#e8c9a0] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4a574] transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#2d1b0e] text-sm font-medium">希望日時</label>
                  <input
                    type="datetime-local"
                    value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                    className="border border-[#e8c9a0] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4a574] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#2d1b0e] text-sm font-medium">人数</label>
                  <select
                    value={form.people}
                    onChange={e => setForm({ ...form, people: e.target.value })}
                    className="border border-[#e8c9a0] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4a574] transition-colors bg-white"
                  >
                    {['1名', '2名', '3名', '4名', '5名以上'].map(p => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#2d1b0e] text-sm font-medium">メッセージ</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="border border-[#e8c9a0] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4a574] transition-colors resize-none"
                  placeholder="アレルギーや特別なご要望がございましたらご記入ください。"
                />
              </div>

              <button
                type="submit"
                className="bg-[#6b3f1e] text-white font-bold py-4 rounded-full hover:bg-[#2d1b0e] transition-colors duration-300 text-sm tracking-wider mt-2"
              >
                送信する
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
