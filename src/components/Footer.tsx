export default function Footer() {
  return (
    <footer className="bg-[#1a0d05] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-8 border-b border-[#6b3f1e]/30">
          <div>
            <p className="text-[#f5e6d3] font-bold text-2xl tracking-widest mb-2">CAFÉ SORA</p>
            <p className="text-[#d4a574]/60 text-sm">Specialty Coffee &amp; Food</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <p className="text-[#d4a574] text-xs tracking-widest uppercase mb-1">Menu</p>
              {['コンセプト', 'メニュー', 'ギャラリー', 'アクセス'].map(item => (
                <a key={item} href={`#${item}`} className="text-[#e8c9a0]/60 hover:text-[#e8c9a0] transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#d4a574] text-xs tracking-widest uppercase mb-1">Contact</p>
              <a href="tel:075-000-0000" className="text-[#e8c9a0]/60 hover:text-[#e8c9a0] transition-colors">
                075-000-0000
              </a>
              <a href="mailto:info@cafe-sora.jp" className="text-[#e8c9a0]/60 hover:text-[#e8c9a0] transition-colors">
                info@cafe-sora.jp
              </a>
              <div className="flex gap-3 mt-2">
                {['Instagram', 'Twitter', 'LINE'].map(sns => (
                  <span key={sns} className="text-[#d4a574]/60 text-xs cursor-pointer hover:text-[#d4a574] transition-colors">
                    {sns}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[#6b3f1e]/50 text-xs">© 2024 CAFÉ SORA. All rights reserved.</p>
          <p className="text-[#6b3f1e]/30 text-xs">
            ※ これはポートフォリオ用のデモサイトです
          </p>
        </div>
      </div>
    </footer>
  )
}
