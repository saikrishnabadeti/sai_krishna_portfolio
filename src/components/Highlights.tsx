import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { ACHIEVEMENTS } from '../data/content'

const INTERVAL_MS = 2800

export function Highlights() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % ACHIEVEMENTS.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="highlights" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Impact"
          title="Highlights"
          subtitle="Key outcomes from recent backend work."
        />

        <div
          className="relative mx-auto min-h-[200px] max-w-2xl rounded-2xl border border-sky-500/30 bg-[#12151f]/90 p-10 shadow-[0_0_40px_-12px_rgba(56,189,248,0.35)] backdrop-blur-sm md:min-h-[220px] md:p-12"
          style={{
            boxShadow:
              '0 0 0 1px rgba(56, 189, 248, 0.15), 0 0 48px -8px rgba(56, 189, 248, 0.25)',
          }}
        >
          <div className="flex min-h-[120px] items-center justify-center md:min-h-[140px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                className="text-center text-xl font-medium leading-relaxed text-white md:text-2xl"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {ACHIEVEMENTS[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {ACHIEVEMENTS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show highlight ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-8 bg-sky-400'
                    : 'w-2 bg-zinc-600 hover:bg-zinc-500'
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
