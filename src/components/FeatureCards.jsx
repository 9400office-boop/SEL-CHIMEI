const features = [
  {
    id: 'abilities',
    emoji: '✨',
    title: 'SEL 五大能力',
    description: '認識 SEL 五大核心能力，建立自我理解與人際互動的基礎。',
    bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
    borderColor: 'border-pink-100',
    iconBg: 'bg-pink-100',
    hoverBorder: 'hover:border-pink-200',
  },
  {
    id: 'selfcheck',
    emoji: '🌡️',
    title: '自我檢測',
    description: '透過今日壓力指數與簡易檢測，快速了解自己的狀態。',
    bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
    borderColor: 'border-amber-100',
    iconBg: 'bg-amber-100',
    hoverBorder: 'hover:border-amber-200',
  },
  {
    id: 'scenario',
    emoji: '🎭',
    title: '情境應用',
    description: '用醫療職場情境練習思考與回應，提升情緒調節與應對能力。',
    bgColor: 'bg-gradient-to-br from-sky-50 to-blue-50',
    borderColor: 'border-sky-100',
    iconBg: 'bg-sky-100',
    hoverBorder: 'hover:border-sky-200',
  },
  {
    id: 'learning-support',
    emoji: '🌈',
    title: '學習補給',
    description: '提供有趣紓壓遊戲、放鬆活動與實用資源，幫自己充電。',
    bgColor: 'bg-gradient-to-br from-green-50 to-teal-50',
    borderColor: 'border-green-100',
    iconBg: 'bg-green-100',
    hoverBorder: 'hover:border-green-200',
  },
]

export default function FeatureCards({ navigate }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="section-title">從這裡開始，找到適合你的方式</h2>
        <p className="section-subtitle max-w-lg mx-auto">
          四個入口，四種照顧自己的起點，選一個最想嘗試的開始吧。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f) => (
          <button
            key={f.id}
            onClick={() => navigate(f.id)}
            className={`group text-left p-6 rounded-2xl border ${f.bgColor} ${f.borderColor} ${f.hoverBorder}
              card-hover transition-all duration-300 cursor-pointer shadow-sm hover:shadow-card-hover`}
          >
            <div className={`w-12 h-12 ${f.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm
              group-hover:scale-110 transition-transform duration-200`}>
              {f.emoji}
            </div>
            <h3 className="font-bold text-warm-text text-base mb-2">{f.title}</h3>
            <p className="text-sub-text text-sm leading-relaxed">{f.description}</p>
            <div className="mt-4 text-muted-orange text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              <span>前往</span>
              <span>→</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
