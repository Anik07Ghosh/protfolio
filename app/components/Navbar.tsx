import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="font-bold text-lg">ANIK</Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="#projects" className="hover:text-blue-500">Projects</Link>
        </div>
      </div>
    </nav>
  )
}