export default function StressBunCard({ bun, isSelected, onSelect }) {
  return (
    <div
      className="flip-card w-full cursor-pointer"
      style={{ height: '210px' }}
      onClick={() => onSelect(bun)}
    >
      <div className="flip-card-inner">

        {/* ── 正面：圖片 + 名稱 ── */}
        <div
          className={`flip-card-front rounded-2xl border-2 flex flex-col items-center justify-center gap-3 p-4
            ${isSelected
              ? `${bun.selectedBg} ${bun.borderColor} bun-card-selected`
              : 'bg-white border-gray-100 shadow-sm'
            }`}
        >
          {isSelected && (
            <div className={`absolute top-2.5 right-2.5 w-5 h-5 rounded-full flex items-center justify-center shadow-sm
              ${bun.tagColor.replace('text-', 'bg-')}`}>
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}

          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
            {bun.image ? (
              <img
                src={bun.image}
                alt={bun.name}
                className="h-20 w-20 object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            ) : (
              <span className="text-5xl">{bun.emoji}</span>
            )}
          </div>

          <div className="text-center">
            <div className={`text-xs font-semibold ${bun.tagColor} mb-0.5`}>{bun.englishName}</div>
            <div className="font-bold text-warm-text" style={{ fontSize: '16px' }}>{bun.name}</div>
          </div>

          <div className="absolute bottom-2.5 text-[10px] text-gray-300 select-none">
            滑入查看說明
          </div>
        </div>

        {/* ── 背面：說明文字 ── */}
        <div
          className={`flip-card-back rounded-2xl border-2 flex flex-col items-center justify-center p-5 text-center
            ${bun.bgColor} ${bun.borderColor}`}
        >
          <div className="text-2xl mb-2">{bun.emoji}</div>
          <div className={`font-bold mb-2 ${bun.tagColor}`} style={{ fontSize: '16px' }}>{bun.name}</div>
          <p className="text-sub-text leading-relaxed" style={{ fontSize: '12px' }}>{bun.description}</p>
          <div className="mt-3 text-[10px] text-gray-400">點擊選取</div>
        </div>

      </div>
    </div>
  )
}
