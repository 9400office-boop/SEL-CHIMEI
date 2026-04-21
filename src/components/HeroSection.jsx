export default function HeroSection({ navigate }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-[#FFF8F0] to-sky-50 pt-14 pb-20">

      {/* Background atmosphere blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-25 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white/80 border border-amber-200 text-muted-orange text-sm font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <span>🌸</span>
              <span>奇美醫療 SEL 學習小棧</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warm-text leading-tight mb-5">
              照顧別人的同時，<br />
              <span className="text-muted-orange">也別忘了照顧自己</span>
            </h1>

            <p className="text-sub-text text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              在忙碌的醫療現場中，練習自我覺察、自我管理、社會覺察、人際技巧與負責任的決定，
              讓壓力有出口，讓情緒有理解，讓專業更有溫度。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <button onClick={() => navigate('abilities')} className="btn-primary text-base px-8 py-3">
                開始探索 →
              </button>
              <button onClick={() => navigate('selfcheck')} className="btn-outline text-base px-8 py-3">
                先做今日檢測
              </button>
            </div>

            {/* SEL five pills — 同一排 */}
            <div className="flex flex-nowrap gap-2 justify-center lg:justify-start overflow-x-auto pb-1">
              {[
                { emoji: '🌸', label: '自我覺察' },
                { emoji: '🌿', label: '自我管理' },
                { emoji: '💙', label: '社會覺察' },
                { emoji: '🤝', label: '人際技巧' },
                { emoji: '⚖️', label: '負責任決策' },
              ].map((a) => (
                <span key={a.label} className="flex-shrink-0 flex items-center gap-1.5 bg-white/80 border border-amber-100 text-warm-text text-sm px-3 py-2 rounded-full shadow-sm font-medium whitespace-nowrap">
                  <span>{a.emoji}</span>{a.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Illustration + Arc SEL ── */}
          <div className="flex-shrink-0 order-1 lg:order-2 flex items-center justify-center">

            {/* 圖片區（含圓弧 SEL 文字） */}
            <div className="relative flex items-center justify-center w-[380px] h-[420px] sm:w-[420px] sm:h-[460px]">

              {/* 背景光暈 */}
              <div className="absolute inset-0 rounded-full
                bg-gradient-to-br from-amber-200/60 via-orange-100/40 to-pink-100/50 blur-2xl" />

              {/* 虛線圓框 */}
              <div className="absolute w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] rounded-full
                border-[3px] border-dashed border-amber-200/70"
                style={{ top: '18px' }} />

              {/* 醫師圖片 */}
              <div
                className="absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] overflow-hidden shadow-2xl"
                style={{
                  top: '22px',
                  borderRadius: '62% 38% 46% 54% / 56% 44% 56% 44%',
                  boxShadow: '0 12px 50px rgba(244,162,97,0.25), 0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <img src="/hero-doctor.png" alt="醫療人員喝茶放鬆插畫"
                  className="w-full h-full object-cover object-center scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-100/20 via-transparent to-transparent" />
              </div>

              {/* 先喘口氣 badge */}
              <div className="absolute top-6 right-0 sm:right-2 bg-white rounded-2xl shadow-card px-4 py-2.5 flex items-center gap-2 border border-amber-100 animate-bounce"
                style={{ animationDuration: '3s', zIndex: 10 }}>
                <span className="text-xl">☕</span>
                <span className="text-sm font-semibold text-warm-text">先喘口氣</span>
              </div>

              {/* 裝飾點 */}
              <div className="absolute top-8 left-2 w-3 h-3 rounded-full bg-pink-300 opacity-70" />
              <div className="absolute top-1/3 right-0 text-lg opacity-60">🌿</div>
              <div className="absolute top-2 left-1/3 text-base opacity-60">✨</div>

              {/* SVG 圓弧 SEL 文字 — 覆蓋整個容器，文字沿底部圓弧 */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 380 420"
                style={{ zIndex: 10 }}
              >
                <defs>
                  <linearGradient id="selArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F4A261" />
                    <stop offset="50%" stopColor="#E8610A" />
                    <stop offset="100%" stopColor="#F4A261" />
                  </linearGradient>
                  {/* 圓心 (190, 188)
                      兩弧均以 ±60° 展開（弧長對稱）
                      SEL 外弧 r=152：端點 (58,264) → (322,264)，底 y=340
                      字幕內弧 r=114：端點 (91,245) → (289,245)，底 y=302
                      兩弧底部距離 340-302=38px，扣掉字高仍有 ~15px 間距 */}
                  <path id="selLetterArc"   d="M 58,264  A 152,152 0 0,0 322,264" />
                  <path id="selSubtitleArc" d="M 91,245  A 114,114 0 0,0 289,245" />
                </defs>

                {/* 白色霧面弧帶（覆蓋兩層文字範圍） */}
                <path
                  d="M 44,270 A 165,165 0 0,0 336,270"
                  fill="none"
                  stroke="rgba(255,252,245,0.93)"
                  strokeWidth="88"
                  strokeLinecap="round"
                />
                {/* 弧帶上緣橘色細線 */}
                <path
                  d="M 44,270 A 165,165 0 0,0 336,270"
                  fill="none"
                  stroke="rgba(244,162,97,0.45)"
                  strokeWidth="1.5"
                />

                {/* 左右裝飾圓點 */}
                <circle cx="44"  cy="270" r="5" fill="#F4A261" opacity="0.8" />
                <circle cx="336" cy="270" r="5" fill="#F4A261" opacity="0.8" />

                {/* SEL 大字母（外弧） */}
                <text
                  fontSize="36"
                  fontWeight="900"
                  fontFamily="Arial Black, Impact, sans-serif"
                  fill="url(#selArcGrad)"
                  letterSpacing="18"
                  style={{ filter: 'drop-shadow(0px 1px 3px rgba(232,97,10,0.28))' }}
                >
                  <textPath href="#selLetterArc" startOffset="50%" textAnchor="middle">
                    S · E · L
                  </textPath>
                </text>

                {/* 社會情緒學習（內弧，置於 SEL 上方） */}
                <text
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="Noto Sans TC, sans-serif"
                  fill="#C4825A"
                  letterSpacing="5"
                >
                  <textPath href="#selSubtitleArc" startOffset="50%" textAnchor="middle">
                    社 會 情 緒 學 習
                  </textPath>
                </text>
              </svg>
            </div>

          </div>

        </div>

        {/* Audience tags */}
        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {['醫師', '護理師', '藥師', '醫檢師', '醫事人員', '行政人員', '教育工作者'].map((role) => (
            <span key={role} className="bg-white/80 border border-amber-100 text-sub-text text-sm px-4 py-2 rounded-full shadow-sm font-medium">
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
