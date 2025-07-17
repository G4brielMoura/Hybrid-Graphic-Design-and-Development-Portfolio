"use client"

import { useMode } from "@/lib/ModeContext"
import { motion } from "framer-motion"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiMysql,
  SiGit,
  SiGithub,
  SiWhatsapp,
  SiLinkedin,
  SiGithub as SiGithubAlt,
  SiBehance,
  SiTiktok,
  SiDribbble,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si"

const devSkills = [
  { name: "HTML", icon: SiHtml5, color: "#e34c26" },
  { name: "CSS", icon: SiCss3, color: "#264de4" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
  { name: "Docker", icon: SiDocker, color: "#0db7ed" },
  { name: "MySQL", icon: SiMysql, color: "#00758f" },
  { name: "Git", icon: SiGit, color: "#f1502f" },
  { name: "GitHub", icon: SiGithub, color: "#000000" },
]

const designSkills = [
  { name: "Figma", icon: SiFigma, color: "#a259ff" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31a8ff" },
  { name: "Illustrator", icon: SiAdobeillustrator, color: "#ff9a00" },
  { name: "Canva", icon: SiCanva, color: "#00c4cc" },
  { name: "Behance", icon: SiBehance, color: "#1769ff" },
  { name: "Dribbble", icon: SiDribbble, color: "#ea4c89" },
  { name: "TikTok", icon: SiTiktok, color: "#000000" },
]

const devLinks = [
  {
    label: "Entre em contato direto!",
    icon: SiWhatsapp,
    url: "https://wa.me/98985638256",
  },
  {
    label: "Explore minha trajetória!",
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/gabrielmouradev/",
  },
  {
    label: "Confira meus projetos!",
    icon: SiGithubAlt,
    url: "https://github.com/G4brielMoura",
  },
]

const designLinks = [
  {
    label: "Portfólio no Behance!",
    icon: SiBehance,
    url: "https://www.behance.net/bielpereir",
  },
  {
    label: "Vídeos no TikTok!",
    icon: SiTiktok,
    url: "https://tiktok.com/@seuperfil",
  },
  {
    label: "Veja no Dribbble!",
    icon: SiDribbble,
    url: "https://dribbble.com/Moura_Dev",
  },
]

export default function SkillsIcons() {
  const { mode } = useMode()
  const isDevelop = mode === "develop"
  const skills = isDevelop ? devSkills : designSkills
  const links = isDevelop ? devLinks : designLinks

  return (
    <section className="bg-[#0d0d0d]">
      <div className="max-w-8xl mx-auto rounded-sm bg-background p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* LEFT: Buttons (Desktop Only) */}
        <div className="hidden md:flex flex-row gap-4">
          {links.map(({ label, icon: Icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-800 text-white px-4 pt-4 pb-6 rounded-sm w-44 h-40 flex flex-col justify-between shadow hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              <Icon
                size={28}
                className="text-white transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-sm font-bold leading-tight">{label}</span>
            </a>
          ))}
        </div>

        {/* RIGHT: Scrollable Skills Icons (Desktop only) */}
        <div className="relative overflow-hidden rounded-sm bg-white flex-1 ml-0 hidden md:block">
          <motion.div
            className="flex gap-10 py-5"
            animate={{ x: ["0%", "-300%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 50,
            }}
          >
            {[...skills, ...skills].map(({ name, icon: Icon, color }, i) => (
              <div
                key={`${i}-${name}`}
                className="flex items-center justify-center h-[120px] px-4 group transition-transform hover:scale-110"
              >
                <Icon
                  size={100}
                  className="text-black group-hover:text-[var(--color)] transition-colors duration-300"
                  style={{ "--color": color } as React.CSSProperties}
                  title={name}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile version: Static icons with heading */}
        <div className="block md:hidden bg-white rounded-sm px-5 py-4 text-black">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {skills.map(({ name, icon: Icon, color }, i) => (
              <div
                key={`${i}-${name}`}
                className="group transition-transform hover:scale-110"
                title={name}
              >
                <Icon
                  size={21}
                  className="text-black group-hover:text-[var(--color)] transition-colors duration-300"
                  style={{ "--color": color } as React.CSSProperties}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
