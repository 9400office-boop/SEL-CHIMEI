// HeroSection — 內嵌
function HeroSection({ navigate }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-[#FFF8F0] to-sky-50 pt-14 pb-20">
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-25 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── 左：文字 ── */}
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

            <div className="flex flex-nowrap gap-2 justify-center lg:justify-start overflow-x-auto pb-1">
              {[
                { emoji: '🌸', label: '自我覺察' },
                { emoji: '🌿', label: '自我管理' },
                { emoji: '💙', label: '社會覺察' },
                { emoji: '🤝', label: '人際技巧' },
                { emoji: '⚖️', label: '負責任決策' },
              ].map((a) => (
                <span key={a.label} className="flex-shrink-0 flex items-center gap-1.5 bg-white/80 border border-amber-100 text-warm-text text-sm px-3 py-2 rounded-full shadow-sm font-medium">
                  <span>{a.emoji}</span>{a.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── 右：圖片 + 圓弧 SEL ── */}
          <div className="flex-shrink-0 order-1 lg:order-2 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-[380px] h-[420px] sm:w-[420px] sm:h-[460px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/60 via-orange-100/40 to-pink-100/50 blur-2xl" />
              <div className="absolute w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] rounded-full border-[3px] border-dashed border-amber-200/70" style={{ top: '18px' }} />
              <div
                className="absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] overflow-hidden shadow-2xl"
                style={{ top: '22px', borderRadius: '62% 38% 46% 54% / 56% 44% 56% 44%', boxShadow: '0 12px 50px rgba(244,162,97,0.25), 0 4px 20px rgba(0,0,0,0.08)' }}
              >
                <img src="/hero-doctor.png" alt="醫療人員喝茶放鬆插畫" className="w-full h-full object-cover object-center scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-100/20 via-transparent to-transparent" />
              </div>

              <div className="absolute top-6 right-0 sm:right-2 bg-white rounded-2xl shadow-card px-4 py-2.5 flex items-center gap-2 border border-amber-100 animate-bounce" style={{ animationDuration: '2.5s' }}>
                <span className="text-xl">☕</span>
                <span className="text-sm font-semibold text-warm-text">先喘口氣</span>
              </div>
              <div className="absolute top-8 left-2 w-3 h-3 rounded-full bg-pink-300 opacity-70" />
              <div className="absolute top-1/3 right-0 text-lg opacity-60">🌿</div>
              <div className="absolute top-2 left-1/3 text-base opacity-60">✨</div>

              {/* SVG 圓弧 SEL */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 420" style={{ zIndex: 10 }}>
                <defs>
                  <linearGradient id="selArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F4A261" />
                    <stop offset="50%" stopColor="#E8610A" />
                    <stop offset="100%" stopColor="#F4A261" />
                  </linearGradient>
                  <path id="selLetterArc"   d="M 58,264  A 152,152 0 0,0 322,264" />
                  <path id="selSubtitleArc" d="M 91,320  A 114,114 0 0,0 289,320" />
                </defs>
                <path d="M 44,270 A 165,165 0 0,0 336,270" fill="none" stroke="rgba(255,252,245,0.93)" strokeWidth="88" strokeLinecap="round" />
                <path d="M 44,270 A 165,165 0 0,0 336,270" fill="none" stroke="rgba(244,162,97,0.45)" strokeWidth="1.5" />
                <circle cx="44"  cy="270" r="5" fill="#F4A261" opacity="0.8" />
                <circle cx="336" cy="270" r="5" fill="#F4A261" opacity="0.8" />
                <rect x="55" y="245" width="270" height="38" rx="8" fill="#FDF8F0" opacity="0.95" />
                <text fontSize="36" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif" fill="url(#selArcGrad)" letterSpacing="18" style={{ filter: 'drop-shadow(0px 1px 3px rgba(232,97,10,0.3))' }}>
                  <textPath href="#selLetterArc" startOffset="50%" textAnchor="middle">S · E · L</textPath>
                </text>
                <text fontSize="12" fontWeight="700" fontFamily="Noto Sans TC, sans-serif" fill="#C4825A" letterSpacing="5">
                  <textPath href="#selSubtitleArc" startOffset="50%" textAnchor="middle">社 會 情 緒 學 習</textPath>
                </text>
              </svg>
            </div>
          </div>

        </div>

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

// FeatureCards — 內嵌
const featureList = [
  { id: 'abilities',        emoji: '✨', title: 'SEL 五大能力', description: '認識 SEL 五大核心能力，建立自我理解與人際互動的基礎。',       bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50', borderColor: 'border-pink-200', hoverBorder: 'hover:border-pink-300', iconBg: 'bg-pink-100' },
  { id: 'selfcheck',        emoji: '🌡️', title: '自我檢測',    description: '透過今日壓力指數與簡易檢測，快速了解自己的狀態。',               bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50', borderColor: 'border-amber-200', hoverBorder: 'hover:border-amber-300', iconBg: 'bg-amber-100' },
  { id: 'scenario',         emoji: '🎭', title: '情境應用',    description: '用醫療職場情境練習思考與回應，提升情緒調節與應對能力。',           bgColor: 'bg-gradient-to-br from-sky-50 to-blue-50', borderColor: 'border-sky-200', hoverBorder: 'hover:border-sky-300', iconBg: 'bg-sky-100' },
  { id: 'learning-support', emoji: '🌈', title: '學習補給',    description: '提供有趣紓壓遊戲、放鬆活動與實用資源，幫自己充電。',               bgColor: 'bg-gradient-to-br from-teal-50 to-green-50', borderColor: 'border-teal-200', hoverBorder: 'hover:border-teal-300', iconBg: 'bg-teal-100' },
]

function FeatureCards({ navigate }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="section-title">從這裡開始，找到適合你的方式</h2>
        <p className="section-subtitle max-w-lg mx-auto">四個入口，四種照顧自己的起點，選一個最想嘗試的開始吧。</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featureList.map((f) => (
          <button key={f.id} onClick={() => navigate(f.id)}
            className={`group text-left p-6 rounded-2xl border ${f.bgColor} ${f.borderColor} ${f.hoverBorder} card-hover transition-all duration-300 cursor-pointer shadow-sm hover:shadow-card-hover`}>
            <div className={`w-12 h-12 ${f.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
              {f.emoji}
            </div>
            <h3 className="font-bold text-warm-text text-base mb-2">{f.title}</h3>
            <p className="text-sub-text text-sm leading-relaxed">{f.description}</p>
            <div className="mt-4 text-muted-orange text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              <span>前往</span><span>→</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

// ── 首頁 ───────────────────────────────────────────────────────────
export default function HomePage({ navigate }) {
  return (
    <div>
      <HeroSection navigate={navigate} />
      <FeatureCards navigate={navigate} />

      {/* 什麼是 SEL */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-[#fdf8f2] to-[#f0faf4] py-20">
        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-white border border-sky-200 text-sky-600 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm mb-4">
              🌱 Social-Emotional Learning
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-warm-text mb-3">什麼是 SEL？</h2>
            <p className="text-sub-text text-base max-w-xl mx-auto leading-relaxed">
              社會情緒學習是幫助我們<strong className="text-warm-text">認識自己、理解他人、   出負責任決定</strong>的學習方式，
              讓醫療工作者在高壓環境中仍能保有溫度與穩定。
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-shrink-0 relative flex items-center justify-center">
              <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-br from-sky-100/80 via-amber-50/60 to-green-100/60 blur-2xl" />
              <div className="absolute w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] rounded-full border-2 border-dashed border-sky-200/80" />
              <div className="relative w-[250px] h-[250px] sm:w-[310px] sm:h-[310px] rounded-full overflow-hidden shadow-2xl border-4 border-white"
                style={{ boxShadow: '0 12px 50px rgba(100,180,230,0.2), 0 4px 20px rgba(0,0,0,0.08)' }}>
                <img src="/sel-wheel.png" alt="SEL 五大能力圓餅圖" className="w-full h-full object-cover object-center" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-400 to-teal-400 text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                SEL 五大核心能力
              </div>
              <div className="absolute -top-4 left-8 text-yellow-300 text-xl">✦</div>
              <div className="absolute top-6 -right-4 text-pink-300 text-base">✦</div>
              <div className="absolute bottom-10 -left-5 text-green-300 text-sm">✦</div>
            </div>

            <div className="flex-1 w-full">
              {[
                { num:'1', emoji:'🌸', name:'自我覺察',    english:'Self-Awareness',            desc:'認識自己的情緒、目標和價值觀，正確評估優缺點，肯定自我價值。', color: 'from-pink-50 to-rose-50', border: 'border-pink-200', numBg: 'bg-pink-400', tag: 'bg-pink-100 text-pink-700' },
                { num:'2', emoji:'🌿', name:'自我管理',    english:'Self-Management',           desc:'調節情緒、管理壓力，設定目標並持之以恆，面對挑戰不輕易衝動。', color: 'from-green-50 to-teal-50', border: 'border-green-200', numBg: 'bg-green-400', tag: 'bg-green-100 text-green-700' },
                { num:'3', emoji:'💙', name:'社會覺察',    english:'Social Awareness',          desc:'具備同理心，理解他人感受，尊重不同背景與文化的多元差異。', color: 'from-sky-50 to-blue-50', border: 'border-sky-200', numBg: 'bg-sky-400', tag: 'bg-sky-100 text-sky-700' },
                { num:'4', emoji:'🤝', name:'人際技巧',    english:'Relationship Skills',       desc:'有效溝通、積極傾聽、協調合作，在需要時主動尋求或給予協助。', color: 'from-amber-50 to-orange-50', border: 'border-amber-200', numBg: 'bg-amber-400', tag: 'bg-amber-100 text-amber-700' },
                { num:'5', emoji:'⚖️', name:'負責任的決策', english:'Responsible Decision-Making', desc:'考量道德規範與後果，做出對自己、對他人都負責任的明智判斷。', color: 'from-purple-50 to-violet-50', border: 'border-purple-200', numBg: 'bg-purple-400', tag: 'bg-purple-100 text-purple-700' },
              ].map((a) => (
                <div key={a.num} className={`flex items-start gap-4 mb-3 p-4 rounded-2xl bg-gradient-to-r ${a.color} border ${a.border} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}>
                  <div className={`flex-shrink-0 w-11 h-11 ${a.numBg} rounded-xl flex items-center justify-center text-white font-black text-lg shadow-sm`}>{a.num}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xl">{a.emoji}</span>
                      <span className="font-bold text-warm-text text-base">{a.name}</span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${a.tag}`}>{a.english}</span>
                    </div>
                    <p className="text-sub-text text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
              <div className="mt-5 text-center lg:text-left">
                <button onClick={() => navigate('abilities')} className="btn-primary text-sm px-6 py-2.5">深入了解五大能力 →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 溫暖提示 banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-gradient-to-r from-sky-50 via-teal-50 to-green-50 rounded-3xl p-8 sm:p-10 text-center border border-sky-100">
          <div className="text-3xl mb-4">💙</div>
          <blockquote className="text-lg sm:text-xl font-medium text-warm-text leading-relaxed italic mb-4">
            「你不需要等到撐不住，才開始照顧自己。」
          </blockquote>
          <p className="text-sub-text text-sm">真正長久的照顧，是在日常裡，慢慢練習理解自己、支持自己、調整自己。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <button onClick={() => navigate('selfcheck')} className="btn-primary">先做今日自我檢測</button>
            <button onClick={() => navigate('learning-support')} className="btn-outline">前往學習補給</button>
          </div>
        </div>
      </section>
    </div>
  )
}
