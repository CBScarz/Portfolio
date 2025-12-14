'use client'

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 w-full bg-slate-950 border-b border-slate-800 z-50 py-4">
      <div className="max-w-5xl mx-auto px-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight hidden md:block">
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white">Scarz</span>
          <span className="text-cyan-400">/&gt;</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          <a href="#about" className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#work" className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors relative group">
            Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-400 hover:text-cyan-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-8 py-4 flex flex-col gap-4">
            <a
              href="#about"
              className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#work"
              className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
