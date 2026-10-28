import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Download } from 'lucide-react'

const base = import.meta.env.BASE_URL

const options = [
  { lang: 'Português', href: `${base}cv-gabriel-meiado-pt.pdf`, flag: <BrazilFlag /> },
  { lang: 'English', href: `${base}cv-gabriel-meiado-en.pdf`, flag: <UsFlag /> },
]

function BrazilFlag() {
  return (
    <svg viewBox="0 0 28 20" width="22" height="16" className="rounded-[2px]" aria-hidden>
      <rect width="28" height="20" fill="#009c3b" />
      <path d="M14 3 25 10 14 17 3 10z" fill="#ffdf00" />
      <circle cx="14" cy="10" r="4.2" fill="#002776" />
    </svg>
  )
}

function UsFlag() {
  return (
    <svg viewBox="0 0 28 20" width="22" height="16" className="rounded-[2px]" aria-hidden>
      <rect width="28" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={i * (20 / 13)} width="28" height={20 / 13} fill="#b22234" />
      ))}
      <rect width="12" height={(20 / 13) * 7} fill="#3c3b6e" />
    </svg>
  )
}

export function CvMenu({ label, className }: { label: string; className: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-haspopup="menu" className={className}>
        <Download size={14} />
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 min-w-40 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg)] p-1 shadow-lg"
        >
          {options.map((o) => (
            <a
              key={o.lang}
              role="menuitem"
              href={o.href}
              download
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--line)] hover:text-[var(--fg)]"
            >
              {o.flag}
              {o.lang}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
