import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { PERSON } from '../data/content'
import { publicUrl } from '../utils/publicUrl'

export function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="CV"
          title="Resume"
          subtitle="Download or preview the latest version."
        />
        <motion.div
          className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12151f]/80 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-4 border-b border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                <FileText size={24} />
              </span>
              <div>
                <p className="font-medium text-white">Sai Krishna Badeti</p>
                <p className="text-sm text-zinc-400">Backend Developer · PDF</p>
              </div>
            </div>
            <motion.a
              href={publicUrl(PERSON.resumePath)}
              download="SaiKrishna_Badeti_Resume.pdf"
              className="shine-hollow inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-sky-100"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={18} />
              <span className="nav-link-shine">Download Resume</span>
            </motion.a>
          </div>
          <div className="relative h-[min(70vh,640px)] w-full bg-[#080a0f]">
            <iframe
              title="Resume preview"
              src={`${publicUrl(PERSON.resumePath)}#view=FitH`}
              className="h-full w-full border-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
