import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { PERSON } from '../data/content'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pb-20 pt-28 md:pt-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,320px)_1fr] md:items-center md:gap-16">
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-sky-500/40 via-cyan-400/20 to-transparent opacity-80 blur-md"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl border border-sky-500/25 bg-[#12151f] p-1 shadow-xl shadow-sky-500/10">
              <img
                src={PERSON.profileImage}
                alt={PERSON.name}
                className="h-56 w-56 rounded-[1.15rem] object-cover md:h-64 md:w-64"
                width={256}
                height={256}
              />
            </div>
          </div>
        </motion.div>

        <div className="text-center md:text-left">
          <motion.p
            className="mb-2 font-mono text-sm text-sky-400/90"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
          >
            {PERSON.location} · {PERSON.experience}
          </motion.p>
          <motion.h1
            className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {PERSON.name}
          </motion.h1>
          <motion.p
            className="mt-3 text-lg text-sky-300/95 md:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
          >
            {PERSON.role}
          </motion.p>
          <motion.p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400 md:mx-0 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
          >
            {PERSON.tagline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <motion.a
              href={PERSON.resumePath}
              download="SaiKrishna_Badeti_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-[#080a0f] shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={18} strokeWidth={2.25} />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-sky-500/40 hover:bg-white/[0.07]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} strokeWidth={2.25} />
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center justify-center gap-4 md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <a
              href={PERSON.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 p-3 opacity-80 transition hover:border-sky-500/35 hover:opacity-100"
              aria-label="GitHub"
            >
              <GitHubIcon size={22} className="block" />
            </a>
            <a
              href={PERSON.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 rounded-xl border border-white/10 p-3 opacity-80 transition hover:border-sky-500/35 hover:opacity-100 hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={22} className="block" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="h-8 w-5 rounded-full border-2 border-zinc-600"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <div className="mx-auto mt-1.5 h-1.5 w-1 rounded-full bg-sky-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
