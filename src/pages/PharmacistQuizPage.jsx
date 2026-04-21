import { useState } from 'react'
import { pharmacistQuizData } from '../data'
import { calculateQuestionScore, calculatePercentage, generateSummaryText, getAbilityStatus, getAbilitySuggestion } from '../utils/scoreUtils'

// QuizQuestionCard — 內嵌
function QuizQuestionCard({ question, selectedOptions, onToggleOption, questionIndex, totalQuestions }) {
  const progress = (questionIndex / totalQuestions) * 100
  return (
    <div className="card-base border border-amber-100 overflow-hidden">
      <div className="h-1.5 bg-amber-50">
        <div className="h-full bg-gradient-to-r from-amber-300 to-orange-400 progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="p-6 sm:p-8">
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
          <div className="ml-auto text-xs text-sub-text font-medium">{questionIndex + 1} / {totalQuestions}</div>
        </div>

        <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-4 mb-5">
          <div className="flex gap-2 mb-2"><span className="text-sm font-semibold text-amber-700">📋 情境</span></div>
          <p className="text-warm-text text-sm leading-relaxed whitespace-pre-line">{question.scenario}</p>
        </div>

        <p className="font-semibold text-warm-text text-base mb-4">{question.question}</p>

        <div className="space-y-3">
          {question.options.map((opt) => {
            const isSelected = selectedOptions.includes(opt.id)
            return (
              <label key={opt.id}
                className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                  ${isSelected ? 'border-muted-orange bg-soft-orange' : 'border-gray-100 bg-white hover:border-amber-200 hover:bg-amber-50/50'}`}>
                <div className={`mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all
                  ${isSelected ? 'border-muted-orange bg-muted-orange' : 'border-gray-300'}`}>
                  {isSelected && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <input type="checkbox" className="hidden" checked={isSelected} onChange={() => onToggleOption(opt.id)} />
                <span className={`text-sm leading-relaxed ${isSelected ? 'text-warm-text font-medium' : 'text-sub-text'}`}>{opt.text}</span>
              </label>
            )
          })}
        </div>
        <p className="text-xs text-sub-text mt-4 text-center">可複選，選出你實際上會做到的選項</p>
      </div>
    </div>
  )
}

// ResultSummaryCard — 內嵌
function ResultSummaryCard({ result }) {
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
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-3">
        <div className={`h-full ${status.barColor} rounded-full progress-bar-fill`} style={{ width: `${result.percentage}%` }} />
      </div>
      <p className="text-xs text-sub-text leading-relaxed bg-gray-50 rounded-lg p-3">💡 {suggestion}</p>
    </div>
  )
}

// ── 測驗介紹 ──────────────────────────────────────────────────────────────────
function QuizIntro({ onStart }) {
  return (
    <div className="max-w-2xl mx-auto text-center py-8">
      <div className="text-5xl mb-4">💊</div>
      <h2 className="text-2xl font-bold text-warm-text mb-3">藥師情境測驗</h2>
      <p className="text-sub-text leading-relaxed mb-6">
        本測驗共 <strong>5 題</strong>，每題對應一項 SEL 能力。
        請根據真實的醫療情境，勾選「你實際上會做到」的選項（可複選）。
        完成後將產生你的 SEL 能力分析報告。
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
        {pharmacistQuizData.map((q) => (
          <div key={q.id} className="bg-white rounded-xl border border-amber-100 p-3 text-center shadow-sm">
            <div className="text-xl mb-1">{q.abilityEmoji}</div>
            <div className="text-xs font-semibold text-warm-text">{q.abilityName}</div>
          </div>
        ))}
      </div>
      <button onClick={onStart} className="btn-primary text-base px-10 py-3">開始測驗 →</button>
    </div>
  )
}

// ── 測驗結果 ──────────────────────────────────────────────────────────────────
function QuizResults({ answers, navigate }) {
  const results = pharmacistQuizData.map((q) => {
    const selectedIds = answers[q.id] || []
    const score = calculateQuestionScore(q, selectedIds)
    const clampedScore = Math.max(0, Math.min(q.maxScore, score))
    const percentage = calculatePercentage(score, q.maxScore)
    return { abilityKey: q.abilityKey, abilityName: q.abilityName, abilityEnglish: q.abilityEnglish, abilityEmoji: q.abilityEmoji, score: clampedScore, rawScore: score, maxScore: q.maxScore, percentage }
  })

  const summaryText = generateSummaryText(results)
  const avg = Math.round(results.reduce((s, r) => s + r.percentage, 0) / results.length)

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          📊 SEL 能力分析報告
        </div>
        <h2 className="text-2xl font-bold text-warm-text mb-2">您的 SEL 能力分析報告</h2>
        <p className="text-sub-text text-sm">以下是您在五大能力面向的表現</p>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100 p-5 mb-6 text-center">
        <div className="text-4xl font-black text-muted-orange mb-1">{avg}%</div>
        <div className="text-sub-text text-sm">整體 SEL 能力平均</div>
        <div className="mt-3 h-3 bg-amber-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-300 to-orange-400 rounded-full progress-bar-fill" style={{ width: `${avg}%` }} />
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {results.map((r) => <ResultSummaryCard key={r.abilityKey} result={r} />)}
      </div>

      <div className="bg-gradient-to-br from-sky-50 to-teal-50 border border-sky-100 rounded-2xl p-6 mb-6">
        <h3 className="font-bold text-warm-text mb-2 flex items-center gap-2"><span>💙</span> 給你的話</h3>
        <p className="text-sub-text text-sm leading-relaxed">{summaryText}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button onClick={() => window.location.reload()} className="col-span-2 sm:col-span-1 py-2.5 px-4 rounded-full border-2 border-muted-orange text-muted-orange text-sm font-medium hover:bg-soft-orange transition-all">再做一次</button>
        <button onClick={() => navigate('scenario')} className="py-2.5 px-4 rounded-full border border-gray-200 text-sub-text text-sm font-medium hover:bg-gray-50 transition-all">回到情境應用</button>
        <button onClick={() => navigate('learning-support')} className="py-2.5 px-4 rounded-full border border-gray-200 text-sub-text text-sm font-medium hover:bg-gray-50 transition-all">前往學習補給</button>
        <button onClick={() => navigate('abilities')} className="py-2.5 px-4 rounded-full bg-warm-teal text-white text-sm font-medium hover:opacity-90 transition-all">查看五大能力</button>
      </div>
    </div>
  )
}

// ── 藥師測驗頁 ────────────────────────────────────────────────────────────────
export default function PharmacistQuizPage({ navigate }) {
  const [stage, setStage] = useState('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})

  const toggleOption = (questionId, optionId) => {
    setAnswers((prev) => {
      const cur = prev[questionId] || []
      return { ...prev, [questionId]: cur.includes(optionId) ? cur.filter((id) => id !== optionId) : [...cur, optionId] }
    })
  }

  const goNext = () => {
    if (currentQ < pharmacistQuizData.length - 1) {
      setCurrentQ((q) => q + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setStage('results')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goPrev = () => { if (currentQ > 0) setCurrentQ((q) => q - 1) }

  const question = pharmacistQuizData[currentQ]
  const currentAnswers = answers[question?.id] || []

  if (stage === 'intro') return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <button onClick={() => navigate('scenario')} className="flex items-center gap-1 text-sub-text text-sm mb-6 hover:text-warm-text transition-colors">← 返回情境應用</button>
      <QuizIntro onStart={() => setStage('quiz')} />
    </div>
  )

  if (stage === 'results') return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <QuizResults answers={answers} navigate={navigate} />
    </div>
  )

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <button onClick={() => navigate('scenario')} className="flex items-center gap-1 text-sub-text text-sm mb-6 hover:text-warm-text transition-colors">← 返回情境應用</button>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-300 to-orange-400 rounded-full progress-bar-fill"
            style={{ width: `${(currentQ / pharmacistQuizData.length) * 100}%` }} />
        </div>
        <span className="text-xs text-sub-text font-medium whitespace-nowrap">{currentQ + 1} / {pharmacistQuizData.length}</span>
      </div>

      <QuizQuestionCard
        question={question}
        selectedOptions={currentAnswers}
        onToggleOption={(optId) => toggleOption(question.id, optId)}
        questionIndex={currentQ}
        totalQuestions={pharmacistQuizData.length}
      />

      <div className="flex gap-3 mt-5">
        <button onClick={goPrev} disabled={currentQ === 0}
          className="flex-1 py-3 rounded-full border border-gray-200 text-sub-text text-sm font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
          ← 上一題
        </button>
        <button onClick={goNext}
          className="flex-1 py-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all">
          {currentQ === pharmacistQuizData.length - 1 ? '查看結果 →' : '下一題 →'}
        </button>
      </div>

      {currentAnswers.length > 0 && (() => {
        const score = calculateQuestionScore(question, currentAnswers)
        const passed = score >= 3
        return (
          <div className={`mt-4 p-4 rounded-xl border text-sm font-medium ${passed ? 'bg-green-50 border-green-200 text-green-700' : 'bg-amber-50 border-amber-200 text-amber-700'}`}>
            <span className="mr-2">{passed ? '✅' : '💪'}</span>
            {passed ? question.feedback.pass : question.feedback.fail}
          </div>
        )
      })()}
    </div>
  )
}
