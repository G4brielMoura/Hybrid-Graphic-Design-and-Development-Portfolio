// src/app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import { ReactNode } from "react"
import { ModeProvider } from "@/lib/ModeContext" // <-- importa o provider

export const metadata: Metadata = {
  title: "JH | CREATIVE",
  description: "Portfólio profissional de design.",
  // metadataBase: new URL("#"),
  keywords: [
    "#",
    "#",
    "#",
    "#",
    "#",
  ],
  authors: [
    {
      name: "Gabriel Moura|Creative",
      // url: "#",
    },
  ],
  openGraph: {
    title: "JH | CREATIVE | Portfólio",
    description:
      "Portfólio com foco em Desingner Creative, UX/UI e performance.",
    // url: "#",
    siteName: "JH|CREATIVE",
    images: [
      {
        url: "#",
        width: 1200,
        height: 630,
        alt: "Imagem de capa JHCreative",
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
