import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, Mail, Phone } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { SectionHeading } from './SectionHeading'
import { PERSON } from '../data/content'

export function Contact() {
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null)

  async function copyValue(value: string, field: 'phone' | 'email') {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedField(field)
      window.setTimeout(() => setCopiedField(null), 1400)
    } catch {
      // No-op fallback for older/blocked clipboard contexts.
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Reach out"
          title="Contact"
          subtitle="Open to backend roles and interesting collaborations."
        />
        <div className="mx-auto grid w-full max-w-3xl gap-8">
          <motion.div
            className="space-y-6 rounded-2xl border border-white/[0.08] bg-[#12151f]/80 p-6 backdrop-blur-sm md:p-8"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between gap-3 rounded-xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/[0.03]">
              <a
                href={`tel:${PERSON.phone.replace(/\s/g, '')}`}
                className="flex min-w-0 items-center gap-4"
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
              <button
                type="button"
                aria-label="Copy phone number"
                className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:border-sky-500/40 hover:text-sky-300"
                onClick={() => copyValue(PERSON.phone, 'phone')}
              >
                {copiedField === 'phone' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            <div className="flex items-center justify-between gap-3 rounded-xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/[0.03]">
              <a href={`mailto:${PERSON.email}`} className="flex min-w-0 items-center gap-4">
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
              <button
                type="button"
                aria-label="Copy email address"
                className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:border-sky-500/40 hover:text-sky-300"
                onClick={() => copyValue(PERSON.email, 'email')}
              >
                {copiedField === 'email' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
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
        </div>
      </div>
    </section>
  )
}
