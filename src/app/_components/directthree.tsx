"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsMobileButton() {
  return (
    <div className="md:hidden w-full px-3 mt-4">
      <Link href="/about" passHref>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="w-full flex items-center justify-between gap-4 px-6 py-3 rounded-md bg-zinc-800 text-zinc-100 cursor-pointer shadow-sm"
        >
          {/* Ícone com rotação suave */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 6,
            }}
            className="w-10 h-10 border border-zinc-600 bg-black rounded-full flex items-center justify-center"
          >
            <Image
              src="/images/Icon_gm.svg"
              alt="logo"
              width={28}
              height={28}
            />
          </motion.div>

          {/* Texto */}
          <span className="text-base font-semibold tracking-wide">
            ABOUT ME
          </span>

          {/* Seta animada */}
          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight size={22} />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  )
}
