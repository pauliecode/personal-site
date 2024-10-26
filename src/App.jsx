import './App.css'
import Intro from './components/Intro'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import Experience from './components/Experience'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

function App() {

  const [section, setSection] = useState(0);

  return (
    <div className="app">
      <div className="left-container">
        <Intro />
        <NavBar 
        setSection={setSection}
        />
      </div>
      <Fade triggerOnce>
        <div className="section-container">
          {section === 0 && <Home />}
          {section === 1 && <About />}
          {section === 2 && <Experience />}
          {section === 3 && <Projects />}
        </div>
      </Fade>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App

// possible additions:
// theme customizer OR light/dark mode
// chatbot that answers questions about me
