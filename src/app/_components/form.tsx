"use client"

import React, { useRef, useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

export default function Form() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<"success" | "error" | null>(null)
  const [showMessage, setShowMessage] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    emailjs
      .sendForm(
        "service_1no2exi",
        "template_sm8w3wa",
        form.current,
        "IXGAAonzug-tVRsN4"
      )
      .then(() => {
        setStatus("success")
        setShowMessage(true)
        form.current?.reset()
      })
      .catch(() => {
        setStatus("error")
        setShowMessage(true)
      })
  }

  // Faz a mensagem sumir suavemente depois de 5 segundos
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showMessage])

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-md mx-4 sm:mx-auto mt-8 p-4 shadow-lg rounded-lg text-white bg-[#1f1f1f]"
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
  )
}
