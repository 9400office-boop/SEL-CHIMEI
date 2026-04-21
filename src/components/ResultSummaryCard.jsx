import { getAbilityStatus, getAbilitySuggestion } from '../utils/scoreUtils'

export default function ResultSummaryCard({ result }) {
  const status = getAbilityStatus(result.percentage)
  const suggestion = getAbilitySuggestion(result.abilityKey, result.percentage)

  return (
    <div className="card-base border border-gray-100 p-5">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{result.abilityEmoji}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-0.5">
            <span className="font-bold text-warm-text text-sm">{result.abilityName}</span>
            <span className={`text-xs font-semibold ${status.color}`}>{status.label}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-sub-text">{result.abilityEnglish}</span>
            <span className="text-xs text-sub-text">·</span>
            <span className="text-xs text-sub-text">{result.score} / {result.maxScore} 分</span>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <span className={`text-2xl font-black ${status.color}`}>{result.percentage}%</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-3">
        <div
          className={`h-full ${status.barColor} rounded-full progress-bar-fill`}
          style={{ width: `${result.percentage}%` }}
        />
      </div>

      {/* Suggestion */}
      <p className="text-xs text-sub-text leading-relaxed bg-gray-50 rounded-lg p-3">
        💡 {suggestion}
      </p>
    </div>
  )
}
