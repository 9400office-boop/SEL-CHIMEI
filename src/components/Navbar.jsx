import { useState } from 'react'

const navItems = [
  { id: 'home', label: '首頁' },
  { id: 'abilities', label: 'SEL五大能力' },
  { id: 'selfcheck', label: '自我檢測' },
  { id: 'scenario', label: '情境應用' },
  { id: 'learning-support', label: '學習補給' },
]

export default function Navbar({ currentPage, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => { navigate('home'); setMenuOpen(false) }}
            className="flex items-center gap-3 group"
          >
            <img
              src="/chimei-logo.png"
              alt="奇美醫療財團法人奇美醫院"
              className="h-9 w-auto object-contain"
            />
            <div className="hidden sm:block h-6 w-px bg-gray-200" />
            <span className="hidden sm:block font-semibold text-warm-text text-sm leading-tight">
              SEL<span className="text-muted-orange">學習小棧</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${currentPage === item.id
                    ? 'bg-soft-orange text-muted-orange font-semibold'
                    : 'text-sub-text hover:bg-amber-50 hover:text-warm-text'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-sub-text hover:bg-amber-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="選單"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-amber-50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { navigate(item.id); setMenuOpen(false) }}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium mb-1 transition-all duration-200
                  ${currentPage === item.id
                    ? 'bg-soft-orange text-muted-orange font-semibold'
                    : 'text-sub-text hover:bg-amber-50 hover:text-warm-text'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
