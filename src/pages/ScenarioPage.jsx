import ScenarioCategoryCard from '../components/ScenarioCategoryCard'
import { scenarioCategories } from '../data'

export default function ScenarioPage({ navigate }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          🎭 情境應用
        </div>
        <h1 className="section-title">在情境中，練習更好的自己</h1>
        <p className="section-subtitle max-w-2xl mx-auto">
          透過真實醫療場域情境，練習自我覺察、情緒調節、人際互動與決策能力。
          每個職類都有專屬情境，請選擇您的角色開始。
        </p>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {scenarioCategories.map((cat) => (
          <ScenarioCategoryCard key={cat.id} category={cat} navigate={navigate} />
        ))}
      </div>

      {/* Info section */}
      <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-3xl border border-sky-100 p-6 sm:p-8 text-center">
        <div className="text-3xl mb-3">💡</div>
        <h3 className="font-bold text-warm-text text-lg mb-2">測驗怎麼設計的？</h3>
        <p className="text-sub-text text-sm leading-relaxed max-w-lg mx-auto mb-4">
          每個情境測驗對應 SEL 五大能力，透過真實臨床情境讓你練習覺察、管理、同理、溝通與決策，
          完成後會有能力分析報告，幫助你了解自己的強項與成長空間。
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {['自我覺察', '自我管理', '社會覺察', '人際技巧', '負責任的決策'].map((a) => (
            <span key={a} className="bg-white border border-sky-100 text-sky-700 text-xs px-3 py-1 rounded-full font-medium">
              {a}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button onClick={() => navigate('abilities')} className="btn-outline">
          先了解 SEL 五大能力
        </button>
      </div>
    </div>
  )
}
