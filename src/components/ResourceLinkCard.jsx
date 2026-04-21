export default function ResourceLinkCard({ resource }) {
  return (
    <div className={`card-base border ${resource.borderColor} ${resource.bgColor} card-hover p-5 flex flex-col`}>
      <div className="flex items-start gap-3 mb-3">
        <div className="text-2xl">{resource.emoji}</div>
        <div>
          <h3 className={`font-bold ${resource.accentColor} text-sm leading-tight`}>{resource.title}</h3>
        </div>
      </div>
      <p className="text-sub-text text-sm leading-relaxed mb-4 flex-1">{resource.description}</p>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-sm font-medium border ${resource.btnColor} px-4 py-1.5 rounded-full transition-colors mt-auto`}
      >
        前往看看
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  )
}
