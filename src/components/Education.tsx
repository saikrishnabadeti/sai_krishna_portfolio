import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 px-4 py-20 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Academics" title="Education" />
        <motion.div
          className="flex gap-5 rounded-2xl border border-white/[0.08] bg-[#12151f]/80 p-6 backdrop-blur-sm md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
            <GraduationCap size={26} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white md:text-xl">
              B.Tech in Mechanical Engineering
            </h3>
            <p className="mt-1 text-zinc-400">
              Swarnandhra College of Engineering and Technology (JNTUK)
            </p>
            <p className="mt-3 inline-block rounded-lg bg-white/5 px-3 py-1 font-mono text-sm text-zinc-300">
              CGPA: 8.74
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
