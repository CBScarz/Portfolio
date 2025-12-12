'use client'

import { useState, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'PHP', 'SQL', 'JavaScript (Basic)'],
    color: 'from-blue-500 to-cyan-400',
    icon: '💻'
  },
  {
    category: 'Frameworks & Tools',
    items: ['Laravel', 'REST APIs', 'OOP', 'MVC Architecture'],
    color: 'from-purple-500 to-pink-400',
    icon: '⚙️'
  },
  {
    category: 'AI & Machine Learning',
    items: ['LangChain', 'Hugging Face', 'Pinecone', 'DeepSeek (LLM)'],
    color: 'from-green-500 to-emerald-400',
    icon: '🤖'
  },
  {
    category: 'Databases',
    items: ['MySQL', 'Redis'],
    color: 'from-orange-500 to-red-400',
    icon: '🗄️'
  }
]

export default function Skills() {
  const [sectionRef, isVisible] = useScrollAnimation(0.2)
  const [displayText, setDisplayText] = useState('')
  const fullText = 'cat skills.txt'

  useEffect(() => {
    if (!isVisible) return

    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section id="skills" className="max-w-7xl mx-auto px-8 py-24" ref={sectionRef}>
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
        {displayText === fullText && (
          <>
            <h2 className="text-5xl font-bold mb-4 text-white animate-fade-in">Technical Expertise</h2>
            <p className="text-xl text-gray-400 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>Languages, frameworks, databases, and tools I work with</p>
          </>
        )}
      </div>

      {displayText === fullText && (
        <div className={`flex justify-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.2s' : '0s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
          {skills.map((skill, idx) => {
            const animDelay = isVisible ? `${0.3 + idx * 0.15}s` : '0s'
            
            return (
            <div 
              key={idx}
              className={`group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: animDelay }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
              
              {/* Terminal header */}
              <div className="mb-4 pb-3 border-b border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-mono text-xs text-green-400">
                  <span className="text-cyan-400">➜</span> <span className="text-gray-400">{skill.category.toLowerCase()}</span>
                </p>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-3xl group-hover:animate-glow transition-all duration-300`}>{skill.icon}</span>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent group-hover:animate-glow`}>
                    {skill.category}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {skill.items.map((item, i) => (
                    <div 
                      key={i}
                      className={`flex items-center group/item ${isVisible ? 'animate-code-scroll' : 'opacity-0'}`}
                      style={{ animationDelay: `${0.3 + idx * 0.15 + i * 0.1}s` }}
                    >
                      <span className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${skill.color} group-hover/item:w-3 transition-all duration-300`}></span>
                      <span className="text-gray-300 group-hover/item:text-white group-hover/item:animate-glow transition-colors duration-300 font-medium font-mono text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom accent bar */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${skill.color} rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
      )}
    </section>
  )
}
