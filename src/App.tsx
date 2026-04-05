import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Summary } from './components/Summary'
import { Highlights } from './components/Highlights'
import { Skills } from './components/Skills'
import { Tools } from './components/Tools'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { ResumeSection } from './components/ResumeSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Highlights />
        <Skills />
        <Tools />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <ResumeSection />
      </main>
      <Footer />
    </>
  )
}

export default App
