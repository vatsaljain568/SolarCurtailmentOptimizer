import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Home, Zap, LogOut, LogIn, Info, Menu, X, Settings } from 'lucide-react'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const cookies = document.cookie
    setIsAuthenticated(cookies && cookies.trim().length > 0)
  }, [])

  // Hide navbar on login page
  if (location.pathname === '/login') {
    return null
  }

  const handleLogout = async () => {
    try {
      const response = await fetch('https://solarcurtailmentoptimizer.onrender.com/auth/logout', {
        method: 'POST',
        credentials: 'include',
      })
      if (response.ok) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const isActive = (path) => location.pathname === path

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Dashboard', path: '/dashboard', icon: Zap },
    { label: 'About', path: '/about', icon: Info },
  ]

  return (
    <nav className='w-full bg-[#0a0a0d] border-b mt-2 border-[#2a2a2e] sticky top-0 z-50 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo - Left */}
          <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate('/')}>
            <span className='text-xl font-bold bg-gradient-to-r from-[#00f5ff] to-[#bf00ff] bg-clip-text text-transparent'>
              SolarGrid
            </span>
          </div>

          {/* Desktop Navigation - Center */}
          <div className='hidden md:flex items-center gap-1'>
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-[#00f5ff] text-black font-semibold'
                      : 'text-[#999] hover:text-white hover:bg-[#1a1a1e]'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>

          {/* Right Side Buttons */}
          <div className='flex items-center gap-3'>
            {/* Desktop Login/Logout */}
            <button
              onClick={isAuthenticated ? handleLogout : () => navigate('/login')}
              className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isAuthenticated
                  ? 'bg-[#ff4d4d]/10 border border-[#ff4d4d] text-[#ff4d4d] hover:bg-[#ff4d4d]/20'
                  : 'bg-[#00f5ff]/10 border border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff]/20'
              }`}
            >
              {isAuthenticated ? (
                <>
                  <LogOut size={18} />
                  <span>Logout</span>
                </>
              ) : (
                <>
                  <LogIn size={18} />
                  <span>Login</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}

      </div>
    </nav>
  )
}

export default Navbar
