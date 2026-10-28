import { useEffect, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Moon, Sun } from 'lucide-react'
import { CvMenu } from './CvMenu'
import { SkillBadges } from './skills'
import { links, name, type Project } from './data'
import { useLang } from './i18n'

const photos = import.meta.glob('./assets/photo.{png,webp,jpg}', { eager: true, import: 'default' })
const photo = Object.values(photos)[0] as string | undefined

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.500 12 11.5 11.5 0 0 0 12 .5z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.800 3.400-1.800 3.600 0 4.300 2.400 4.300 5.500v6.200zM5.300 7.400a2.100 2.100 0 1 1 0-4.200 2.100 2.100 0 0 1 0 4.200zM7.100 20.500H3.600V9h3.500v11.500z" />
    </svg>
  )
}

function useTypewriter(words: string[]) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    const delay = deleting ? 35 : text === word ? 1400 : 70
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true)
      if (deleting && text === '') {
        setDeleting(false)
        return setI(i + 1)
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, words])

  return text
}

function RoleTypewriter({ words }: { words: string[] }) {
  const role = useTypewriter(words)
  return (
    <>
      {role}<span className="caret text-[var(--accent)]">▍</span>
    </>
  )
}

function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-2xl px-6 py-16">
      <Reveal>
        <h2 className="mb-8 flex items-center gap-3 text-2xl font-semibold tracking-tight"><span className="h-5 w-1 rounded-full bg-[var(--accent)]" />{title}</h2>
      </Reveal>
      {children}
    </section>
  )
}

function ProjectList({ items }: { items: Project[] }) {
  const { t } = useLang()
  return (
    <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {items.map((p, i) => {
        const body = (
          <>
            <span className="mono pt-0.5 text-xs text-[var(--accent)]">#{i + 1}</span>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="flex items-center gap-1.5 font-semibold">
                  {p.title}
                  {p.href && (
                    <ArrowUpRight size={16} className="text-[var(--muted)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]" />
                  )}
                </h3>
                <span className="mono text-xs text-[var(--muted)]">{p.period}</span>
              </div>
              {p.contribution && (
                <p className="mt-2 text-sm leading-relaxed">
                  <span className="text-[var(--accent)]">{t.ui.contribution}</span>
                  {p.contribution}
                </p>
              )}
              {p.description && <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{p.description}</p>}
              {p.points && (
                <ul className="mt-3 space-y-1.5 text-sm text-[var(--muted)]">
                  {p.points.map((pt) => <li key={pt} className="leading-relaxed">— {pt}</li>)}
                </ul>
              )}
              <p className="mono mt-3 text-xs text-[var(--muted)]">{p.tags.join(' · ')}</p>
            </div>
          </>
        )
        return (
          <Reveal key={p.title}>
            {p.href ? (
              <a href={p.href} target="_blank" rel="noreferrer" className="group flex gap-4 py-6">{body}</a>
            ) : (
              <div className="flex gap-4 py-6">{body}</div>
            )}
          </Reveal>
        )
      })}
    </div>
  )
}

