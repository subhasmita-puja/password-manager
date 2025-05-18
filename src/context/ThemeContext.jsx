"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  // Initialize with a default theme to avoid hydration mismatch
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  // Only run this effect on the client side after mounting
  useEffect(() => {
    setMounted(true)

    // Check localStorage first
    try {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) {
        setTheme(savedTheme)
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // Then check system preference
        setTheme("dark")
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Update document class and localStorage when theme changes
    try {
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(theme)
      document.body.classList.remove("light", "dark")
      document.body.classList.add(theme)
      localStorage.setItem("theme", theme)
    } catch (error) {
      console.error("Error updating theme:", error)
    }
  }, [theme, mounted])

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = (e) => {
      try {
        const savedTheme = localStorage.getItem("theme")
        // Only update if user hasn't manually set a theme
        if (!savedTheme) {
          setTheme(e.matches ? "dark" : "light")
        }
      } catch (error) {
        console.error("Error handling theme change:", error)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [mounted])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  // Provide a value object that doesn't change on re-renders unless theme changes
  const contextValue = React.useMemo(() => {
    return { theme, toggleTheme, mounted }
  }, [theme, mounted])

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
