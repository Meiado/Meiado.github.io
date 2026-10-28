import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { content, type Lang } from './data'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof content)[Lang] }

const LangContext = createContext<Ctx | null>(null)

const initialLang = (): Lang => {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    /* storage unavailable */
  }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* storage unavailable */
    }
  }, [lang])

  return <LangContext value={{ lang, setLang, t: content[lang] }}>{children}</LangContext>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
