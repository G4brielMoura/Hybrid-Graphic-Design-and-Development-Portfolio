"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Code2, Sun } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

export function Header() {
  const [isCode, setIsCode] = useState(true)
  const [clock, setClock] = useState("--:--")
  const [hearts, setHearts] = useState<
    { delay: number; size: number; xStart: number; duration: number }[]
  >([])

  /* ─────────── Relógio ─────────── */
  useEffect(() => {
    const update = () => {
      const now = new Date()
      const hh = now.getHours()
      const mm = now.getMinutes().toString().padStart(2, "0")
      setClock(`${hh >= 12 ? "PM" : "AM"} ${hh % 12 || 12}:${mm}`)
    }
    update()
    const t = setInterval(update, 60_000)
    return () => clearInterval(t)
  }, [])

  /* ─────────── Corações animados ─────────── */
  useEffect(() => {
    const generated = Array.from({ length: 6 }, (_, i) => ({
      delay: i * 1.2,
      size: 10 + Math.random() * 10,
      xStart: (Math.random() * 40 - 20) | 0,
      duration: 6 + Math.random() * 4,
    }))
    setHearts(generated)
  }, [])

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <li className="relative overflow-hidden">
      <Link
        href={href}
        className="group relative inline-flex items-center gap-2 px-5 py-2 font-medium text-zinc-200 hover:text-white transition-all"
      >
        <span className="relative z-10">{label}</span>
        <span className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-400 rounded-full group-hover:scale-0 transition-transform" />
        <motion.span
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-0 top-0 h-full w-full origin-left rounded bg-zinc-800 z-0"
        />
      </Link>
    </li>
  )

  /* ─────────── Seta animada no botão "Send" ─────────── */
  const arrowControls = useAnimation()

  useEffect(() => {
    arrowControls.start({
      x: [-5, 0, -5],
      transition: { repeat: Infinity, duration: 1.5 },
    })
  }, [arrowControls])

  const handleSendClick = () => {
    arrowControls.start({ x: 8, transition: { duration: 0.25 } })
  }

  return (
    <header className="w-full pt-4  text-sm font-light">
      <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:items-center md:gap-6">
        {/* MOBILE */}
        <div className="md:hidden mx-4 flex items-center justify-between rounded bg-zinc-900 px-4 py-4 border border-zinc-700/40">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Icon_gm.png"
              alt="Gabriel Moura"
              width={42}
              height={42}
              className="rounded-full border border-zinc-600 object-cover"
              priority
            />
            <div className="leading-tight">
              <h2 className="text-sm text-white">Gabriel Moura</h2>
              <p className="text-xs text-zinc-400">Software Engineer</p>
            </div>
          </div>
          <button
            onClick={() => setIsCode(!isCode)}
            className="flex h-9 w-16 items-center rounded-full bg-zinc-800 px-1 ring-1 ring-zinc-700/50"
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="grid h-7 w-7 place-items-center rounded-full bg-white text-zinc-900"
            >
              {isCode ? <Code2 size={16} /> : <Sun size={16} />}
            </motion.span>
          </button>
        </div>

        {/* COLUNA 1 */}
        <div className="hidden md:flex items-center gap-4 px-6 py-3">
          <Image
            src="/images/Icon_gm.png"
            alt="Gabriel Moura"
            width={44}
            height={44}
            className="rounded-full border border-zinc-500 object-cover"
            priority
          />
          <button
            onClick={() => setIsCode(!isCode)}
            className="flex h-9 w-16 items-center rounded-full bg-zinc-800 px-1"
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="grid h-7 w-7 place-items-center rounded-full bg-white text-zinc-900"
            >
              {isCode ? <Code2 size={16} /> : <Sun size={16} />}
            </motion.span>
          </button>
          <div className="text-zinc-300 text-xs font-mono px-3 py-1 bg-zinc-800 rounded-full">
            {clock}
          </div>
        </div>

        {/* COLUNA 2 */}
        <nav className="hidden md:flex whitespace-nowrap justify-center">
          <ul className="flex gap-10 text-xs">
            <NavLink href="/#page" label="Home" />
            <NavLink href="/portfolio" label="Portfólio" />
            <NavLink href="/contacts" label="Contato" />
            <NavLink href="/about" label="About‑me" />
          </ul>
        </nav>

        {/* COLUNA 3 */}
        <div className="hidden md:flex justify-end">
          <Link
            href="mailto:seuemail@exemplo.com"
            className="group relative inline-flex items-center gap-2 px-6 py-2 font-semibold
              text-zinc-100 overflow-hidden rounded-full backdrop-blur-sm
              ring-1 ring-inset ring-zinc-500/30 hover:ring-blue-500/60
              transition-colors select-none"
            onClick={handleSendClick}
          >
            {/* brilho interno */}
            <motion.span
              initial={{ scale: 0 }}
              whileHover={{ scale: 3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 bg-blue-500/10 rounded-full pointer-events-none"
            />

            {/* corações animados */}
            {hearts.map(({ delay, size, xStart, duration }, i) => (
              <motion.span
                key={i}
                initial={{ y: 40, opacity: 0, x: xStart }}
                animate={{ y: -60, opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  delay,
                  duration,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 pointer-events-none"
                style={{ width: size, height: size, marginLeft: -size / 2 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-pink-500/60 text-pink-500/80"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.span>
            ))}

            {/* texto */}
            <span className="relative z-10 transition-colors duration-200 group-hover:text-blue-400">
              Send
            </span>

            {/* seta */}
            <motion.svg
              initial={{ x: -5, stroke: "#d4d4d8" }}
              animate={arrowControls}
              whileHover={{ x: 5, stroke: "#d4d4d8" }}
              whileTap={{ x: 8 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-4 h-4 z-10 mt-0.5 relative"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </Link>
        </div>
      </div>
    </header>
  )
}
