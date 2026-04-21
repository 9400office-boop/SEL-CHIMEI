export default function ScenarioCategoryCard({ category, navigate }) {
  const isOpen = category.status === 'open'

  return (
    <div className={`card-base border ${category.borderColor} overflow-hidden
      ${isOpen ? 'card-hover cursor-pointer' : 'opacity-80'}`}
    >
      <div className={`h-2 ${category.accentColor}`} />
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-14 h-14 ${category.bgColor} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-sm`}>
            {category.emoji}
          </div>
          <div>
            <h3 className="font-bold text-warm-text text-lg leading-tight">{category.name}</h3>
            <span className="text-sub-text text-xs">{category.englishName}</span>
          </div>
        </div>

        <p className="text-sub-text text-sm leading-relaxed mb-5">
          {category.description}
        </p>

        {isOpen ? (
          <button
            onClick={() => navigate(category.targetPage)}
            className="btn-primary w-full text-sm"
          >
            {category.buttonLabel}
          </button>
        ) : (
          <button
            disabled
            className="w-full py-2.5 px-6 rounded-full text-sm font-medium bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
          >
            {category.buttonLabel}
          </button>
        )}
      </div>
    </div>
  )
}
