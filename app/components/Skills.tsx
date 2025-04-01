'use client'
import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase, FiLayout, FiSmartphone } from 'react-icons/fi'

const skills = [
  { name: "C/C++", level: 90, icon: <FiLayout className="text-blue-500" /> },
  { name: "JAVA", level: 88, icon: <FiSmartphone className="text-blue-400" /> },
  { name: "PYTHON", level: 85, icon: <FiCpu className="text-green-500" /> },
  { name: "Full Stack", level: 83, icon: <FiCode className="text-blue-600" /> },
  { name: "AI/ML", level: 78, icon: <FiDatabase className="text-yellow-500" /> }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 scroll-mt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-600">Skills</span>
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
                <span className="ml-auto text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`h-2.5 rounded-full ${
                    skill.name.includes('Next') ? 'bg-blue-500' :
                    skill.name.includes('React') ? 'bg-blue-400' :
                    skill.name.includes('Node') ? 'bg-green-500' :
                    'bg-blue-600'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}