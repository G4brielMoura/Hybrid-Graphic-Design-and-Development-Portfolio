"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaReact, FaHtml5, FaJs, FaFigma } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"
import { useMode } from "@/lib/ModeContext"

const devProjects = [
  {
    title: "Landing Page",
    subtitle: "Institucional moderna",
    image: "/images/logo1.jpg",
    url: "https://example.com/dev1",
    techs: [
      { icon: <FaReact />, color: "#61DAFB" },
      { icon: <SiNextdotjs />, color: "#fff" },
      { icon: <SiTailwindcss />, color: "#38BDF8" },
    ],
    miniDescription: "Feita com React, Next.js e Tailwind.",
  },
  {
    title: "E-commerce",
    subtitle: "Loja virtual completa",
    image: "/images/vintage1.jpg",
    url: "https://example.com/dev2",
    techs: [
      { icon: <FaHtml5 />, color: "#E34F26" },
      { icon: <FaJs />, color: "#F7DF1E" },
      { icon: <SiTailwindcss />, color: "#38BDF8" },
    ],
    miniDescription: "Carrinho, checkout e painel admin.",
  },
  {
    title: "Blog Ruby",
    subtitle: "Conteúdo dinâmico",
    image: "/images/post1.jpg",
    url: "https://example.com/dev3",
    techs: [{ icon: <FaHtml5 />, color: "#E34F26" }],
    miniDescription: "Feito em Ruby on Rails e HTML.",
  },
]

const designProjects = [
  {
    title: "Identidade Visual",
    subtitle: "Marca & Branding",
    image: "/images/post5.jpg",
    url: "https://example.com/design1",
    techs: [{ icon: <FaFigma />, color: "#a259ff" }],
    miniDescription: "Criação de logotipo e guia visual.",
  },
  {
    title: "UI App Fitness",
    subtitle: "Mobile Experience",
    image: "/images/logo6.jpg",
    url: "https://example.com/design2",
    techs: [{ icon: <FaFigma />, color: "#a259ff" }],
    miniDescription: "Protótipo interativo no Figma.",
  },
  {
    title: "Landing Design",
    subtitle: "Interface moderna",
    image: "/images/vintage4.jpg",
    url: "https://example.com/design3",
    techs: [{ icon: <FaFigma />, color: "#a259ff" }],
    miniDescription: "Layout para conversão de leads.",
  },
]

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { mode } = useMode()

  const projects = mode === "design" ? designProjects : devProjects

  return (
    <main className="bg-[#0d0d0d] min-h-screen p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative aspect-[1/1] overflow-hidden bg-black rounded-md shadow-lg group"
          >
            {/* Botão com animação no desktop e fixo no mobile */}
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 right-5 z-30"
              >
                <Link
                  href={project.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-3 py-1 rounded-full text-xs font-semibold shadow 
  bg-white/90 text-black backdrop-blur-sm 
  transition-all duration-300 ease-in-out
  hover:bg-white hover:shadow-md hover:scale-[1.03]
  cursor-pointer
  md:opacity-0 md:group-hover:opacity-100
                  "
                >
                  Ver projeto
                </Link>
              </motion.div>
            </AnimatePresence>

            <Image
              src={project.image || "/images/default.jpg"}
              alt={project.title || "Projeto"}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
              priority={i === 0}
            />

            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.div
                  key="overlay"
                  initial={{ y: "100%" }}
                  animate={{ y: "50%" }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 w-full h-1/2 bg-zinc-900/90 text-white px-4 py-3 flex flex-col justify-between z-20"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold">
                        {project.title || "Projeto"}
                      </h3>
                      <p className="text-xs font-medium">
                        {project.subtitle || ""}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {Array.isArray(project.techs) &&
                        project.techs.map((tech, idx) => (
                          <span
                            key={idx}
                            style={{ color: tech.color || "#fff" }}
                            className="text-lg hover:scale-125 transition-transform"
                          >
                            {tech.icon}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-end w-full">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="self-end"
                    >
                      <Link
                        href={project.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black hover:bg-white hover:text-black text-white text-xs px-3 py-1 rounded-full font-semibold transition-colors"
                      >
                        Visitar
                      </Link>
                    </motion.div>

                    <p className="text-[10px] text-right text-gray-300 max-w-[60%]">
                      {project.miniDescription || ""}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
