"use client"
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import PasswordForm from '../components/PasswordForm';
import PasswordTable from '../components/PasswordTable';
import { Shield } from 'lucide-react';
import { useTheme } from "../context/ThemeContext"

const PasswordManager = () => {
  const { mounted } = useTheme()
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  })

  const [passwordArray, setPasswordArray] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!mounted) return

    try {
      const passwords = localStorage.getItem("passwords")
      if (passwords) {
        setPasswordArray(JSON.parse(passwords))
      }
    } catch (error) {
      console.error("Error parsing passwords from localStorage:", error)
      toast.error("Could not load saved passwords")
    }
  }, [mounted])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const savePassword = () => {
    if (!mounted) return

    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      setIsLoading(true)

      // Use setTimeout to prevent UI from freezing
      setTimeout(() => {
        try {
          if (isEditing && editId) {
            // Update existing password
            const updatedPasswords = passwordArray.map((item) => (item.id === editId ? { ...form, id: editId } : item))

            setPasswordArray(updatedPasswords)
            localStorage.setItem("passwords", JSON.stringify(updatedPasswords))

            toast.success("Password updated!")
            setIsEditing(false)
            setEditId(null)
          } else {
            // Add new password
            const newPassword = { ...form, id: uuidv4() }
            const newPasswordArray = [...passwordArray, newPassword]

            setPasswordArray(newPasswordArray)
            localStorage.setItem("passwords", JSON.stringify(newPasswordArray))

            toast.success("Password saved!")
          }

          // Reset form
          setForm({ site: "", username: "", password: "" })
        } catch (error) {
          console.error("Error saving password:", error)
          toast.error("Failed to save password")
        } finally {
          setIsLoading(false)
        }
      }, 10) // Small delay to allow UI to update
    } else {
      toast.error("Error: All fields must be at least 4 characters!")
    }
  }

  const editPassword = (id) => {
    if (!mounted) return

    const passwordToEdit = passwordArray.find((item) => item.id === id)
    if (passwordToEdit) {
      setForm({
        site: passwordToEdit.site,
        username: passwordToEdit.username,
        password: passwordToEdit.password,
      })
      setIsEditing(true)
      setEditId(id)
    }
  }

  const deletePassword = (id) => {
    if (!mounted) return

    try {
      if (window.confirm("Do you really want to delete this password?")) {
        const filteredPasswords = passwordArray.filter((item) => item.id !== id)
        setPasswordArray(filteredPasswords)
        localStorage.setItem("passwords", JSON.stringify(filteredPasswords))
        toast.success("Password deleted!")
      }
    } catch (error) {
      console.error("Error deleting password:", error)
      toast.error("Failed to delete password")
    }
  }

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center">
          <Shield className="mr-2 h-7 w-7 text-emerald-500" />
          Password Manager
        </h1>
        <p className="text-lg text-gray-800 dark:text-gray-400">
          Securely store and manage all your passwords in one place
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <PasswordForm formData={form} onChange={handleChange} onSave={savePassword} isLoading={isLoading} />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Passwords</h2>
          <PasswordTable passwords={passwordArray} onEdit={editPassword} onDelete={deletePassword} />
        </div>
      </div>
    </div>
  )
}

export default PasswordManager
