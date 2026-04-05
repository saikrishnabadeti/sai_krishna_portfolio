import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { SectionHeading } from './SectionHeading'
import { PERSON } from '../data/content'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent('Portfolio contact')
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${PERSON.email}?subject=${subject}&body=${body}`
    setSent(true)
    window.setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Reach out"
          title="Contact"
          subtitle="Open to backend roles and interesting collaborations."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="space-y-6 rounded-2xl border border-white/[0.08] bg-[#12151f]/80 p-6 backdrop-blur-sm md:p-8"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={`tel:${PERSON.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-4 rounded-xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/[0.03]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                <Phone size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Phone
                </p>
                <p className="text-zinc-100">{PERSON.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${PERSON.email}`}
              className="flex items-center gap-4 rounded-xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/[0.03]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Email
                </p>
                <p className="break-all text-zinc-100">{PERSON.email}</p>
              </div>
            </a>
            <div className="flex gap-3 pt-2">
              <a
                href={PERSON.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-zinc-300 transition hover:border-sky-500/35 hover:text-sky-400"
              >
                <GitHubIcon size={18} /> GitHub
              </a>
              <a
                href={PERSON.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-zinc-300 transition hover:border-sky-500/35 hover:text-sky-400"
              >
                <LinkedInIcon size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            className="rounded-2xl border border-white/[0.08] bg-[#12151f]/80 p-6 backdrop-blur-sm md:p-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <label className="block">
              <span className="text-xs font-medium text-zinc-400">Name</span>
              <input
                name="name"
                required
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#080a0f]/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30"
                placeholder="Your name"
              />
            </label>
            <label className="mt-4 block">
              <span className="text-xs font-medium text-zinc-400">Email</span>
              <input
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#080a0f]/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30"
                placeholder="you@example.com"
              />
            </label>
            <label className="mt-4 block">
              <span className="text-xs font-medium text-zinc-400">Message</span>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-[#080a0f]/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30"
                placeholder="Tell me about your project or role…"
              />
            </label>
            <motion.button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 py-3.5 text-sm font-medium text-[#080a0f] transition hover:bg-sky-400 md:w-auto md:px-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={18} />
              Send message
            </motion.button>
            {sent ? (
              <p className="mt-3 text-sm text-sky-400/90">
                Opening your email client…
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
