import { useState, useRef, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (pathname === '/become-a-host') return null

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex justify-between items-center px-6 py-2 bg-white/20 backdrop-blur-lg sticky top-0 z-50"
    >
      <Link to="/" className="no-underline flex items-center gap-2">
        <img src="/src/assets/d6848cec-6bfa-444c-9d51-23d2b0afbb40.jpg" alt="StayEasy" className="h-8 w-auto" />
        <h2 className="text-primary m-0 text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>StayEasy</h2>
      </Link>

      <div className="flex items-center gap-3">
        <select className="text-sm bg-transparent border-none cursor-pointer outline-none text-gray-700">
          <option>in NPR</option>
        </select>

        <Link
          to="/login?host=true"
          className="no-underline text-black font-medium px-4 py-2.5 rounded-full text-sm hover:bg-gray-100 transition-colors"
        >
          Become a Host
        </Link>

        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-full bg-white cursor-pointer text-sm hover:shadow-md transition-shadow"
          >
            <span>☰</span>
            <span className="w-[30px] h-[30px] rounded-full bg-gray-500 flex items-center justify-center text-white text-base">
              {user ? user.full_name[0].toUpperCase() : '👤'}
            </span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-[50px] bg-white border border-gray-300 rounded-xl shadow-lg w-[220px] z-50 overflow-hidden">
              {user ? (
                <>
                  <div className="px-4 py-4 border-b border-gray-200">
                    <p className="m-0 font-semibold">{user.full_name}</p>
                    <p className="m-0 mt-1 text-gray-500 text-xs">{user.email}</p>
                  </div>
                  <div
                    onClick={handleLogout}
                    className="px-4 py-3.5 cursor-pointer text-sm hover:bg-gray-100 transition-colors"
                  >
                    Log out
                  </div>
                </>
              ) : (
                <>
                  <div
                    onClick={() => navigate('/signup')}
                    className="px-4 py-3.5 cursor-pointer font-semibold text-sm hover:bg-gray-100 transition-colors"
                  >
                    Sign up
                  </div>
                  <div
                    onClick={() => navigate('/login')}
                    className="px-4 py-3.5 cursor-pointer text-sm hover:bg-gray-100 transition-colors"
                  >
                    Log in
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
