"use client"

import React, { useRef, useState, useEffect } from "react"
// import emailjs from "@emailjs/browser"

const AnimatedTitle = () => {
  const phrases = [
    "Fale Comigo",
    "Vamos Conversar",
    "Mais Informações!",
    ]

  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[index]
    let typeSpeed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentPhrase.substring(0, charIndex - 1)
        : currentPhrase.substring(0, charIndex + 1)

      setText(updatedText)
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1))

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000) // Pausa após escrever
      }

      if (isDeleting && updatedText === "") {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % phrases.length)
        setCharIndex(0)
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index, phrases])

  return (
    <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-8 h-10">
      <span>{text}</span>
      
    </h2>
  )
}

export default function Form() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<"success" | "error" | null>(null)
  const [showMessage, setShowMessage] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    // emailjs
    //   .sendForm(
    //     "service_1no2exi",
    //     "template_sm8w3wa",
    //     form.current,
    //     "SUA KEY AQUI DO EMAIL JS"
    //   )
    //   .then(() => {
    //     setStatus("success")
    //     setShowMessage(true)
    //     form.current?.reset()
    //   })
    //   .catch(() => {
    //     setStatus("error")
    //     setShowMessage(true)
    //   })
  }

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showMessage])

  return (
    <div className="max-w-md mx-4 sm:mx-auto mt-30">
      <AnimatedTitle />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="p-4 shadow-lg rounded-lg text-white bg-[#1f1f1f]"
      >
        <label className="block mb-1">Nome:</label>
        <input
          type="text"
          name="name"
          required
          className="w-full text-white mb-3 p-3 py-2 border rounded bg-transparent"
        />

        <label className="block text-white mb-1">Email:</label>
        <input
          type="email"
          name="email"
          required
          className="w-full text-white mb-3 p-3 py-2 border rounded bg-transparent"
        />

        <label className="block text-white mb-1">Mensagem:</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full text-white mb-3 p-3 py-2 border rounded bg-transparent"
        ></textarea>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full sm:w-1/2"
          >
            Enviar
          </button>
        </div>

        {status && (
          <p
            className={`mt-4 text-center transition-opacity duration-1000 ${
              showMessage ? "opacity-100" : "opacity-0"
            } ${status === "success" ? "text-green-500" : "text-red-500"}`}
          >
            {status === "success"
              ? "Mensagem enviada com sucesso!"
              : "Ocorreu um erro ao enviar a mensagem."}
          </p>
        )}
      </form>
    </div>
  )
}
