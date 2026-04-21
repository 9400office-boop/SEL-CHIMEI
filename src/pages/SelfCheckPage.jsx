import { useState } from 'react'
import StressBunCard from '../components/StressBunCard'
import { stressLevelData } from '../data'

export default function SelfCheckPage({ navigate }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (bun) => {
    setSelected(bun)
    setTimeout(() => {
      document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          🌡️ 今日自我檢測
        </div>
        <h1 className="section-title">今天的你，還好嗎？</h1>
        <p className="text-sub-text max-w-xl mx-auto leading-relaxed">
          在照顧病人、協助家屬、面對工作節奏與責任的同時，
          也給自己一點時間，停下來看看現在的狀態。
          請從下方的「今日壓力指數」中，選出最符合你此刻心情的一顆包子。
        </p>
      </div>

      {/* Bun cards */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-warm-text text-center mb-6 flex items-center justify-center gap-2">
          <span>🥟</span>
          <span>今日壓力指數</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {stressLevelData.map((bun) => (
            <StressBunCard
              key={bun.id}
              bun={bun}
              isSelected={selected?.id === bun.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>

      {/* Result */}
      {selected && (
        <div id="result-section" className="mt-6">
          <div className={`rounded-3xl border-2 ${selected.borderColor} ${selected.bgColor} p-6 sm:p-8`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{selected.emoji}</span>
              <div>
                <h2 className="font-bold text-warm-text text-xl">您的今日壓力狀態</h2>
                <span className={`text-sm font-semibold ${selected.tagColor}`}>
                  {selected.name}（{selected.englishName}）· 分數 {selected.score} / 5
                </span>
              </div>
            </div>

            <div className="bg-white/70 rounded-2xl p-5 mb-4">
              <p className="font-semibold text-warm-text text-base mb-3">{selected.result.title}</p>
              <p className="text-sub-text text-sm leading-relaxed whitespace-pre-line">
                {selected.result.content}
              </p>
            </div>

            <div className={`inline-flex items-center gap-2 bg-white/80 border ${selected.borderColor} rounded-full px-4 py-2 text-sm font-medium ${selected.tagColor}`}>
              <span>💡</span>
              <span>{selected.result.tip}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <button
              onClick={() => navigate('abilities')}
              className="btn-outline"
            >
              查看更多 SEL 自我檢測
            </button>
            <button
              onClick={() => navigate('learning-support')}
              className="btn-primary"
            >
              前往學習補給，幫自己充電
            </button>
          </div>
        </div>
      )}

      {/* Footer note */}
      <div className="mt-10 text-center">
        <p className="text-sub-text text-xs">
          此檢測僅供自我參考，無法取代專業心理評估。若長期感到壓力，建議尋求專業協助。
        </p>
      </div>
    </div>
  )
}
