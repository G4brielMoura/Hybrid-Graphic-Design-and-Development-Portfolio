"use client"
export default function AboutMe() {
  return (
    <section className="bg-[#0d0d0d] min-h-screen text-white flex flex-col items-center justify-center px-4 py-12 text-center">
      {/* Foto */}
      <img
        src="/images/gmok.webp" // troque pelo caminho correto
        alt="Profile"
        className="w-90 h-90 object-cover  border-5 border-gray-500 mb-6"
      />

      {/* Título */}
      <h2 className="text-lg font-bold mb-2">Graphic Designer</h2>

      {/* Texto de descrição */}
      <p className="max-w-xl text- text-md sm:text-base text-gray-300 leading-relaxed mb-8">
        Minha trajetória no Design Gráfico começou a partir de uma paixão
        genuína por comunicação visual e criatividade. Ao longo do tempo, fui
        desenvolvendo um olhar atento para detalhes, composição, cores e
        tipografia, entendendo que o design vai muito além da estética — ele
        resolve problemas e conecta pessoas com ideias.
      </p>

      {/* Seção de prêmios */}
      <h3 className="text-md font-semibold mb-3">Work & Awards</h3>
      <ul className="space-y-2 text-sm">
        <li>Creative</li>
        <li>Authorial</li>
        <li>Graphic Designer & Software Engineer</li>
        <li>
          <hr className="my-2 border-gray-300 w-32 mx-auto" />
        </li>
        <li>CC</li>
      </ul>
    </section>
  )
}
