import { useState } from 'react'
import { stressLevelData, bunCards, emotionPunchData } from '../data'

// ─── 呼吸練習 ────────────────────────────────────────────────────────────────
function BreathingExercise({ onClose }) {
  const [phase, setPhase] = useState('idle') // idle | inhale | hold | exhale
  const [count, setCount] = useState(0)
  const [cycles, setCycles] = useState(0)
  const [timer, setTimer] = useState(null)

  const phases = [
    { key: 'inhale', label: '吸氣', duration: 4, color: 'bg-sky-400' },
    { key: 'hold', label: '停留', duration: 4, color: 'bg-amber-400' },
    { key: 'exhale', label: '吐氣', duration: 6, color: 'bg-green-400' },
  ]

  const startBreathing = () => {
    let phaseIdx = 0
    let cnt = 0
    let totalCycles = 0
    setPhase(phases[0].key)
    setCount(phases[0].duration)

    const tick = setInterval(() => {
      cnt++
      const cur = phases[phaseIdx]
      if (cnt >= cur.duration) {
        cnt = 0
        phaseIdx = (phaseIdx + 1) % phases.length
        if (phaseIdx === 0) totalCycles++
        if (totalCycles >= 3) {
          clearInterval(tick)
          setPhase('done')
          return
        }
        setPhase(phases[phaseIdx].key)
        setCount(phases[phaseIdx].duration)
      } else {
        setCount(cur.duration - cnt)
      }
    }, 1000)
    setTimer(tick)
  }

  const stop = () => {
    if (timer) clearInterval(timer)
    setPhase('idle')
    setCount(0)
  }

  const currentPhase = phases.find(p => p.key === phase)
  const circleSize = phase === 'inhale' ? 'scale-125' : phase === 'exhale' ? 'scale-75' : 'scale-100'

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
        <h3 className="font-bold text-warm-text text-xl mb-2">1分鐘呼吸調節</h3>
        <p className="text-sub-text text-sm mb-6">3 個循環：4秒吸氣 → 4秒停留 → 6秒吐氣</p>

        <div className="flex items-center justify-center mb-8 h-36">
          {phase === 'idle' && (
            <div className="w-28 h-28 rounded-full bg-sky-100 flex items-center justify-center">
              <span className="text-4xl">🫁</span>
            </div>
          )}
          {phase === 'done' && (
            <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center flex-col">
              <span className="text-4xl">🌿</span>
              <span className="text-green-600 text-sm font-semibold mt-1">完成！</span>
            </div>
          )}
          {currentPhase && phase !== 'idle' && phase !== 'done' && (
            <div className={`w-28 h-28 rounded-full ${currentPhase.color} flex flex-col items-center justify-center
              transition-transform duration-1000 ease-in-out ${circleSize} shadow-lg`}>
              <span className="text-white text-3xl font-black">{count}</span>
              <span className="text-white/90 text-sm font-semibold">{currentPhase.label}</span>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          {phase === 'idle' && (
            <button onClick={startBreathing} className="btn-primary flex-1">開始練習</button>
          )}
          {phase === 'done' && (
            <button onClick={() => { setPhase('idle'); setCount(0) }} className="btn-outline flex-1">再來一次</button>
          )}
          {currentPhase && phase !== 'idle' && phase !== 'done' && (
            <button onClick={stop} className="btn-outline flex-1">停止</button>
          )}
          <button onClick={onClose} className="flex-1 py-2.5 px-6 rounded-full border border-gray-200 text-sub-text hover:bg-gray-50 text-sm font-medium">關閉</button>
        </div>
      </div>
    </div>
  )
}

// ─── 情緒戳戳樂 ───────────────────────────────────────────────────────────
function EmotionPunch({ onClose }) {
  const [selected, setSelected] = useState(null)
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl">
        <h3 className="font-bold text-warm-text text-xl mb-1 text-center">今天的情緒戳戳樂</h3>
        <p className="text-sub-text text-sm mb-4 text-center">點選現在最接近你的心情</p>

        {selected ? (
          <div className="text-center py-4">
            <div className="text-6xl mb-3">{selected.emoji}</div>
            <div className="font-bold text-warm-text text-lg mb-3">{selected.name}</div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mb-4">
              <p className="text-warm-text text-sm leading-relaxed">{selected.message}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setSelected(null)} className="btn-outline flex-1 text-sm">換一個</button>
              <button onClick={onClose} className="btn-primary flex-1 text-sm">好的，謝謝</button>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {emotionPunchData.map(e => (
                <button key={e.id} onClick={() => setSelected(e)}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-amber-50 transition-colors">
                  <span className="text-2xl">{e.emoji}</span>
                  <span className="text-xs text-sub-text">{e.name}</span>
                </button>
              ))}
            </div>
            <button onClick={onClose} className="w-full py-2 rounded-full border border-gray-200 text-sub-text text-sm hover:bg-gray-50">關閉</button>
          </>
        )}
      </div>
    </div>
  )
}

