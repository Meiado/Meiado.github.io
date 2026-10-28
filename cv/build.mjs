import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { general, vaga } from './content.mjs'

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

function render(cv) {
  const skills = cv.skills.map(([k, v]) => `<div><b>${esc(k)}:</b> ${esc(v)}</div>`).join('')
  const jobs = cv.experience
    .map(
      (e) => `<div class="job">
  <div class="row"><span><span class="role">${esc(e.role)}</span> · ${esc(e.company)}</span><span class="muted">${esc(e.period)}</span></div>
  <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
  <div class="stack"><b>Stack:</b> ${esc(e.stack)}</div>
</div>`,
    )
    .join('')
  const edu = cv.education
    .map((e) => `<div class="row"><span>${esc(e.title)} · <span class="muted">${esc(e.place)}</span></span><span class="muted">${esc(e.period)}</span></div>`)
    .join('')
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>${esc(cv.contact.name)} — Currículo</title><style>${css}</style></head><body>
<h1>${esc(cv.contact.name)}</h1>
<div class="headline">${esc(cv.headline)}</div>
<div class="contact">${esc(cv.contact.location)} · ${esc(cv.contact.email)} · ${cv.contact.links.map(esc).join(' · ')}</div>
<h2>Resumo</h2><p style="margin:0">${esc(cv.summary)}</p>
<h2>Tecnologias</h2>${skills}
<h2>Experiência</h2>${jobs}
<h2>Projetos</h2><ul>${cv.projects.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
<h2>Formação e certificações</h2>${edu}
</body></html>`
}

mkdirSync(resolve(root, 'cv/out'), { recursive: true })
const targets = [
  { cv: general, out: resolve(root, 'public', general.file) },
  { cv: vaga, out: resolve(root, 'cv/out', vaga.file) },
]
for (const { cv, out } of targets) {
  const html = resolve(root, 'cv/out', cv.file.replace('.pdf', '.html'))
  writeFileSync(html, render(cv))
  execFileSync(
    'brave-browser',
    ['--headless=new', '--no-sandbox', '--disable-gpu', '--no-pdf-header-footer', `--print-to-pdf=${out}`, `file://${html}`],
    { stdio: 'ignore' },
  )
  console.log('ok', out)
}
