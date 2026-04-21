import { useState } from 'react'
import QuizQuestionCard from '../components/QuizQuestionCard'
import ResultSummaryCard from '../components/ResultSummaryCard'
import { pharmacistQuizData } from '../data'
import { calculateQuestionScore, calculatePercentage, generateSummaryText } from '../utils/scoreUtils'

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
      <button onClick={onStart} className="btn-primary text-base px-10 py-3">
        開始測驗 →
      </button>
    </div>
  )
}

function QuizResults({ answers, navigate }) {
  const results = pharmacistQuizData.map((q) => {
    const selectedIds = answers[q.id] || []
    const score = calculateQuestionScore(q, selectedIds)
    const clampedScore = Math.max(0, Math.min(q.maxScore, score))
    const percentage = calculatePercentage(score, q.maxScore)
    return {
      abilityKey: q.abilityKey,
      abilityName: q.abilityName,
      abilityEnglish: q.abilityEnglish,
      abilityEmoji: q.abilityEmoji,
      score: clampedScore,
      rawScore: score,
      maxScore: q.maxScore,
      percentage,
    }
  })

  const summaryText = generateSummaryText(results)
  const avg = Math.round(results.reduce((s, r) => s + r.percentage, 0) / results.length)

  return (
    <div className="max-w-2xl mx-auto">
      {/* Result header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          📊 SEL 能力分析報告
        </div>
        <h2 className="text-2xl font-bold text-warm-text mb-2">您的 SEL 能力分析報告</h2>
        <p className="text-sub-text text-sm">以下是您在五大能力面向的表現</p>
      </div>

      {/* Overall score */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100 p-5 mb-6 text-center">
        <div className="text-4xl font-black text-muted-orange mb-1">{avg}%</div>
        <div className="text-sub-text text-sm">整體 SEL 能力平均</div>
        <div className="mt-3 h-3 bg-amber-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-300 to-orange-400 rounded-full progress-bar-fill" style={{ width: `${avg}%` }} />
        </div>
      </div>

      {/* Individual results */}
      <div className="space-y-4 mb-6">
        {results.map((r) => (
          <ResultSummaryCard key={r.abilityKey} result={r} />
        ))}
      </div>

      {/* Summary text */}
      <div className="bg-gradient-to-br from-sky-50 to-teal-50 border border-sky-100 rounded-2xl p-6 mb-6">
        <h3 className="font-bold text-warm-text mb-2 flex items-center gap-2">
          <span>💙</span> 給你的話
        </h3>
        <p className="text-sub-text text-sm leading-relaxed">{summaryText}</p>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          onClick={() => window.location.reload()}
          className="col-span-2 sm:col-span-1 py-2.5 px-4 rounded-full border-2 border-muted-orange text-muted-orange text-sm font-medium hover:bg-soft-orange transition-all"
        >
          再做一次
        </button>
        <button
          onClick={() => navigate('scenario')}
          className="py-2.5 px-4 rounded-full border border-gray-200 text-sub-text text-sm font-medium hover:bg-gray-50 transition-all"
        >
          回到情境應用
        </button>
        <button
          onClick={() => navigate('learning-support')}
          className="py-2.5 px-4 rounded-full border border-gray-200 text-sub-text text-sm font-medium hover:bg-gray-50 transition-all"
        >
          前往學習補給
        </button>
        <button
          onClick={() => navigate('abilities')}
          className="py-2.5 px-4 rounded-full bg-warm-teal text-white text-sm font-medium hover:opacity-90 transition-all"
        >
          查看五大能力
        </button>
      </div>
    </div>
  )
}

export default function PharmacistQuizPage({ navigate }) {
  const [stage, setStage] = useState('intro') // intro | quiz | results
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({}) // { questionId: [optionId, ...] }

  const toggleOption = (questionId, optionId) => {
    setAnswers((prev) => {
      const cur = prev[questionId] || []
      return {
        ...prev,
        [questionId]: cur.includes(optionId)
          ? cur.filter((id) => id !== optionId)
          : [...cur, optionId],
      }
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

  const goPrev = () => {
    if (currentQ > 0) {
      setCurrentQ((q) => q - 1)
    }
  }

  const question = pharmacistQuizData[currentQ]
  const currentAnswers = answers[question?.id] || []

  if (stage === 'intro') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <button onClick={() => navigate('scenario')} className="flex items-center gap-1 text-sub-text text-sm mb-6 hover:text-warm-text transition-colors">
          ← 返回情境應用
        </button>
        <QuizIntro onStart={() => setStage('quiz')} />
      </div>
    )
  }

  if (stage === 'results') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <QuizResults answers={answers} navigate={navigate} />
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <button onClick={() => navigate('scenario')} className="flex items-center gap-1 text-sub-text text-sm mb-6 hover:text-warm-text transition-colors">
        ← 返回情境應用
      </button>

      {/* Overall progress */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-300 to-orange-400 rounded-full progress-bar-fill"
            style={{ width: `${((currentQ) / pharmacistQuizData.length) * 100}%` }}
          />
        </div>
        <span className="text-xs text-sub-text font-medium whitespace-nowrap">
          {currentQ + 1} / {pharmacistQuizData.length}
        </span>
      </div>

      <QuizQuestionCard
        question={question}
        selectedOptions={currentAnswers}
        onToggleOption={(optId) => toggleOption(question.id, optId)}
        questionIndex={currentQ}
        totalQuestions={pharmacistQuizData.length}
      />

      {/* Navigation */}
      <div className="flex gap-3 mt-5">
        <button
          onClick={goPrev}
          disabled={currentQ === 0}
          className="flex-1 py-3 rounded-full border border-gray-200 text-sub-text text-sm font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          ← 上一題
        </button>
        <button
          onClick={goNext}
          className="flex-1 py-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all"
        >
          {currentQ === pharmacistQuizData.length - 1 ? '查看結果 →' : '下一題 →'}
        </button>
      </div>

      {/* Feedback hint after answering */}
      {currentAnswers.length > 0 && (() => {
        const score = calculateQuestionScore(question, currentAnswers)
        const passed = score >= 3
        return (
          <div className={`mt-4 p-4 rounded-xl border text-sm font-medium
            ${passed ? 'bg-green-50 border-green-200 text-green-700' : 'bg-amber-50 border-amber-200 text-amber-700'}`}>
            <span className="mr-2">{passed ? '✅' : '💪'}</span>
            {passed ? question.feedback.pass : question.feedback.fail}
          </div>
        )
      })()}
    </div>
  )
}
