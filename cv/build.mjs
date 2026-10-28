import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cvs } from './content.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

const css = `
@page { size: A4; margin: 11mm 14mm; }
* { box-sizing: border-box; }
body { margin: 0; font-family: "Liberation Sans", Arial, Helvetica, sans-serif; font-size: 9.1pt; line-height: 1.33; color: #1a1a1a; }
h1 { margin: 0; font-size: 22pt; letter-spacing: -0.3px; }
.headline { margin-top: 2px; font-size: 10.5pt; color: #15803d; font-weight: 600; }
.contact { margin-top: 5px; font-size: 8.8pt; color: #555; }
h2 { margin: 9px 0 4px; padding-bottom: 2px; border-bottom: 1px solid #d4d4d4; font-size: 10pt; text-transform: uppercase; letter-spacing: 1px; }
.row { display: flex; justify-content: space-between; gap: 12px; }
.job { margin-bottom: 6px; break-inside: avoid; }
.role { font-weight: 700; }
.muted { color: #666; }
ul { margin: 3px 0 0; padding-left: 15px; }
li { margin-bottom: 1.5px; }
.stack { margin-top: 2px; font-size: 8.8pt; color: #555; }
`

const labels = {
  pt: { summary: 'Resumo', skills: 'Tecnologias', experience: 'Experiência', projects: 'Projetos', education: 'Formação e certificações', stack: 'Stack', title: 'Currículo' },
  en: { summary: 'Summary', skills: 'Technologies', experience: 'Experience', projects: 'Projects', education: 'Education & certifications', stack: 'Stack', title: 'Resume' },
}

function render(cv, lang) {
  const t = labels[lang]
  const skills = cv.skills.map(([k, v]) => `<div><b>${esc(k)}:</b> ${esc(v)}</div>`).join('')
  const jobs = cv.experience
    .map(
      (e) => `<div class="job">
  <div class="row"><span><span class="role">${esc(e.role)}</span> · ${esc(e.company)}</span><span class="muted">${esc(e.period)}</span></div>
  <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
  <div class="stack"><b>${t.stack}:</b> ${esc(e.stack)}</div>
</div>`,
    )
    .join('')
  const edu = cv.education
    .map((e) => `<div class="row"><span>${esc(e.title)} · <span class="muted">${esc(e.place)}</span></span><span class="muted">${esc(e.period)}</span></div>`)
    .join('')
  return `<!doctype html><html lang="${lang === 'pt' ? 'pt-BR' : 'en'}"><head><meta charset="utf-8"><title>${esc(cv.contact.name)} — ${t.title}</title><style>${css}</style></head><body>
<h1>${esc(cv.contact.name)}</h1>
<div class="headline">${esc(cv.headline)}</div>
<div class="contact">${esc(cv.contact.location)} · ${esc(cv.contact.email)} · ${cv.contact.links.map(esc).join(' · ')}</div>
<h2>${t.summary}</h2><p style="margin:0">${esc(cv.summary)}</p>
<h2>${t.skills}</h2>${skills}
<h2>${t.experience}</h2>${jobs}
<h2>${t.projects}</h2><ul>${cv.projects.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
<h2>${t.education}</h2>${edu}
</body></html>`
}

mkdirSync(resolve(root, 'cv/out'), { recursive: true })
for (const { file, lang, site, data } of cvs) {
  const out = resolve(root, site ? 'public' : 'cv/out', file)
  const html = resolve(root, 'cv/out', file.replace('.pdf', '.html'))
  writeFileSync(html, render(data, lang))
  execFileSync(
    'brave-browser',
    ['--headless=new', '--no-sandbox', '--disable-gpu', '--no-pdf-header-footer', `--print-to-pdf=${out}`, `file://${html}`],
    { stdio: 'ignore' },
  )
  console.log('ok', out)
}
