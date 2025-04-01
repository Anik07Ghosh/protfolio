'use client'
import { FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-6 text-center">
          Let's Connect!
        </h3>
        
        <div className="flex justify-center gap-6">
          {/* Twitter */}
          <a 
            href="https://x.com/Stra_7_nger?t=jhdNNuKP2ea4kyeU7LH8IQ&s=09" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/steven_rogers_07/profilecard/?igsh=c3RodGtpbXkzY3My" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          
          {/* Email */}
          <a 
            href="mailto:capkar5566@gmail.com" 
            aria-label="Email"
            className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
          >
            <FaEnvelope className="h-6 w-6" />
          </a>
        </div>
        
        <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Anik Ghosh. All rights reserved.
        </p>
      </div>
    </footer>
  )
}