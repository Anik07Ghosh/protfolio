'use client' // Required for interactivity
import { useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: "Sentiment Analysis",
    description: "Developed a sentiment analysis model that classifies text into emotions such as happy, sad, or neutral using machine learning techniques.",
    tags: ["Jupyter Notebook", "Python"],
    github: "https://github.com/Anik07Ghosh/Simple-Sentiment-Analysis",
    demo: "https://weatherapp-demo.vercel.app"
  },
  {
    title: "Tic-Tac-Toe",
    description: "Developed a Tic-Tac-Toe Android application using Kotlin in Android Studio, implementing interactive gameplay with a user-friendly interface.",
    tags: ["Android", "Kotlin"],
    github: "https://github.com/Anik07Ghosh/Tic-Tac-Toe-game-Android-Development-",
    demo: "https://taskmanager-demo.vercel.app"
  },
  {
    title: "Movie recommandation System",
    description: "Developed a movie recommendation system using Python in Jupyter Notebook, leveraging machine learning algorithms to suggest movies based on user preferences.",
    tags: ["Python", "Jupyter Notebook"],
    github: "https://github.com/Anik07Ghosh/Movie-recommandation-using-Machine-Learning",
    demo: "https://taskmanager-demo.vercel.app"
  },
  {
    title: "All Java Projects",
    description: "Click to see all Java Projects",
    tags: ["Java"],
    github: "https://github.com/Anik07Ghosh/java_projets",
    demo: "https://taskmanager-demo.vercel.app"
  },
  {
    title: "Web Development",
    description: "Here All My web developments projects",
    tags: ["HTML", "CSS", "JS", "REACT"],
    github: "https://github.com/Anik07Ghosh/Web-Development---Projects",
    demo: "https://taskmanager-demo.vercel.app"
  },
  {
    title: "C Development",
    description: "C development Project ex. Number Game",
    tags: ["C", "C++"],
    github: "https://github.com/Anik07Ghosh/C-Development/tree/main/C%2B%2B%20Development/Number%20Game",
    demo: "https://taskmanager-demo.vercel.app"
  }
  // Removed duplicate projects
]

export default function Projects() {
  const [demoError, setDemoError] = useState<string | null>(null)

  const handleDemoClick = (projectTitle: string) => {
    setDemoError(`🚧 ${projectTitle} demo is under construction! Check back soon.`)
    setTimeout(() => setDemoError(null), 3000) // Auto-hide after 3 seconds
  }

  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          AnK's <span className="text-blue-600">Projects</span>
        </h2>
        
        {/* Error Message (shown at top) */}
        {demoError && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2 animate-fade-in">
            <span>⚠️</span>
            <span>{demoError}</span>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    <FiGithub className="h-5 w-5" />
                    Code
                  </a>
                  
                  <button
                    onClick={() => handleDemoClick(project.title)}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    <FiExternalLink className="h-5 w-5" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}