function LangToggle() {
  const { lang, setLang, t } = useLang()
  return (
    <div role="group" aria-label={t.ui.toggleLang} className="mx-1 flex rounded-full border border-[var(--line)] p-0.5 text-[11px] font-medium">
      {(['pt', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2 py-1 uppercase transition ${lang === l ? 'bg-[var(--accent)] text-[#052e16]' : 'text-[var(--muted)] hover:text-[var(--fg)]'}`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

const iconBtn = 'rounded-full p-2 text-[var(--muted)] transition hover:text-[var(--accent)]'

export default function App() {
  const { t } = useLang()
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
    } catch {
      /* storage unavailable */
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      /* storage unavailable */
    }
  }, [dark])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] backdrop-blur">
        <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-3 text-sm">
          <a href="#" className="font-semibold">Meiado<span className="text-[var(--accent)]">.</span></a>
          <div className="flex items-center gap-1 text-[var(--muted)]">
            <a href="#about" className="hidden px-2 transition hover:text-[var(--fg)] sm:block">{t.ui.nav.about}</a>
            <a href="#experience" className="hidden px-2 transition hover:text-[var(--fg)] sm:block">{t.ui.nav.experience}</a>
            <a href="#projects" className="hidden px-2 transition hover:text-[var(--fg)] sm:block">{t.ui.nav.projects}</a>
            <a href="#roadmap" className="hidden px-2 transition hover:text-[var(--fg)] sm:block">{t.ui.nav.roadmap}</a>
            <a href="#contact" className="hidden px-2 transition hover:text-[var(--fg)] sm:block">{t.ui.nav.contact}</a>
            <div className="ml-1 hidden sm:block"><CvMenu label="CV" className="flex items-center gap-1.5 rounded-full border border-[var(--line)] px-3 py-1.5 text-xs transition hover:border-[var(--accent)] hover:text-[var(--accent)]" /></div>
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconBtn}><GithubIcon /></a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconBtn}><LinkedinIcon /></a>
            <LangToggle />
            <button onClick={() => setDark(!dark)} aria-label={t.ui.toggleTheme} className={iconBtn}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto flex max-w-2xl flex-col-reverse items-start justify-between gap-8 px-6 pb-12 pt-24 sm:flex-row sm:items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mono text-sm text-[var(--accent)]">{t.ui.greeting}</p>
            <h1 className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">{name}</h1>
            <p className="mono mt-3 h-6 text-sm text-[var(--muted)]">
              <RoleTypewriter key={t.roles[1]} words={t.roles} />
            </p>
            <p className="mt-5 max-w-md leading-relaxed text-[var(--muted)]">{t.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm [&_a]:whitespace-nowrap [&_button]:whitespace-nowrap">
              <a href="#projects" className="rounded-full bg-[var(--accent)] px-5 py-2 font-medium text-[#052e16] transition hover:opacity-80">{t.ui.seeProjects}</a>
              <a href="#contact" className="rounded-full border border-[var(--line)] px-5 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent)]">{t.ui.contactBtn}</a>
              <CvMenu label={t.ui.downloadCv} className="flex items-center gap-1.5 rounded-full border border-[var(--line)] px-5 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent)]" />
            </div>
          </motion.div>
          {photo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-40 w-40 shrink-0 overflow-hidden rounded-full border-2 border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_22%,var(--bg))] sm:h-48 sm:w-48"
            >
              <img
                src={photo}
                alt={name}
                className="h-full w-full object-cover object-top"
                style={{
                  filter:
                    'drop-shadow(2px 0 0 var(--accent)) drop-shadow(-2px 0 0 var(--accent)) drop-shadow(0 2px 0 var(--accent)) drop-shadow(0 -2px 0 var(--accent))',
                }}
              />
            </motion.div>
          )}
        </section>

        <Section id="about" title={t.ui.nav.about}>
          <Reveal>
            <div className="space-y-4 leading-relaxed text-[var(--muted)]">
              {t.about.map((t) => <p key={t}>{t}</p>)}
            </div>
            <SkillBadges />
          </Reveal>
        </Section>

        <Section id="experience" title={t.ui.nav.experience}>
          <div className="space-y-10">
            {t.experience.map((e) => (
              <Reveal key={e.role + e.company}>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-semibold">{e.role} <span className="font-normal text-[var(--accent)]">· {e.company}</span></h3>
                    <span className="mono text-xs text-[var(--muted)]">{e.period}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{e.summary}</p>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                    {e.points.map((p) => <li key={p} className="leading-relaxed">— {p}</li>)}
                  </ul>
                  <p className="mono mt-3 text-xs text-[var(--muted)]">{e.skills.join(' · ')}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 space-y-3 border-t border-[var(--line)] pt-8">
            {t.education.map((ed) => (
              <Reveal key={ed.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm">
                  <span>{ed.title} <span className="text-[var(--muted)]">· {ed.place}</span></span>
                  <span className="mono text-xs text-[var(--muted)]">{ed.period}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="projects" title={t.ui.nav.projects}>
          <p className="mb-8 text-sm leading-relaxed text-[var(--muted)]">
            {t.ui.workNote}
          </p>
          <ProjectList items={t.workProjects} />
          <h3 className="mb-4 mt-14 text-sm font-medium text-[var(--muted)]">{t.ui.personalTitle}</h3>
          <ProjectList items={t.personalProjects} />
        </Section>

        <Section id="roadmap" title={t.ui.nav.roadmap}>
          <Reveal>
            <p className="leading-relaxed text-[var(--muted)]">{t.roadmap.intro}</p>
            <ul className="mt-6 space-y-4">
              {t.roadmap.items.map((r) => (
                <li key={r.title} className="flex gap-3 text-sm">
                  <span className="mono text-[var(--accent)]">→</span>
                  <span>
                    <span className="font-medium">{r.title}</span>
                    <span className="text-[var(--muted)]"> — {r.note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        <Section id="contact" title={t.ui.nav.contact}>
          <Reveal>
            <p className="text-[var(--muted)]">{t.ui.contactLine}</p>
            <a href={links.email} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[#052e16] transition hover:opacity-80">
              <Mail size={16} /> gabrielmeiado20@gmail.com
            </a>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-[var(--line)] py-8 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} {name}
      </footer>
    </>
  )
}
