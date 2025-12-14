'use client'

import { useState, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Contact() {
  const [sectionRef, isVisible] = useScrollAnimation(0.2)
  const [displayText, setDisplayText] = useState('')
  const fullText = 'echo "Let\'s connect"'

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

  const contactLinks = [
    { name: 'Email', href: 'clydenapitan25@gmail.com', icon: MdEmail, color: 'from-blue-500 to-cyan-400' },
    { name: 'GitHub', href: 'https://github.com/CBScarz', icon: FaGithub, color: 'from-gray-600 to-gray-800' },
    { name: 'LinkedIn', href: 'www.linkedin.com/in/cbnapitan', icon: FaLinkedin, color: 'from-blue-600 to-blue-400' }
  ]

  return (
    <section id="contact" className="max-w-6xl mx-auto px-8 py-24" ref={sectionRef}>
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
            <h2 className="text-5xl font-bold mb-4 text-white animate-fade-in">Let's Connect</h2>
            <p className="text-xl text-gray-400 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>Open to collaboration and new opportunities</p>
          </>
        )}
      </div>

      {displayText === fullText && (
      <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.4s' : '0s' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className="group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 text-center animate-fade-in opacity-0"
              style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <link.icon className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {link.name}
                </h3>
                <p className="text-sm text-gray-500 font-mono group-hover:text-green-400 transition-colors duration-300">
                  $ connect --{link.name.toLowerCase()}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${link.color} rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </a>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
          <p className="text-gray-500 font-mono text-sm">
            <span className="text-cyan-400">~/portfolio</span> <span className="text-gray-600">$</span> <span className="text-green-400">status</span>
          </p>
          <p className="text-gray-400 mt-2">Currently available for freelance work and internship opportunities</p>
        </div>
      </div>
      )}
    </section>
  )
}
