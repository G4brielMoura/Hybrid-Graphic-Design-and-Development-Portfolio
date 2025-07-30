// /data/produtos.ts
export type Produto = {
  id: string
  nome: string
  preco: number
  capa: string
  video: string
  descricao: string
}

export const produtos: Produto[] = [
  {
    id: "pack-dash",
    nome: "Pack Dashboard",
    preco: 2990, // em centavos (R$29,90)
    capa: "/images/vintage1.jpg",
    video: "/downloads/play.mp4", // isso aqui é só uma prévia no CardProduto
    descricao: "Dashboard completo com autenticação, gráficos e dark mode.",
  },
]
