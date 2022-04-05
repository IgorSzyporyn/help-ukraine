import { createContext } from "react"

export type AppContextProps = {
  isDesktop: boolean
  isMobile: boolean
}

export const initialAppContext: AppContextProps = {
  isDesktop: true,
  isMobile: true,
}

export const AppContext = createContext({ ...initialAppContext })
