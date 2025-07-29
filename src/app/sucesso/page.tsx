export default function Sucesso() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Compra realizada com sucesso! 🎉</h1>
        <p className="mt-4">Clique no botão abaixo para baixar seu pack:</p>
        <a
          href="/downloads/pack.zip"
          download
          className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Baixar Agora
        </a>
      </div>
    </div>
  )
}
