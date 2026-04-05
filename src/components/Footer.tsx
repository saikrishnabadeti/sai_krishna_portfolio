import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { PERSON } from '../data/content'

const quick = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
  { href: '#resume', label: 'Resume' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-4 py-12 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-sky-400/90">{'<SKB />'}</p>
          <p className="mt-2 max-w-xs text-sm text-zinc-500">
            Python backend developer focused on APIs, async systems, and Docker.
          </p>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
            {quick.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-zinc-200">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3">
          <a
            href={PERSON.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 opacity-70 transition hover:bg-white/5 hover:opacity-100"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={PERSON.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 rounded-lg p-2 opacity-90 transition hover:bg-white/5 hover:text-sky-400"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href={`mailto:${PERSON.email}`}
            className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/5 hover:text-sky-400"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} {PERSON.shortName}. All rights reserved.
      </p>
    </footer>
  )
}
