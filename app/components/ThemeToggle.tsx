'use client'
import { useState } from 'react' // Add this import
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 z-50"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <SunIcon className="h-5 w-5 text-yellow-500" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-600" />
      )}
    </button>
  )
}