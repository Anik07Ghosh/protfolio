import { FaReact, FaNode, FaHtml5 } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact className="text-blue-500" />, level: 90 },
    { name: 'Node.js', icon: <FaNode className="text-green-500" />, level: 85 },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" />, level: 88 },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, level: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, level: 95 }
  ]

  return (
    <section id="skills" className="py-16 scroll-mt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-600">Skills</span>
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
                <span className="ml-auto text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full bg-blue-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}