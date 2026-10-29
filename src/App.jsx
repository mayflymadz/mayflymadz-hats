
import './App.css'
import './va.css'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

function App() {

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="App">

      <main className="va">

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <Moon /> : <Sun />}
        </button>

        <section id="home" className="va__main">

          <h1 className="va__title">
            Madison Beazer
          </h1>

          <p className="va__description">
            Female Voice Actor & Storyteller
          </p>

        </section>

        <section
          id="samples"
          className="va__section "
        >
          <h2 className="va__section-title">Samples</h2>

          <div className="va__samples-grid">
            <article className="va__sample">
              <h3 className="va__sample-title">Character Voice</h3>
              <p className="va__sample-description">
                Expressive character performance and personality.
              </p>
              <audio controls className="va__sample-audio" preload="metadata">
                <source src="/audio/character-voice.mp3" type="audio/mpeg" />
                Your browser does not support audio playback.
              </audio>
            </article>

            <article className="va__sample">
              <h3 className="va__sample-title">Narration</h3>
              <p className="va__sample-description">
                Engaging storytelling and voiceover work.
              </p>
              <audio controls className="va__sample-audio" preload="metadata">
                <source src="/audio/narration.mp3" type="audio/mpeg" />
                Your browser does not support audio playback.
              </audio>
            </article>

          </div>
        </section>

        <section
          id="credits"
          className="va__section va__credits"
        >
          <h2 className="va__section-title">
            Credits + Projects
          </h2>

          {/* Add projects and roles here */}
        </section>

        <section
          id="contact"
          className="va__section va__contact"
        >
          <h2 className="va__section-title">
            Contact
          </h2>

          {/* Add email and professional links here */}
        </section>
      </main>

      <footer className="va__footer">
        <p>
          &copy; {new Date().getFullYear()} Madison Beazer
        </p>
      </footer>
    </div>
  )
}

export default App
