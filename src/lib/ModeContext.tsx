"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Mode = "develop" | "design"

interface ModeContextType {
  mode: Mode
  toggleMode: () => void
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("develop")

  const toggleMode = () => {
    setMode((prev) => (prev === "develop" ? "design" : "develop"))
  }

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export const useMode = () => {
  const context = useContext(ModeContext)
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider")
  }
  return context
}
