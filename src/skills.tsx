import javaLogo from 'devicon/icons/java/java-original.svg'
import oracleLogo from 'devicon/icons/oracle/oracle-original.svg'
import {
  siBun, siDocker, siGit, siKubernetes, siMongodb, siMysql, 
  siNextdotjs, siNodedotjs, siPostgresql, siReact, siSpringboot,
  siSwagger, siVuedotjs, type SimpleIcon,
} from 'simple-icons'

type Skill =
  | { name: string; icon: SimpleIcon }
  | { name: string; src: string }

const skills: Skill[] = [
  { name: 'Java', src: javaLogo },
  { name: 'Spring Boot', icon: siSpringboot },
  { name: 'Swagger', icon: siSwagger },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'Bun', icon: siBun },
  { name: 'React', icon: siReact },
  { name: 'Next.js', icon: siNextdotjs },
  { name: 'Vue.js', icon: siVuedotjs },
  { name: 'PostgreSQL', icon: siPostgresql },
  { name: 'MongoDB', icon: siMongodb },
  { name: 'MySQL', icon: siMysql },
  { name: 'Docker', icon: siDocker },
  { name: 'Kubernetes', icon: siKubernetes },
  { name: 'Oracle Cloud', src: oracleLogo },
  { name: 'Git', icon: siGit },
]

// brand colors too dark to read on the dark theme fall back to the text color
const isDark = (hex: string) => {
  const n = parseInt(hex, 16)
  const lum = (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255
  return lum < 0.3
}

export function SkillBadges() {
  return (
    <ul className="mt-8 grid grid-cols-4 gap-x-2 gap-y-6 sm:grid-cols-5">
      {skills.map((s) => {
        const color = 'icon' in s ? (isDark(s.icon.hex) ? 'currentColor' : `#${s.icon.hex}`) : ''
        return (
          <li key={s.name} className="group flex flex-col items-center gap-2 text-center">
            <span className="flex h-12 w-12 items-center justify-center transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-110">
              {'icon' in s ? (
                <svg viewBox="0 0 24 24" width="36" height="36" fill={color} aria-hidden>
                  <path d={s.icon.path} />
                </svg>
              ) : (
                <img src={s.src} alt="" width={36} height={36} />
              )}
            </span>
            <span className="text-xs text-[var(--muted)] transition group-hover:text-[var(--fg)]">{s.name}</span>
          </li>
        )
      })}
    </ul>
  )
}
