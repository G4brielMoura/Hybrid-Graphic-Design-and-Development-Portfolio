// /app/sucesso/page.tsx (versão server)
export default function SucessoPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  const sessionId = searchParams.session_id

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950 p-6">
      <div className="text-center bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg max-w-md">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Compra realizada com sucesso! 🎉
        </h1>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          Obrigado por apoiar o projeto! Clique no botão abaixo para baixar seu
          pack:
        </p>

        {sessionId ? (
          <a
            href={`/api/download?session_id=${sessionId}`}
            className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all font-medium shadow-md"
          >
            Baixar Agora
          </a>
        ) : (
          <p className="mt-6 text-red-500 font-medium">
            ❌ Sessão inválida. Volte à loja e tente novamente.
          </p>
        )}
      </div>
    </div>
  )
}
