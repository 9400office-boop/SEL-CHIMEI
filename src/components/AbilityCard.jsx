import { useState } from 'react'

export default function AbilityCard({ ability }) {
  const [showSkills, setShowSkills] = useState(false)
  const [showReflections, setShowReflections] = useState(false)

  return (
    <div className={`card-base border ${ability.borderColor} overflow-hidden`}>
      {/* Header */}
      <div className={`${ability.bgColor} px-6 py-5`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 ${ability.iconBg} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm`}>
            {ability.emoji}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="font-bold text-warm-text text-lg">{ability.name}</h3>
              <span className={`ability-tag ${ability.tagBg} ${ability.tagText} text-xs`}>
                {ability.englishName}
              </span>
            </div>
            <p className="text-sub-text text-sm leading-relaxed">{ability.definition}</p>
          </div>
        </div>
      </div>

      {/* Expandable sections */}
      <div className="px-6 pb-5 pt-4 space-y-3">
        {/* 學習技巧 */}
        <div className="border border-gray-100 rounded-xl overflow-hidden">
          <button
            onClick={() => setShowSkills(!showSkills)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-medium text-warm-text"
          >
            <span className="flex items-center gap-2">
              <span>📌</span>
              <span>學習技巧</span>
            </span>
            <span className={`text-sub-text transition-transform duration-200 ${showSkills ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {showSkills && (
            <div className="px-4 py-3 bg-white">
              <ul className="space-y-2">
                {ability.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-sub-text">
                    <span className={`w-5 h-5 rounded-full ${ability.tagBg} ${ability.tagText} text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold`}>
                      {i + 1}
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 反思練習 */}
        <div className="border border-gray-100 rounded-xl overflow-hidden">
          <button
            onClick={() => setShowReflections(!showReflections)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-medium text-warm-text"
          >
            <span className="flex items-center gap-2">
              <span>💭</span>
              <span>反思練習</span>
            </span>
            <span className={`text-sub-text transition-transform duration-200 ${showReflections ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {showReflections && (
            <div className="px-4 py-3 bg-white">
              <ul className="space-y-2">
                {ability.reflections.map((q, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-sub-text">
                    <span className="text-muted-orange mt-0.5">›</span>
                    <span className="italic">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
