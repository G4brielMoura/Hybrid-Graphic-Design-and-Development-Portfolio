"use client"

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
} from "react-icons/si"

const skills = [
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

const links = [
  {
    label: "Entre em contato direto!",
    icon: SiWhatsapp,
  },
  {
    label: "Explore minha trajetória!",
    icon: SiLinkedin,
  },
  {
    label: "Confira meus projetos!",
    icon: SiGithubAlt,
  },
]

export default function SkillsIcons() {
  return (
    <section className="bg-[#0d0d0d]">
      <div className="max-w-8xl mx-auto rounded-sm bg-background p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* LEFT: Buttons (Desktop Only) */}
        <div className="hidden md:flex flex-row gap-4">
          {links.map(({ label, icon: Icon }, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={i}
              className="group bg-zinc-800 text-white px-4 pt-4 pb-6 rounded-sm w-44 h-40 flex flex-col justify-between shadow hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              <Icon
                size={28}
                className="text-white transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-sm font-bold leading-tight">{label}</span>
            </motion.div>
          ))}
        </div>

        {/* RIGHT: Scrollable Skills Icons (Desktop only) */}
        <div className="relative overflow-hidden rounded-sm bg-white flex-1 ml-0 hidden md:block">
          <motion.div
            className="flex gap-10 py-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 20,
            }}
          >
            {[...skills, ...skills].map(({ name, icon: Icon, color }, i) => (
              <div
                key={i + name}
                className="flex items-center justify-center h-[120px] px-4 group transition-transform hover:scale-110"
              >
                <Icon
                  size={120}
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
          {/* ícones */}
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
