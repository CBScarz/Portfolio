'use client'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-950 border-b border-slate-800 z-50 py-4">
      <div className="max-w-5xl mx-auto px-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white">Scarz</span>
          <span className="text-cyan-400">/&gt;</span>
        </div>
        <nav className="flex gap-10">
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
      </div>
    </header>
  )
}
