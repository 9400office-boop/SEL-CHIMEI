import SupportToolCard from '../components/SupportToolCard'
import { learningSupportData, resourceLinksData } from '../data'

// ResourceLinkCard — 內嵌
function ResourceLinkCard({ resource }) {
  return (
    <div className={`card-base border ${resource.borderColor} ${resource.bgColor} card-hover p-5 flex flex-col`}>
      <div className="flex items-start gap-3 mb-3">
        <div className="text-2xl">{resource.emoji}</div>
        <div>
          <h3 className={`font-bold ${resource.accentColor} text-sm leading-tight`}>{resource.title}</h3>
        </div>
      </div>
      <p className="text-sub-text text-sm leading-relaxed mb-4 flex-1">{resource.description}</p>
      <a href={resource.url} target="_blank" rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-sm font-medium border ${resource.btnColor} px-4 py-1.5 rounded-full transition-colors mt-auto`}>
        前往看看
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  )
}

// ── 學習補給頁 ────────────────────────────────────────────────────────────────
export default function LearningSupportPage({ navigate }) {
  return (
    <div>
      <div className="bg-gradient-to-br from-teal-50 via-cream to-green-50 pt-12 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-teal-200 text-teal-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            🌈 學習補給
          </div>
          <h1 className="section-title">給忙碌中的你，一些剛剛好的補給</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            醫療工作常常需要長時間專注、快速應對與持續付出。
            這個頁面提供簡單、有趣、可立即開始的紓壓方式，
            也整理了可延伸學習與放鬆的網站資源，
            讓你在繁忙之中，也能為自己留一點空間。
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl">🎈</div>
            <div>
              <h2 className="text-xl font-bold text-warm-text">紓壓小幫手</h2>
              <p className="text-sub-text text-sm">立即可以使用的互動紓壓工具</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {learningSupportData.map((tool) => (
              <SupportToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>

        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-xl">🔗</div>
            <div>
              <h2 className="text-xl font-bold text-warm-text">好站連結</h2>
              <p className="text-sub-text text-sm">延伸閱讀與實用心理健康資源</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resourceLinksData.map((res) => (
              <ResourceLinkCard key={res.id} resource={res} />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 rounded-3xl border border-amber-100 p-8 sm:p-10 text-center">
          <div className="text-4xl mb-4">🌸</div>
          <h3 className="text-xl sm:text-2xl font-bold text-warm-text mb-4">你不需要等到撐不住，才開始照顧自己</h3>
          <p className="text-sub-text text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            真正長久的照顧，不是把自己逼到極限後才休息，
            而是在日常裡，慢慢練習理解自己、支持自己、調整自己。
            願你在照顧他人的路上，也能保有照顧自己的能力。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => navigate('selfcheck')} className="btn-outline">前往今日自我檢測</button>
            <button onClick={() => navigate('abilities')} className="btn-primary">認識 SEL 五大能力</button>
          </div>
        </div>
      </div>
    </div>
  )
}
