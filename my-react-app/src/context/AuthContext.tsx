import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import api from '../api'
import type { User } from '../types'

interface AuthContextValue {
  user: User | null
  token: string | null
  loading: boolean
  login: (accessToken: string, refreshToken?: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
  const [loading, setLoading] = useState(true)

  const fetchUser = async (authToken: string) => {
    try {
      const { data } = await api.get<User>('/auth/users/me', {
        headers: { Authorization: `Bearer ${authToken}` }
      })
      setUser(data)
    } catch {
      localStorage.removeItem('token')
      setToken(null)
      setUser(null)
    }
  }

  useEffect(() => {
    if (token) {
      fetchUser(token).finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [token])

  const login = async (accessToken: string, refreshToken?: string) => {
    localStorage.setItem('token', accessToken)
    if (refreshToken) localStorage.setItem('refresh_token', refreshToken)
    setToken(accessToken)
    await fetchUser(accessToken)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh_token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside AuthProvider')
  return ctx
}
