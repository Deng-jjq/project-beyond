export default function SectionShell({ chapter, children, className = '' }) {
  return (
    <section
      className={`chapter chapter--${chapter.id} ${className}`.trim()}
      id={chapter.id}
      data-chapter
      aria-labelledby={`${chapter.id}-title`}
    >
      <div className="chapter__index" aria-hidden="true">
        {chapter.number} / 06
      </div>
      <div className="chapter__content" data-copy>
        <p className="chapter__eyebrow" id={`${chapter.id}-title`}>{chapter.title}</p>
        {chapter.headline && (
          <h2
            className="chapter__title"
            data-distortion={chapter.id === 'singularity' ? '' : undefined}
          >
            {chapter.id === 'singularity'
              ? chapter.headline.split('').map((letter, index) => (
                  <span key={`${letter}-${index}`}>{letter === ' ' ? '\u00a0' : letter}</span>
                ))
              : chapter.headline}
          </h2>
        )}
        <p className="chapter__copy">{chapter.copy}</p>
        <p className="chapter__zh">{chapter.zhCopy}</p>
      </div>
      <div className="chapter__visual" data-visual aria-hidden="true">
        {children}
      </div>
    </section>
  )
}
