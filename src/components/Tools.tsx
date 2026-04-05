import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { TOOLS } from '../data/content'

export function Tools() {
  return (
    <section id="tools" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Workflow"
          title="Tools"
          subtitle="Platforms and editors that power my day-to-day development."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool, i) => (
            <motion.article
              key={tool.name}
              className="group rounded-2xl border border-white/[0.08] bg-[#12151f]/80 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.06,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(56, 189, 248, 0.25)',
                boxShadow: '0 0 32px -8px rgba(56, 189, 248, 0.2)',
              }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 p-2 ring-1 ring-white/10 transition group-hover:ring-sky-500/30">
                {tool.icon ? (
                  <img
                    src={tool.icon}
                    alt=""
                    className="h-8 w-8 object-contain"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Sparkles
                    className="h-8 w-8 text-sky-400"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                )}
              </div>
              <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {tool.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
