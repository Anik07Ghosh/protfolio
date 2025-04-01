'use client'
import { createContext, useState, useEffect, ReactNode } from 'react'

type ThemeContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
  isSystemPreference: boolean
}

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
  isSystemPreference: false
})

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkMode, setDarkMode] = useState(false)
  const [isSystemPreference, setIsSystemPreference] = useState(false)

  useEffect(() => {
    // 1. Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = localStorage.getItem('theme')
    
    // 2. Determine initial theme
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
      setIsSystemPreference(false)
    } else {
      setDarkMode(systemPrefersDark)
      setIsSystemPreference(true)
    }

    // 3. Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      if (isSystemPreference) {
        setDarkMode(e.matches)
      }
    }
    mediaQuery.addEventListener('change', handler)
    
    return () => mediaQuery.removeEventListener('change', handler)
  }, [isSystemPreference])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    setIsSystemPreference(false)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, isSystemPreference }}>
      {children}
    </ThemeContext.Provider>
  )
}