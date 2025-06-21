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
      const role = localStorage.getItem('role');
      const meUrl = role === 'estudiante' ? 'me-estudiante' : 'me'
      axios.get(`http://localhost:8000/api/${meUrl}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          console.log(res.data);
          role === 'estudiante' ? setUser({...res.data, role}) : setUser(res.data)})
        .catch(() => logout())
        .finally(() => {setIsLoading(false); console.log(user)})
    } else {
      setIsLoading(false)
    }
  }, [token])

  const login = async (email, password, student = false) => {
    const url = student ? 'http://localhost:8000/api/login-estudiante' : 'http://localhost:8000/api/login'
    try {
      const res = await axios.post(url, {
        email,
        password
      })
      console.log(res.data);
      const { access_token, user } = res.data
      localStorage.setItem('token', access_token)
      localStorage.setItem('role', res.data.role || 'user')
      setToken(access_token)
      if (student) {
        setUser({...user, role: 'estudiante'})
      } else {
        setUser(user)
      }
      setLoginError(null)
    } catch (err) {
      console.log(err);
      setLoginError('Credenciales inválidas')
      throw err
    }
  }

  const logout = async () => {
    try {
      await axios.post('http://localhost:8000/api/logout', null, {
        headers: { Authorization: `Bearer ${token}` }
      })
    } catch (err) {
      console.warn('Error al cerrar sesión en el backend:', err)
    } finally {
      localStorage.removeItem('token')
      localStorage.removeItem('role')
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
