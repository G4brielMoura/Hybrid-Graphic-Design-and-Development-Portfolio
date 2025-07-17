// src/app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import { ReactNode } from "react"
import { ModeProvider } from "@/lib/ModeContext" // <-- importa o provider

export const metadata: Metadata = {
  title: "GM | CREATIVE",
  description: "Portfólio profissional de design.",
  metadataBase: new URL("https://gabrielmouradesigner.vercel.app"),
  keywords: [
    "Portfólio",
    "Web Design",
    "Next.js",
    "GMCreative",
    "Desenvolvimento",
  ],
  authors: [
    {
      name: "Gabriel Moura|Creative",
      url: "https://gabrielmouradesigner.vercel.app/",
    },
  ],
  openGraph: {
    title: "GM | CREATIVE | Portfólio",
    description:
      "Portfólio com foco em Desingner Creative, UX/UI e performance.",
    url: "https://gabrielmouradesigner.vercel.app/",
    siteName: "GM|CREATIVE",
    images: [
      {
        url: "/images/icon_gm.svg",
        width: 1200,
        height: 630,
        alt: "Imagem de capa GMCreative",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  )
}
