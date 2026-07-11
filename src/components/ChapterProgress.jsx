export default function ChapterProgress({ chapters, activeIndex }) {
  const goToChapter = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="chapter-progress" aria-label="Chapter navigation">
      <span className="chapter-progress__rail" aria-hidden="true" />
      {chapters.map((chapter, index) => (
        <button
          className={`chapter-progress__item${index === activeIndex ? ' is-active' : ''}`}
          type="button"
          key={chapter.id}
          onClick={() => goToChapter(chapter.id)}
          aria-label={`Go to ${chapter.title}`}
          aria-current={index === activeIndex ? 'step' : undefined}
        >
          <span className="chapter-progress__label">
            <span>{chapter.number}</span>
            {chapter.title}
          </span>
          <span className="chapter-progress__dot" aria-hidden="true" />
        </button>
      ))}
    </nav>
  )
}
