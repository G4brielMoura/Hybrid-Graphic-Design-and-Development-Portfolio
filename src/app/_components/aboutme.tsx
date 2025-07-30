"use client"

import { useMode } from "@/lib/ModeContext"
import { motion, AnimatePresence } from "framer-motion"

export default function AboutMe() {
  const { mode } = useMode() // pega o modo global: "develop" ou "design"
  const isDev = mode === "develop"

  return (
    <section className="bg-[#0d0d0d] min-h-screen text-white flex flex-col items-center justify-center px-4 py-12 text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center"
        >
          {/* Foto */}
          <img
            src="/images/about.png"
            alt="Profile"
            className="w-60 h-60 object-cover border-4 border-gray-500 mb-6 rounded-md"
          />

          {/* Título */}
          <h2 className="text-xl font-bold mb-2">
            {isDev ? "Software Engineer" : "Graphic Designer"}
          </h2>

          {/* Texto de descrição */}
          <p className="max-w-xl text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
            {isDev
              ? "Comecei minha jornada na programação desenvolvendo soluções para web com foco em experiência do usuário, performance e acessibilidade. Meu objetivo é transformar ideias em produtos digitais funcionais, limpos e escaláveis."
              : "Minha trajetória no Design Gráfico começou com uma paixão genuína por comunicação visual. Desenvolvi um olhar atento para composição, cores e tipografia — buscando sempre conectar pessoas com ideias por meio do visual."}
          </p>

          {/* Título de seção */}
          <h3 className="text-md font-semibold mb-3">Work & Awards</h3>
          <ul className="space-y-2 text-sm">
            {isDev ? (
              <>
                <li>Front-end Specialist</li>
                <li>TypeScript & Next.js</li>
                <li>UX Focused Engineering</li>
                <li>
                  <hr className="my-2 border-gray-300 w-32 mx-auto" />
                </li>
                <li>Open Source Contributor</li>
              </>
            ) : (
              <>
                <li>Creative</li>
                <li>Authorial</li>
                <li>Graphic Designer & Software Engineer</li>
                <li>
                  <hr className="my-2 border-gray-300 w-32 mx-auto" />
                </li>
                <li>CC</li>
              </>
            )}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
