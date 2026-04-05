import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { PERSON } from '../data/content'

export function Summary() {
  return (
    <section id="summary" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="About" title="Professional summary" />
        <motion.div
          className="rounded-2xl border border-white/[0.08] bg-[#12151f]/80 p-8 shadow-lg shadow-black/20 backdrop-blur-sm md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-center text-lg leading-relaxed text-zinc-300 md:text-xl">
            {PERSON.summary}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
