import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ChapterProgress from './components/ChapterProgress'
import SectionShell from './components/SectionShell'
import {
  BeyondVisual,
  DepartureVisual,
  SignalVisual,
  SilenceVisual,
  SingularityVisual,
  WormholeVisual,
} from './components/ChapterVisuals'
import { chapters } from './data/chapters'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const visuals = [
  SilenceVisual,
  SignalVisual,
  DepartureVisual,
  WormholeVisual,
  SingularityVisual,
  BeyondVisual,
]

function App() {
  const root = useRef(null)
  const [activeChapter, setActiveChapter] = useState(0)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const scope = root.current
    const sections = gsap.utils.toArray('[data-chapter]', scope)
    const context = gsap.context(() => {
      sections.forEach((section, index) => {
        const copy = section.querySelector('[data-copy]')
        const visual = section.querySelector('[data-visual]')

        ScrollTrigger.create({
          trigger: section,
          start: 'top 55%',
          end: 'bottom 45%',
          onEnter: () => setActiveChapter(index),
          onEnterBack: () => setActiveChapter(index),
        })

        if (reducedMotion) {
          gsap.set([copy, visual], { clearProps: 'all' })
          return
        }

        gsap.fromTo(
          copy.children,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.09,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              toggleActions: 'play reverse play reverse',
            },
          },
        )

        gsap.fromTo(
          visual,
          { yPercent: 2.5 },
          {
            yPercent: -2.5,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          },
        )

        section.querySelectorAll('[data-line]').forEach((line) => {
          const vertical = line.classList.contains('axis--vertical')
          gsap.from(line, {
            scaleX: vertical ? 1 : 0,
            scaleY: vertical ? 0 : 1,
            duration: 1.35,
            ease: 'power2.inOut',
            transformOrigin: 'center',
            scrollTrigger: {
              trigger: section,
              start: 'top 68%',
            },
          })
        })
      })

      if (!reducedMotion) {
        gsap.utils.toArray('[data-pulse]', scope).forEach((pulse, index) => {
          gsap.to(pulse.querySelector('.pulse__halo'), {
            scale: 2.2,
            autoAlpha: 0,
            duration: 2.4 + index * 0.12,
            repeat: -1,
            ease: 'power2.out',
          })
          gsap.to(pulse.querySelector('.pulse__core'), {
            scale: 1.5,
            duration: 1.45,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
        })

        gsap.to('[data-scan]', {
          scaleX: 0.16,
          autoAlpha: 0.28,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          transformOrigin: 'center',
        })

        gsap.to('.chapter--departure [data-vessel]', {
          y: -52,
          duration: 4.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })

        const wormholeTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: '.chapter--wormhole',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.75,
          },
        })
        wormholeTimeline
          .to('[data-wormhole]', { rotation: 42, scaleX: 1.12, scaleY: 0.76 }, 0)
          .to('.chapter--wormhole [data-orbit]', { rotation: 54 }, 0)
          .to('[data-ring]', { rotation: 92, stagger: 0.025 }, 0)

        const letters = gsap.utils.toArray('[data-distortion] span', scope)
        gsap.to(letters, {
          y: (index) => (index % 2 ? 5 : -5),
          x: (index) => (index - letters.length / 2) * 5,
          skewX: (index) => (index % 2 ? 9 : -9),
          scaleX: (index) => 1 + Math.abs(index - letters.length / 2) * 0.035,
          ease: 'power2.inOut',
          stagger: 0.02,
          scrollTrigger: {
            trigger: '.chapter--singularity',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 0.7,
          },
        })

        gsap.to('.chapter--singularity [data-orbit]', {
          rotation: 72,
          scaleX: 1.18,
          ease: 'none',
          scrollTrigger: {
            trigger: '.chapter--singularity',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        })

        gsap.to('[data-singularity]', {
          scale: 1.1,
          duration: 6.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })

        gsap.from('[data-horizon]', {
          scaleX: 0,
          duration: 1.8,
          stagger: 0.12,
          ease: 'power3.inOut',
          transformOrigin: 'center',
          scrollTrigger: {
            trigger: '.chapter--beyond',
            start: 'top 64%',
          },
        })
        gsap.from('[data-horizon-glow]', {
          scaleX: 0.08,
          autoAlpha: 0,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.chapter--beyond',
            start: 'top 64%',
          },
        })
      }
    }, scope)

    return () => context.revert()
  }, [reducedMotion])

  return (
    <div className="site" ref={root}>
      <header className="site-header">
        <a className="wordmark" href="#silence" aria-label="Project Beyond home">
          PROJECT <span>BEYOND</span>
        </a>
        <span className="site-header__status">
          {String(activeChapter + 1).padStart(2, '0')} / 06
        </span>
      </header>

      <ChapterProgress chapters={chapters} activeIndex={activeChapter} />

      <main>
        {chapters.map((chapter, index) => {
          const Visual = visuals[index]
          return (
            <SectionShell chapter={chapter} key={chapter.id}>
              <Visual />
            </SectionShell>
          )
        })}
      </main>

      <footer className="site-footer">
        <span>PROJECT BEYOND</span>
        <span>A FORMAL GRAYBOX / 2026</span>
      </footer>
    </div>
  )
}

export default App
