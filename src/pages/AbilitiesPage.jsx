import AbilityCard from '../components/AbilityCard'
import { abilitiesData } from '../data'

export default function AbilitiesPage({ navigate }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 text-pink-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          ✨ SEL 五大能力
        </div>
        <h1 className="section-title">認識自己，理解他人</h1>
        <p className="section-subtitle max-w-2xl mx-auto">
          SEL 五大能力是情緒與社交發展的核心。
          點開每張卡片，了解定義、學習技巧，以及可以帶入日常的反思問題。
        </p>
      </div>

      {/* Ability cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-12">
        {abilitiesData.map((ability) => (
          <AbilityCard key={ability.id} ability={ability} />
        ))}
      </div>

      {/* SEL 引導橫幅 */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-[#f0faf8] to-amber-50 border border-sky-100 mb-10">
        {/* 背景裝飾 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-100/60 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-center gap-8 p-7 sm:p-10">
          {/* 左：SEL 圓餅圖 */}
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-white/60 rounded-full blur-xl scale-110" />
            <img
              src="/sel-wheel.png"
              alt="SEL 五大能力"
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>

          {/* 右：引導文字 */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 border border-teal-200 text-teal-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              🌀 五大能力，相互支撐
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-warm-text mb-3 leading-snug">
              SEL 不是一次學完，<br className="hidden sm:block" />而是在每個當下練習。
            </h3>
            <p className="text-sub-text text-sm leading-relaxed mb-5 max-w-lg">
              自我覺察幫你看見自己，自我管理幫你穩住自己，社會覺察幫你理解他人，
              人際技巧幫你連結他人，負責任的決策幫你選擇更好的行動。
              <br /><span className="text-warm-text font-medium">五種能力，在每一次的醫療互動中都可以練習。</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button onClick={() => navigate('selfcheck')} className="btn-outline text-sm">
                🌡️ 先做今日自我檢測
              </button>
              <button onClick={() => navigate('scenario')} className="btn-primary text-sm">
                🎭 前往情境練習 →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
