import dynamic from 'next/dynamic'
import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'

const Skills = dynamic(() => import('./components/Skills'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <main className="mt-6 sm:mt-10 space-y-6 sm:space-y-10">
          <Experience />
          <Education />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  )
}

