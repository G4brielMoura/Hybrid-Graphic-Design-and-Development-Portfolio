"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2 } from "lucide-react"
// import Directone  from "../_components/directone";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa"

/* ─── Conteúdo dos projetos ─────────────────────────────────── */
const rotatingProjects = [
  {
    title: "Wab Site Nince",
    subtitle: "Tech & Games Network",
    url: "https://example.com/project1",
    description:
      "Do front‑end ao joystick, da inteligência artificial aos lançamentos mais aguardados do ano, nosso conteúdo é feito por.",
    techs: [
      { icon: <FaHtml5 />, color: "#E34F26" },
      { icon: <FaCss3Alt />, color: "#1572B6" },
      { icon: <FaJs />, color: "#F7DF1E" },
    ],
    image: "/images/vintage1.jpg",
  },
  {
    title: "Next Blog Platform",
    subtitle: "Conteúdo + API REST",
    url: "https://example.com/project2",
    description:
      "Sistema dinâmico de postagens com Next.js, MongoDB e integração com painel de administração.",
    techs: [
      { icon: <FaHtml5 />, color: "#E34F26" },
      { icon: <FaCss3Alt />, color: "#1572B6" },
      { icon: <FaJs />, color: "#F7DF1E" },
    ],
    image: "/images/vintage4.jpg",
  },
  {
    title: "Landing Fintech",
    subtitle: "Pagamentos e UX",
    url: "https://example.com/project3",
    description:
      "Landing page responsiva para startup de tecnologia financeira com foco em experiência do usuário.",
    techs: [
      { icon: <FaHtml5 />, color: "#E34F26" },
      { icon: <FaCss3Alt />, color: "#1572B6" },
      { icon: <FaJs />, color: "#F7DF1E" },
    ],
    image: "/images/vintage6.jpg",
  },
]

const rotatingTitles = ["Developer", "Software Engineer"]

/* ─── Componente ─────────────────────────────────────────────── */
export default function HeroSection() {
  const [idx, setIdx] = useState(0)
  const [roleIdx, setRole] = useState(0)
  const [hovered, setHover] = useState(false)

  /* Auto‑rotate projetos */
  useEffect(() => {
    if (!hovered) {
      const t = setInterval(
        () => setIdx((p) => (p + 1) % rotatingProjects.length),
        3000
      )
      return () => clearInterval(t)
    }
  }, [hovered])

  /* Auto‑rotate título “I'm a …” */
  useEffect(() => {
    const t = setInterval(
      () => setRole((p) => (p + 1) % rotatingTitles.length),
      2500
    )
    return () => clearInterval(t)
  }, [])

  const project = rotatingProjects[idx]
  const role = rotatingTitles[roleIdx]

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-[#0d0d0d] text-white px-[12px] "
    >
      {/* ─────────── MOBILE / TABLET (< md) ─────────── */}
      <div className="flex max-w-8xl  rounded-sm bg-background justify-between  md:hidden">
        {/* Imagem (70 %) */}
        <motion.div
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          className="relative flex-none w-[65vw] max-w-[320px] aspect-[4/3] rounded-md overflow-hidden bg-black shadow-lg"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 65vw"
            className="object-cover "
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <h3 className="text-sm font-bold">{project.title}</h3>
            <p className="text-xs opacity-80">{project.subtitle}</p>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 6 }}
            className="absolute top-3 left-3 bg-black/80 p-2 rounded-full"
          >
            <Code2 size={16} />
          </motion.div>
        </motion.div>

        {/* Botões (30 %) */}
        <div className="flex flex-col justify-between gap-[14px]">
          {[
            { href: "https://wa.me/", icon: FaWhatsapp, color: "#25D366" },
            {
              href: "https://linkedin.com/",
              icon: FaLinkedin,
              color: "#0A66C2",
            },
            { href: "https://github.com/", icon: FaGithub, color: "#FFFFFF" },
          ].map((btn, i) => (
            <motion.a
              whileTap={{ scale: 0.92 }}
              key={i}
              href={btn.href}
              target="_blank"
              rel="noreferrer"
              className="group flex-none w-[25vw] max-w-[100px] aspect-square bg-zinc-800 rounded-md flex items-center justify-center shadow-lg"
            >
              <btn.icon
                size={56}
                className="text-white group-hover:text-[var(--brand)] transition-colors"
                style={{ "--brand": btn.color } as React.CSSProperties}
              />
            </motion.a>
          ))}
        </div>

        
      </div>

      {/* <div className=" flex flex-col gap-4">
      
      </div> */}

      {/* ─────────── DESKTOP (≥ md) ─────────── */}
      <div className="hidden md:grid md:grid-cols-2 gap-4">
        {/* ESQUERDA – imagem grande com hover overlay */}
        <motion.div
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          className="relative w-full h-[500px] rounded-0 overflow-hidden bg-black shadow-lg"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw"
            className="object-cover"
          />

          {/* overlay em hover */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                key="hover"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 w-full  bg-zinc-800 text-white rounded-t-2xl px-6 py-4 grid grid-cols-2 gap-4"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold">{project.subtitle}</p>
                  </div>
                  <Link
                    href={project.url}
                    target="_blank"
                    className="bg-black text-white rounded-full px-6 py-2 font-bold w-fit mt-4"
                  >
                    Visitar
                  </Link>
                </div>

                <div className="flex flex-col justify-between items-end text-right">
                  <div className="flex gap-2">
                    {project.techs.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{ color: tech.color }}
                        className="hover:scale-125 transition-transform"
                      >
                        {tech.icon}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-medium">{project.description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 6 }}
            className="absolute top-4 left-4 bg-black p-2 rounded-full"
          >
            <Code2 size={20} />
          </motion.div>
        </motion.div>

        {/* DIREITA – cards de navegação */}
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="#"
            className="bg-zinc-800 hover:bg-zinc-700 p-6 rounded-lg relative"
          >
            <div className="text-3xl font-extrabold text-white">
              PROJECTS WORK
            </div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-6 right-6 text-white text-2xl"
            >
              →
            </motion.div>
          </Link>

          <Link
            href="/contacts"
            className="bg-zinc-800 hover:bg-zinc-700 p-6 rounded-lg relative"
          >
            <div className="text-3xl font-extrabold text-white">CONTACT US</div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-6 right-6 text-white text-2xl"
            >
              →
            </motion.div>
          </Link>

          <div className="bg-zinc-800 p-6 rounded-lg text-white">
            <div className="font-extrabold text-3xl">GABRIEL MOURA</div>
            <div className="text-sm mt-2">
              I'm a{" "}
              <span className="font-bold">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    {role}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          </div>

          <Link
            href="#"
            className="bg-zinc-800 hover:bg-zinc-700 p-6 rounded-lg relative"
          >
            <div className="text-3xl font-extrabold text-white">ABOUT ME</div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-6 right-6 text-white text-2xl"
            >
              →
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
