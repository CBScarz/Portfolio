'use client'

import { useState, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function About() {
  const [sectionRef, isVisible] = useScrollAnimation(0.2)
  const [displayText, setDisplayText] = useState('')
  const [displayOutput, setDisplayOutput] = useState('')
  const fullText = 'whoami'
  const outputText = 'Clyde - Aspiring Backend Developer'

  useEffect(() => {
    if (!isVisible) return
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
        // Start output animation after command completes
        let outputIndex = 0
        const outputInterval = setInterval(() => {
          if (outputIndex < outputText.length) {
            setDisplayOutput(outputText.slice(0, outputIndex + 1))
            outputIndex++
          } else {
            clearInterval(outputInterval)
          }
        }, 20)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section id="about" className="max-w-6xl mx-auto px-8 py-24" ref={sectionRef}>
      <div className={`mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="mb-6 font-mono text-sm text-green-400">
          <span className="text-cyan-400">~</span> <span className="text-gray-300">/portfolio</span>
        </div>
        <div className="mb-4 font-mono text-sm text-gray-400">
          <span className="text-cyan-400">$</span> <span className="text-green-400">{displayText}</span>
          {displayText.length < fullText.length && (
            <span className="inline-block w-0.5 h-4 ml-1 bg-cyan-400 animate-pulse"></span>
          )}
        </div>
        {displayText === fullText && displayOutput.length > 0 && (
          <div className="mb-4 font-mono text-sm text-green-400">
            <span>{displayOutput}</span>
            {displayOutput.length < outputText.length && (
              <span className="inline-block w-0.5 h-4 ml-1 bg-cyan-400 animate-pulse"></span>
            )}
          </div>
        )}
        {displayOutput === outputText && (
          <>
            <h2 className="text-5xl font-bold mb-4 text-white animate-fade-in">About Me</h2>
            <p className="text-xl text-gray-400 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>Backend developer passionate about scalable systems</p>
          </>
        )}
      </div>

      {displayOutput === outputText && (
      <div className={`space-y-8 max-w-4xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.4s' : '0s' }}>
        <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
          <p className="animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            Hello, I'm Clyde, a CS student passionate about backend development, software engineering, and machine learning. I love building systems, solving problems, and creating clean, efficient code. For me, coding isn't just a task, it's the kind of chaos I actually enjoy.
          </p>
          <p className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            I focus on building scalable backend systems with emphasis on clean code, system design, and performance optimization.
          </p>
          <p className="animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
            My goal is to create robust, efficient backend solutions that solve real-world problems and scale with growing user demands. I believe in continuous learning and staying updated with industry best practices.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {[
              { label: 'Projects', value: '5+' },
              { label: 'Experience', value: 'Backend Dev' }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="group p-6 bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800 rounded-lg hover:border-cyan-400/50 transition-all duration-300 animate-fade-in opacity-0"
                style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
              >
                <p className="text-sm text-gray-500 font-mono mb-2">$ {stat.label.toLowerCase()}</p>
                <p className="text-2xl font-bold text-cyan-400 group-hover:text-green-400 transition-colors duration-300">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}
    </section>
  )
}
