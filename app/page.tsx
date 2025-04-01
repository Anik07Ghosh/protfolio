import Projects from './projects/page'
import Skills from './components/Skills' // Make sure this path is correct

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Ctrl + Alt + Anik!
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
        A final-year B.Tech Computer Science student with a strong foundation in <span className="text-green-500 font-medium">Data Structure</span>, Algorithms, DBMS, and OOP. Proficient in <span className="text-blue-500 font-medium"> C , C++ , Java , Python </span>, with hands-on experience in software development, data science, and machine learning. Passionate about problem-solving and building scalable solutions.I build fast, accessible web experiences with
          <span className="text-blue-500 font-medium"> React</span> and
          <span className="text-green-500 font-medium"> Tailwind CSS</span>
        </p>
        <a 
          href="#projects" 
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg transition-all"
        >
          My Works
        </a>
      </section>

      {/* Projects Section */}
      <Projects />
      
      {/* Skills Section */}
      <Skills />
    </div>
  )
}