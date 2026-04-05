import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { SKILLS } from '../data/content'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Stack"
          title="Core skills"
          subtitle="Backend-focused technologies I use daily."
        />
        <motion.ul
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {SKILLS.map((skill) => (
            <motion.li key={skill} variants={item}>
              <motion.span
                className="inline-block rounded-full border border-white/10 bg-[#12151f]/90 px-4 py-2 text-sm text-zinc-200 shadow-sm backdrop-blur-sm md:text-[0.95rem]"
                whileHover={{
                  scale: 1.04,
                  borderColor: 'rgba(56, 189, 248, 0.35)',
                  boxShadow: '0 0 24px -4px rgba(56, 189, 248, 0.25)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                {skill}
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
