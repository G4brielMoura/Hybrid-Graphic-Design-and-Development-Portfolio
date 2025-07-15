"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2 } from "lucide-react"
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa"

const rotatingProjects = [
  {
    title: "Wab Site Nince",
    subtitle: "Tech & Games Network",
    url: "https://example.com/project1",
    description:
      "Do front-end ao joystick, da inteligência artificial aos lançamentos mais aguardados do ano, nosso conteúdo é feito por.",
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

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % rotatingProjects.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [hovered])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingTitles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const project = rotatingProjects[index]
  const role = rotatingTitles[roleIndex]

  return (
    <motion.section
      className="w-full bg-[#0d0d0d] text-white px-4"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* ESQUERDA */}
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-black shadow-lg"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1080}
            height={1080}
            className="object-cover w-full h-full"
          />

          <AnimatePresence>
            {hovered && (
              <motion.div
                key="hover"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 w-full bg-lime-500 text-black rounded-t-2xl px-6 py-4 grid grid-cols-2 gap-4"
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
                    className="bg-black text-white rounded-full px-6 py-2 font-bold w-fit mt-4"
                    target="_blank"
                  >
                    Visitar
                  </Link>
                </div>

                <div className="flex flex-col justify-between items-end text-right">
                  <div className="flex gap-2 justify-end">
                    {project.techs.map((tech, idx) => (
                      <span
                        key={idx}
                        className="transition-transform transform hover:scale-125"
                        style={{ color: tech.color }}
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
            className="absolute top-4 left-4 bg-black p-2 rounded-full text-white"
          >
            <Code2 size={20} />
          </motion.div>
        </motion.div>

        {/* DIREITA */}
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="#"
            className="bg-zinc-800 hover:bg-zinc-700 p-6 rounded-lg relative"
          >
            <div className="text-lg font-extrabold text-white">
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
            href="#"
            className="bg-zinc-800 hover:bg-zinc-700 p-6 rounded-lg relative"
          >
            <div className="text-lg font-extrabold text-white">CONTACT US</div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-6 right-6 text-white text-2xl"
            >
              →
            </motion.div>
          </Link>
          <div className="bg-zinc-800 p-6 rounded-lg text-white">
            <div className="font-extrabold text-lg">GABRIEL MOURA</div>
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
            <div className="text-lg font-extrabold text-white">ABOUT ME</div>
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
