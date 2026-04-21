export default function QuizQuestionCard({ question, selectedOptions, onToggleOption, questionIndex, totalQuestions }) {
  const progress = ((questionIndex) / totalQuestions) * 100

  return (
    <div className="card-base border border-amber-100 overflow-hidden">
      {/* Progress bar */}
      <div className="h-1.5 bg-amber-50">
        <div
          className="h-full bg-gradient-to-r from-amber-300 to-orange-400 progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-6 sm:p-8">
        {/* Question header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-shrink-0 w-8 h-8 bg-soft-orange rounded-full flex items-center justify-center text-muted-orange font-bold text-sm">
            {question.id}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg">{question.abilityEmoji}</span>
              <span className="text-sm font-semibold text-muted-orange">{question.abilityName}</span>
              <span className="text-xs text-sub-text">｜{question.abilityEnglish}</span>
            </div>
          </div>
          <div className="ml-auto text-xs text-sub-text font-medium">
            {questionIndex + 1} / {totalQuestions}
          </div>
        </div>

        {/* Scenario */}
        <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-4 mb-5">
          <div className="flex gap-2 mb-2">
            <span className="text-sm font-semibold text-amber-700">📋 情境</span>
          </div>
          <p className="text-warm-text text-sm leading-relaxed whitespace-pre-line">
            {question.scenario}
          </p>
        </div>

        {/* Question */}
        <p className="font-semibold text-warm-text text-base mb-4">
          {question.question}
        </p>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((opt) => {
            const isSelected = selectedOptions.includes(opt.id)
            return (
              <label
                key={opt.id}
                className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                  ${isSelected
                    ? 'border-muted-orange bg-soft-orange'
                    : 'border-gray-100 bg-white hover:border-amber-200 hover:bg-amber-50/50'
                  }`}
              >
                <div className={`mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all
                  ${isSelected ? 'border-muted-orange bg-muted-orange' : 'border-gray-300'}`}
                >
                  {isSelected && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isSelected}
                  onChange={() => onToggleOption(opt.id)}
                />
                <span className={`text-sm leading-relaxed ${isSelected ? 'text-warm-text font-medium' : 'text-sub-text'}`}>
                  {opt.text}
                </span>
              </label>
            )
          })}
        </div>

        <p className="text-xs text-sub-text mt-4 text-center">可複選，選出你實際上會做到的選項</p>
      </div>
    </div>
  )
}
