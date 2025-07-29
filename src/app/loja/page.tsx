import { produtos } from "@/data/produtos"
import CardProduto from "../_components/CardProduto"
import { Header } from "../_components/header"
import InteractiveShowCase from "../_components/InteractiveShowcase"
export default function LojaPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] p-8 grid gap-6 md:grid-cols-1 lg:grid-cols-1">
      <Header />

      {produtos.map((produto) => (
        <CardProduto key={produto.id} produto={produto} />
      ))}
      <InteractiveShowCase />
    </div>
  )
}
