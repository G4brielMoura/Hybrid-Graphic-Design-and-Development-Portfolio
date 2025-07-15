"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Code2, Sun } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  const [isCode, setIsCode] = useState(true)
  const [clock, setClock] = useState("--:--")

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
          className="absolute left-0 top-0 h-full w-full origin-left scale-x-0 rounded bg-zinc-800 group-hover:scale-x-100 z-0"
        />
      </Link>
    </li>
  )

  return (
    <header className="w-full px-4 pt-3 text-sm font-light">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:items-center md:gap-6">
        {/* MOBILE */}
        <div className="md:hidden flex items-center justify-between rounded bg-zinc-900 px-4 py-4 border border-zinc-700/40">
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

        {/* COLUNA 1 */}
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

        {/* COLUNA 2 */}
        <nav className="hidden md:flex justify-center">
          <ul className="flex gap-10 text-xs">
            <NavLink href="/#portfolio" label="Portfólio" />
            <NavLink href="/#contact" label="Contato" />
            <NavLink href="/#about" label="About" />
          </ul>
        </nav>

        {/* COLUNA 3 */}
        <div className="hidden md:flex justify-end">
          <Link
            href="/contacts"
            className="group relative inline-flex items-center gap-2 px-5 py-2 font-medium text-zinc-100 hover:text-white"
          >
            <span className="relative z-10">Contato</span>
            <motion.svg
              initial={{ x: -5 }}
              animate={{ x: 0 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: "reverse",
              }}
              className="w-4 h-4 z-10 relative"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
            <motion.span
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full w-full origin-left scale-x-0 rounded bg-zinc-800 group-hover:scale-x-100 z-0"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
