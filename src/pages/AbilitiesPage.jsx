import { useState } from 'react'
import { abilitiesData } from '../data'

// AbilityCard — 內嵌
function AbilityCard({ ability }) {
  const [expandedSections, setExpandedSections] = useState({})

  const toggleSection = (sectionLabel) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionLabel]: !prev[sectionLabel]
    }))
  }

  return (
    <div className={`card-base border ${ability.borderColor} flex flex-col h-full`}>
      <div className={`${ability.bgColor} px-6 py-5`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 ${ability.iconBg} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm`}>
            {ability.emoji}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="font-bold text-warm-text text-lg">{ability.name}</h3>
              <span className={`ability-tag ${ability.tagBg} ${ability.tagText} text-xs`}>{ability.englishName}</span>
            </div>
            <p className="text-sub-text text-sm leading-relaxed">{ability.definition}</p>
          </div>
        </div>
      </div>

      <div className="px-6 pb-5 pt-4 space-y-3 flex-1 flex flex-col overflow-hidden">
        {[
          { label: '學習技巧', icon: '📌', items: ability.skills,       renderItem: (s, i) => <span>{s}</span> },
          { label: '反思練習', icon: '💭', items: ability.reflections,  renderItem: (q) => <span className="italic">{q}</span> },
        ].map(({ label, icon, items, renderItem }) => {
          const isExpanded = expandedSections[`${ability.id}-${label}`] || false
          const itemCount = items.length
          
          return (
            <div 
              key={label} 
              className="border border-gray-100 rounded-xl overflow-hidden flex flex-col min-h-0"
              style={{
                minHeight: isExpanded ? `${48 + itemCount * 28 + 24}px` : '48px'
              }}
            >
              <button onClick={() => toggleSection(`${ability.id}-${label}`)}
                className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-medium text-warm-text flex-shrink-0">
                <span className="flex items-center gap-2"><span>{icon}</span><span>{label}</span></span>
                <span className={`text-sub-text transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {isExpanded && (
                <div className="px-4 py-3 bg-white overflow-hidden">
                  <ul className="space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-sub-text">
                        <span className={label === '學習技巧'
                          ? `w-5 h-5 rounded-full ${ability.tagBg} ${ability.tagText} text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold`
                          : 'text-muted-orange mt-0.5'}>
                          {label === '學習技巧' ? i + 1 : '›'}
                        </span>
                        {renderItem(item, i)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── 五大能力頁 ────────────────────────────────────────────────────────
export default function AbilitiesPage({ navigate }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-12 items-start">
        {abilitiesData.map((ability) => (
          <AbilityCard key={ability.id} ability={ability} />
        ))}
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-[#f0faf8] to-amber-50 border border-sky-100 mb-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-100/60 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-center gap-8 p-7 sm:p-10">
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-white/60 rounded-full blur-xl scale-110" />
            <img src="/sel-wheel.png" alt="SEL 五大能力" className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg border-4 border-white" />
          </div>
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
              <button onClick={() => navigate('selfcheck')} className="btn-outline text-sm">🌡️ 先做今日自我檢測</button>
              <button onClick={() => navigate('scenario')} className="btn-primary text-sm">🎭 前往情境練習 →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
