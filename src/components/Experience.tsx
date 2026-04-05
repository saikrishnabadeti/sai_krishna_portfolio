import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const items = [
  'Built REST APIs and WebSocket services',
  'Implemented JWT & OAuth authentication',
  'Designed DB models using SQLAlchemy',
  'Improved performance using async tasks',
  'Dockerized backend services',
]

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-4 py-20 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          subtitle="Current role and responsibilities."
        />
        <motion.div
          className="relative rounded-2xl border border-white/[0.08] bg-[#12151f]/80 p-6 backdrop-blur-sm md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-sky-500/50 via-sky-500/20 to-transparent md:left-8" />
          <div className="relative pl-10 md:pl-12">
            <div className="absolute left-0 top-1 flex h-10 w-10 -translate-x-[5px] items-center justify-center rounded-full border border-sky-500/40 bg-[#080a0f] text-sky-400 md:left-1">
              <Briefcase size={18} />
            </div>
            <p className="text-sm font-medium text-sky-400/90">
              Mar 2025 – Present
            </p>
            <h3 className="mt-1 text-xl font-semibold text-white">
              Software Engineer
            </h3>
            <p className="mt-0.5 text-zinc-400">
              SecurXpert Technologies Pvt. Ltd.
            </p>
            <ul className="mt-6 space-y-3">
              {items.map((line, i) => (
                <motion.li
                  key={line}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-300 md:text-base"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                    aria-hidden
                  />
                  {line}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
