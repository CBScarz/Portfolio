'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Aspiring Backend Developer'
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 30)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="relative max-w-4xl text-center z-10">
        <div className="mb-6 font-mono text-sm animate-fade-in-up">
          <span className="text-cyan-400">$</span> <span className="text-green-400">npm run build</span>
        </div>

        <div className="mb-6">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="text-cyan-400">&gt;</span>
            <span className="text-white ml-2 font-mono min-h-20">
              {displayText}
              {displayText.length < fullText.length && (
                <span className="inline-block w-0.5 h-12 ml-1 bg-cyan-400 animate-pulse"></span>
              )}
            </span>
          </h1>
        </div>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          Computer Science student focused on backend technologies, passionate about building scalable and efficient systems.
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <a href="#work" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300">
            View My Work
          </a>
          <a href="/resume.pdf" download className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
