import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Layers } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { PROJECTS, type Project } from '../data/content'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          subtitle="Backend systems built for scale, security, and real-time needs."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.button
              key={project.title}
              type="button"
              className="w-full rounded-2xl border border-white/[0.08] bg-[#12151f]/80 p-6 text-left backdrop-blur-sm transition-colors hover:border-sky-500/25"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                delay: i * 0.08,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -2 }}
              onClick={() => setActive(project)}
            >
              <div className="mb-4 inline-flex rounded-lg bg-sky-500/10 p-2 text-sky-400">
                <Layers size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 ? (
                  <span className="text-xs text-zinc-500">+more</span>
                ) : null}
              </div>
              <p className="mt-4 text-xs font-medium text-sky-400/90">
                View details →
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              aria-label="Close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-sky-500/20 bg-[#12151f] p-6 shadow-2xl shadow-sky-500/10 md:p-8"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className="absolute right-4 top-4 rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
                onClick={() => setActive(null)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
              <h3
                id="project-modal-title"
                className="pr-10 text-xl font-semibold text-white md:text-2xl"
              >
                {active.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {active.description}
              </p>
              <p className="mt-6 text-xs font-medium uppercase tracking-wider text-sky-400/90">
                Tech stack
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-medium uppercase tracking-wider text-sky-400/90">
                Features
              </p>
              <ul className="mt-3 space-y-2">
                {active.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-2 text-sm text-zinc-300 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-sky-500 before:content-['']"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
