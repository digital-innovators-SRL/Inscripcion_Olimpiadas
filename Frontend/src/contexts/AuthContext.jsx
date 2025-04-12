import React, { useEffect, useState, createContext, useContext } from 'react'

const AuthContext = createContext(null)

// Mock users database
const MOCK_USERS = {
  admin: [
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin',
    },
  ],
  tutor: [
    {
      id: '2',
      name: 'Juan Pérez',
      email: 'tutor@example.com',
      password: 'tutor123',
      role: 'tutor',
    },
  ],
  student: [
    {
      id: '3',
      name: 'María García',
      email: 'student@example.com',
      password: 'student123',
      role: 'student',
    },
  ],
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loginError, setLoginError] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email, password, role) => {
    setLoginError(null)
    const users = MOCK_USERS[role]
    const foundUser = users.find((u) => u.email === email && u.password === password)
    if (!foundUser) {
      setLoginError('Credenciales inválidas para el rol seleccionado')
      throw new Error('Invalid credentials')
    }

    const { password: _, ...userWithoutPassword } = foundUser
    localStorage.setItem('user', JSON.stringify(userWithoutPassword))
    setUser(userWithoutPassword)
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading,
        loginError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
