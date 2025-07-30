"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type Produto = {
  id: string
  nome: string
  preco: number
  capa: string
  video: string
  descricao: string
}

export default function CardProduto({ produto }: { produto: Produto }) {
  const [hover, setHover] = useState(false)

  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: produto.id }),
      cache: "no-store",
    })

    if (!res.ok) {
      console.error(await res.text())
      alert("Falha ao iniciar o checkout.")
      return
    }

    const data = await res.json()

    const stripe = await import("@stripe/stripe-js").then((m) =>
      m.loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!)
    )

    await stripe?.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.015 }}
      className="bg-white dark:bg-zinc-900 rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out w-full max-w-sm mx-auto cursor-pointer"
    >
      {/* Capa ou vídeo no hover */}
      <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-64 xl:h-72">
        {!hover ? (
          <motion.img
            key="image"
            src={produto.capa}
            alt={produto.nome}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <motion.video
            key="video"
            src={produto.video}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </div>

      {/* Detalhes do produto */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
          {produto.nome}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-snug">
          {produto.descricao}
        </p>
        <span className="text-green-600 dark:text-green-400 font-semibold text-base">
          R$ {(produto.preco / 100).toFixed(2)}
        </span>

        {/* Botão de compra */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.005 }}
          onClick={handleCheckout}
          className="mt-2 w-full bg-black text-white py-2.5 rounded-lg shadow-sm hover:bg-zinc-800 transition-all text-sm font-medium"
        >
          Comprar agora
        </motion.button>
      </div>
    </motion.div>
  )
}
