import HeroSection from '../components/HeroSection'
import FeatureCards from '../components/FeatureCards'

export default function HomePage({ navigate }) {
  return (
    <div>
      <HeroSection navigate={navigate} />
      <FeatureCards navigate={navigate} />

      {/* SEL 說明區 ── 圖文並陳設計 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-[#fdf8f2] to-[#f0faf4] py-20">
        {/* 背景裝飾 */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* 標題 */}
          <div className="text-center mb-12">
            <span className="inline-block bg-white border border-sky-200 text-sky-600 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm mb-4">
              🌱 Social-Emotional Learning
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-warm-text mb-3">什麼是 SEL？</h2>
            <p className="text-sub-text text-base max-w-xl mx-auto leading-relaxed">
              社會情緒學習是幫助我們<strong className="text-warm-text">認識自己、理解他人、做出負責任決定</strong>的學習方式，
              讓醫療工作者在高壓環境中仍能保有溫度與穩定。
            </p>
          </div>

          {/* 主體：圖 + 能力列表 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* 左：SEL 圓餅圖 */}
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

            {/* 右：五大能力說明 */}
            <div className="flex-1 w-full">
              {[
                {
                  num: '1', emoji: '🌸', name: '自我覺察', english: 'Self-Awareness',
                  desc: '認識自己的情緒、目標和價值觀，正確評估優缺點，肯定自我價值。',
                  color: 'from-pink-50 to-rose-50', border: 'border-pink-200',
                  numBg: 'bg-pink-400', tag: 'bg-pink-100 text-pink-600',
                },
                {
                  num: '2', emoji: '🌿', name: '自我管理', english: 'Self-Management',
                  desc: '調節情緒、管理壓力，設定目標並持之以恆，面對挑戰不輕易衝動。',
                  color: 'from-green-50 to-teal-50', border: 'border-green-200',
                  numBg: 'bg-green-400', tag: 'bg-green-100 text-green-600',
                },
                {
                  num: '3', emoji: '💙', name: '社會覺察', english: 'Social Awareness',
                  desc: '具備同理心，理解他人感受，尊重不同背景與文化的多元差異。',
                  color: 'from-sky-50 to-blue-50', border: 'border-sky-200',
                  numBg: 'bg-sky-400', tag: 'bg-sky-100 text-sky-600',
                },
                {
                  num: '4', emoji: '🤝', name: '人際技巧', english: 'Relationship Skills',
                  desc: '有效溝通、積極傾聽、協調合作，在需要時主動尋求或給予協助。',
                  color: 'from-amber-50 to-yellow-50', border: 'border-amber-200',
                  numBg: 'bg-amber-400', tag: 'bg-amber-100 text-amber-600',
                },
                {
                  num: '5', emoji: '⚖️', name: '負責任的決策', english: 'Responsible Decision-Making',
                  desc: '考量道德規範與後果，做出對自己、對他人都負責任的明智選擇。',
                  color: 'from-purple-50 to-violet-50', border: 'border-purple-200',
                  numBg: 'bg-purple-400', tag: 'bg-purple-100 text-purple-600',
                },
              ].map((a) => (
                <div key={a.num}
                  className={`flex items-start gap-4 mb-3 p-4 rounded-2xl bg-gradient-to-r ${a.color} border ${a.border}
                    hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default`}>
                  {/* 數字徽章 */}
                  <div className={`flex-shrink-0 w-11 h-11 ${a.numBg} rounded-xl flex items-center justify-center text-white font-black text-lg shadow-sm`}>
                    {a.num}
                  </div>
                  {/* 內容 */}
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
                <button onClick={() => navigate('abilities')}
                  className="btn-primary text-sm px-6 py-2.5">
                  深入了解五大能力 →
                </button>
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
          <p className="text-sub-text text-sm">
            真正長久的照顧，是在日常裡，慢慢練習理解自己、支持自己、調整自己。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <button onClick={() => navigate('selfcheck')} className="btn-primary">
              先做今日自我檢測
            </button>
            <button onClick={() => navigate('learning-support')} className="btn-outline">
              前往學習補給
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