// ─── 包子翻翻卡 ───────────────────────────────────────────────────────────
function BunFlipCard({ onClose }) {
  const [flipped, setFlipped] = useState(null)
  const pick = () => {
    const idx = Math.floor(Math.random() * bunCards.length)
    setFlipped(bunCards[idx])
  }
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
        <h3 className="font-bold text-warm-text text-xl mb-2">包子舒壓翻翻卡</h3>
        <p className="text-sub-text text-sm mb-6">點「翻開」取得今天屬於你的療癒卡片</p>

        <div className="h-36 flex items-center justify-center mb-6">
          {flipped ? (
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 w-full">
              <div className="text-5xl mb-3">{flipped.emoji}</div>
              <p className="text-warm-text text-sm leading-relaxed font-medium">{flipped.message}</p>
            </div>
          ) : (
            <div className="w-28 h-28 bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-5xl">?</span>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <button onClick={pick} className="btn-primary flex-1">{flipped ? '再翻一張' : '翻開'}</button>
          <button onClick={onClose} className="flex-1 py-2.5 px-4 rounded-full border border-gray-200 text-sub-text hover:bg-gray-50 text-sm font-medium">關閉</button>
        </div>
      </div>
    </div>
  )
}

// ─── 把壓力丟出去 ─────────────────────────────────────────────────────────
function ThrowStress({ onClose }) {
  const [text, setText] = useState('')
  const [thrown, setThrown] = useState(false)

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl">
        <h3 className="font-bold text-warm-text text-xl mb-2 text-center">把壓力丟出去</h3>
        <p className="text-sub-text text-sm mb-4 text-center">寫下讓你煩躁或疲累的事，再把它丟掉</p>

        {thrown ? (
          <div className="text-center py-4">
            <div className="text-5xl mb-3">🗑️</div>
            <p className="font-bold text-warm-text text-lg mb-2">已丟出去了！</p>
            <p className="text-sub-text text-sm mb-5">放下了一點點重量，做得很好。</p>
            <div className="flex gap-3">
              <button onClick={() => { setText(''); setThrown(false) }} className="btn-outline flex-1 text-sm">繼續丟</button>
              <button onClick={onClose} className="btn-primary flex-1 text-sm">好多了，謝謝</button>
            </div>
          </div>
        ) : (
          <>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="今天讓我最煩的是……"
              rows={4}
              className="w-full border border-gray-200 rounded-xl p-3 text-sm text-warm-text resize-none focus:outline-none focus:border-amber-300 mb-4"
            />
            <div className="flex gap-3">
              <button
                onClick={() => { if (text.trim()) setThrown(true) }}
                disabled={!text.trim()}
                className={`flex-1 py-2.5 px-4 rounded-full text-sm font-medium transition-all
                  ${text.trim() ? 'btn-primary' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              >
                🗑️ 丟出去！
              </button>
              <button onClick={onClose} className="flex-1 py-2.5 px-4 rounded-full border border-gray-200 text-sub-text hover:bg-gray-50 text-sm">關閉</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ─── 主卡片 ───────────────────────────────────────────────────────────────
export default function SupportToolCard({ tool }) {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = () => setActiveModal(tool.action)
  const closeModal = () => setActiveModal(null)

  return (
    <>
      <div className={`card-base border ${tool.borderColor} ${tool.bgColor} card-hover p-6 flex flex-col`}>
        <div className="flex items-start gap-4 mb-4">
          <div className="text-3xl">{tool.emoji}</div>
          <div>
            <h3 className="font-bold text-warm-text text-base mb-1">{tool.title}</h3>
          </div>
        </div>
        <p className="text-sub-text text-sm leading-relaxed mb-4 flex-1">{tool.description}</p>
        <button
          onClick={openModal}
          className={`w-full text-white text-sm font-medium py-2.5 px-4 rounded-full ${tool.btnColor} transition-all shadow-sm hover:shadow-md mt-auto`}
        >
          {tool.buttonLabel}
        </button>
      </div>

      {activeModal === 'breathing' && <BreathingExercise onClose={closeModal} />}
      {activeModal === 'emotion' && <EmotionPunch onClose={closeModal} />}
      {activeModal === 'buncard' && <BunFlipCard onClose={closeModal} />}
      {activeModal === 'throwstress' && <ThrowStress onClose={closeModal} />}
    </>
  )
}
