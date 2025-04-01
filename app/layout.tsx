import './globals.css'
import Navbar from './components/Navbar'
import ThemeProvider from './ThemeProvider'
import Footer from './components/Footer' // Add this import

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <ThemeProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto p-4 pb-16"> {/* Added pb-16 for footer space */}
            {children}
          </main>
          <Footer /> {/* Add Footer here - outside main but inside ThemeProvider */}
        </ThemeProvider>
      </body>
    </html>
  )
}