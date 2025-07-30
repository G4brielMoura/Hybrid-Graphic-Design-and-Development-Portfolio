"use client"

import { motion } from "framer-motion"
import {
  FaInstagram,
  FaGithub,
  FaDribbble,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
  FaBehance,
} from "react-icons/fa"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Portfólio", href: "/loja" },
  { label: "Shop", href: "/loja" },
  { label: "Contato", href: "/contacts" },
  { label: "About-me", href: "/about" },
  
]

const socialLinks = [
  {
    href: "https://www.instagram.com/gabrielmouradev/",
    icon: <FaInstagram />,
    color: "#E1306C",
    label: "Instagram de Gabriel Moura",
    hoverEffect: { scale: 1.2, rotate: 5 },
  },
  {
    href: "https://github.com/G4brielMoura",
    icon: <FaGithub />,
    color: "#ffffff",
    label: "GitHub de Gabriel Moura",
    hoverEffect: { scale: 1.2, rotate: 5 },
  },
  {
    href: "https://www.linkedin.com/in/gabrielmouradev/",
    icon: <FaLinkedin />,
    color: "#0077B5",
    label: "LinkedIn de Gabriel Moura",
    hoverEffect: { scale: 1.2, rotate: -5 },
  },
  {
    href: "https://www.youtube.com/@GabrielMouraDev",
    icon: <FaYoutube />,
    color: "#FF0000",
    label: "YouTube de Gabriel Moura",
    hoverEffect: { scale: 1.2, rotate: -5 },
  },
  {
    href: "https://www.behance.net/bielpereir",
    icon: <FaBehance />,
    color: "#0099ff",
    label: "YouTube de Gabriel Moura",
    hoverEffect: { scale: 1.2, rotate: -5 },
  },
  {
    href: "https://dribbble.com/Moura_Dev",
    icon: <FaDribbble />,
    color: "#ff00bf",
    label: "YouTube de Gabriel Moura",
    hoverEffect: { scale: 1.2, rotate: -5 },
  },
  {
    href: "https://www.tiktok.com/@gabrielmouradev",
    icon: <FaTiktok />,
    color: "#ffffff",
    label: "YouTube de Gabriel Moura",
    hoverEffect: { scale: 1.2, rotate: -5 },
  },
]

export default function InteractiveShowCase() {
  return (
    <footer className="w-full bg-[#0d0d0d] text-[#b6b6b6] select-none font-sans flex flex-col justify-between px-4 p-5">
      {/* Top grid */}
      <div className="flex select-none flex-1 items-start justify-between">
        {/* Coluna esquerda: Contato */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-0"
        >
          <h2 className="text-sm select-none uppercase tracking-widest text-white">
            Diga Olá
          </h2>
          <a
            href="mailto:gabmoura.dev@gmail.com"
            className="block select-none text-lg hover:underline transition"
          >
            hello@gabrielmoura
          </a>
       
        </motion.div>

        {/* Coluna direita: Links do site */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-0 select-none text-right"
        >
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block text-lg select-none hover:underline transition"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="border-t select-none border-[#a0a0a0]/30 my-4" />

      {/* Bottom bar */}
      <div className="flex select-none items-center justify-between text-sm">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          © 2025
        </motion.p>

        <motion.div
          className="flex space-x-6 select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={social.hoverEffect}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-xl"
              style={{ color: social.color }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
