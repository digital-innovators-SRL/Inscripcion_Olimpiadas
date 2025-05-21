import React, { useEffect, useState, createContext, useContext } from 'react'
import axios from 'axios'

const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [isLoading, setIsLoading] = useState(true)
  const [loginError, setLoginError] = useState(null)

  useEffect(() => {
    if (token) {
      axios.get('http://dis.tis.cs.umss.edu.bo/api/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => setUser(res.data))
        .catch(() => logout())
        .finally(() => setIsLoading(false))
    } else {
      setIsLoading(false)
    }
  }, [token])

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://dis.tis.cs.umss.edu.bo/api/login', {
        email,
        password
      })

      const { access_token, user } = res.data
      localStorage.setItem('token', access_token)
      setToken(access_token)
      setUser(user)
      setLoginError(null)
    } catch (err) {
      setLoginError('Credenciales inválidas')
      throw err
    }
  }

  const logout = async () => {
    try {
      await axios.post('http://dis.tis.cs.umss.edu.bo/api/logout', null, {
        headers: { Authorization: `Bearer ${token}` }
      })
    } catch (err) {
      console.warn('Error al cerrar sesión en el backend:', err)
    } finally {
      localStorage.removeItem('token')
      setToken('')
      setUser(null)
    }
  }  

  return (
    <AuthContext.Provider value={{
      user,
      token,
      login,
      logout,
      isLoading,
      loginError
    }}>
      {children}
    </AuthContext.Provider>
  )
}
