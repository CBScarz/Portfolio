'use client'

import { useState, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const projects = [
  {
    title: 'AgriLink',
    techs: ['Laravel', 'Vuejs', 'MySQL'],
    description: 'Agricultural management system that streamlines farm operations, enhances productivity, and connects farmers with buyers through an intuitive platform.',
    metrics: [
      { value: '100%', label: 'Backend' },
      { value: '80%', label: 'Frontend' }
    ],
    github: 'https://github.com/CBScarz/agrilink-app'
  },
  {
    title: 'NoteIt',
    techs: ['PHP', 'Javascript', 'MySQL'],
    description: 'A web-based note-taking application that allows users to create, organize, and manage their notes efficiently with features like tagging, searching, and cloud synchronization.',
    metrics: [
      { value: '60%', label: 'Backend' },
      { value: '40%', label: 'Frontend' }
    ],
    github: 'https://github.com/your-username/noteit'
  },
  {
    title: 'JobSeek',
    techs: ['PHP', 'Javascript', 'MySQL'],
    description: 'A job portal platform that connects job seekers with employers, featuring advanced search filters, resume building tools, and application tracking to streamline the hiring process.',
    metrics: [
      { value: '70%', label: 'Backend' },
      { value: '50%', label: 'Frontend' }
    ],
    github: 'https://github.com/your-username/jobseek'
  },
  {
    title: 'Trucking Services',
    techs: ['Go', 'gRPC', 'PostgreSQL'],
    description: 'A logistics management system designed to optimize trucking operations, track shipments in real-time, and improve communication between drivers and dispatchers.',
    metrics: [
      { value: '60%', label: 'Backend' },
      { value: '30%', label: 'Frontend' }
    ],
    github: 'https://github.com/your-username/trucking-services'
  },
  {
    title: 'MetaXtractor',
    techs: ['Python'],
    description: 'A metadata extraction tool that analyzes various file formats to extract and organize metadata information, facilitating better data management and retrieval.',
    metrics: [
      { value: '100%', label: 'Backend' },
      { value: '100%', label: 'Design' }
    ],
    github: 'https://github.com/your-username/metaxtractor'
  },
  {
    title: 'University Chatbot Model',
    techs: ['Python', 'DeepSeek(LLM)', 'Pinecone(Vector Database)'],
    description: 'A chatbot that utilizes two frameworks Cache Augmented Generation and Retrieval Augmented Generation to provide accurate and context-aware responses to student inquiries about university services and information.',
    metrics: [
      { value: '1.5s', label: 'Response Time' },
      { value: '85%', label: 'Accuracy' }
    ],
    github: 'https://github.com/your-username/university-chatbot'
  },
]

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sectionRef, isVisible] = useScrollAnimation(0.5)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const fullText = 'ls -la projects/'

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

  const nextProject = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
      setIsTransitioning(false)
    }, 150)
  }

  const prevProject = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
      setIsTransitioning(false)
    }, 150)
  }

  const getCurrIndex = () => currentIndex
  const getPrevIndex = () => (currentIndex - 1 + projects.length) % projects.length
  const getNextIndex = () => (currentIndex + 1) % projects.length

  return (
    <section id="work" className="max-w-7xl mx-auto px-8 py-24" ref={sectionRef}>
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
            <h2 className="text-5xl font-bold mb-4 text-white animate-fade-in">Projects</h2>
          </>
        )}
      </div>

      {displayText === fullText && (
      <div className={`relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.2s' : '0s' }}>
        {/* Carousel Container */}
        <div className={`flex gap-6 transition-all duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
          {/* Previous Project */}
          <div className={`flex-shrink-0 w-full lg:w-4/12 opacity-60 scale-95 transform transition-all duration-300 ${isTransitioning ? '-translate-x-4' : 'translate-x-0'}`}>
            <div className="group bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-cyan-400 hover:bg-slate-900 transition-all duration-300 h-full">
              <div className="mb-4 pb-4 border-b border-slate-800">
                <h3 className="text-xl font-bold mb-3">{projects[getPrevIndex()].title}</h3>
                <div className="flex flex-wrap gap-2">
                  {projects[getPrevIndex()].techs.map((tech, i) => (
                    <span key={i} className="text-xs bg-slate-800 text-cyan-400 px-3 py-1 rounded border border-cyan-400/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{projects[getPrevIndex()].description}</p>

              <div className="grid grid-cols-2 gap-6 mb-6 py-4 border-y border-slate-800">
                {projects[getPrevIndex()].metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{metric.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={projects[getPrevIndex()].github} target="_blank" rel="noopener noreferrer" className="w-full py-2 bg-slate-800 text-cyan-400 rounded text-sm font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors text-center">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Current Project */}
          <div className={`flex-shrink-0 w-full lg:w-4/12 transform transition-all duration-300 ${isTransitioning ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
            <div className="group bg-slate-900/50 border-2 border-cyan-400 bg-slate-900 rounded-lg p-6 transition-all duration-300 h-full">
              <div className="mb-4 pb-4 border-b border-slate-800">
                <h3 className="text-xl font-bold mb-3">{projects[getCurrIndex()].title}</h3>
                <div className="flex flex-wrap gap-2">
                  {projects[getCurrIndex()].techs.map((tech, i) => (
                    <span key={i} className="text-xs bg-slate-800 text-cyan-400 px-3 py-1 rounded border border-cyan-400/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{projects[getCurrIndex()].description}</p>

              <div className="grid grid-cols-2 gap-6 mb-6 py-4 border-y border-slate-800">
                {projects[getCurrIndex()].metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{metric.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={projects[getCurrIndex()].github} target="_blank" rel="noopener noreferrer" className="w-full py-2 bg-slate-800 text-cyan-400 rounded text-sm font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors text-center">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Next Project */}
          <div className={`flex-shrink-0 w-full lg:w-4/12 opacity-60 scale-95 transform transition-all duration-300 ${isTransitioning ? 'translate-x-4' : 'translate-x-0'}`}>
            <div className="group bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-cyan-400 hover:bg-slate-900 transition-all duration-300 h-full">
              <div className="mb-4 pb-4 border-b border-slate-800">
                <h3 className="text-xl font-bold mb-3">{projects[getNextIndex()].title}</h3>
                <div className="flex flex-wrap gap-2">
                  {projects[getNextIndex()].techs.map((tech, i) => (
                    <span key={i} className="text-xs bg-slate-800 text-cyan-400 px-3 py-1 rounded border border-cyan-400/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{projects[getNextIndex()].description}</p>

              <div className="grid grid-cols-2 gap-6 mb-6 py-4 border-y border-slate-800">
                {projects[getNextIndex()].metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{metric.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={projects[getNextIndex()].github} target="_blank" rel="noopener noreferrer" className="w-full py-2 bg-slate-800 text-cyan-400 rounded text-sm font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors text-center">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Counter and Navigation */}
        <div className="flex items-center justify-between mt-8">
          <div className="text-gray-400">
            <span className="text-cyan-400 font-bold text-lg">{currentIndex + 1}</span>
            <span className="text-lg"> / {projects.length}</span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevProject}
              className="p-3 bg-slate-800 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 font-bold text-lg"
            >
              ←
            </button>
            <button
              onClick={nextProject}
              className="p-3 bg-slate-800 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 font-bold text-lg"
            >
              →
            </button>
          </div>
        </div>
      </div>
      )}
    </section>
  )
}
