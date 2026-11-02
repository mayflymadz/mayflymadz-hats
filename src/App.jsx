
import './App.css'
import './va.css'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import credits from './credits'
import samples from './samples'
import about from './about'
import contact from './contact'

function App() {

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

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
        <section id="home" className="va__main">

          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } mode`}
            title={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } mode`}
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>

          <h1 className="va__title">
            Madison Beazer
          </h1>

          <p className="va__description">
            Versatile Female Voice Actor
          </p>
        </section>

        <section
          id="samples"
          className="va__section va__section-card va__samples"
        >
          <h2 className="va__section-title">Voice Samples</h2>

          <div className="va__samples-grid">
            {samples.map((sample) => (
              <article className="va__sample" key={sample.id}>
                <h3 className="va__sample-title">
                  {sample.title}
                </h3>

                <p className="va__sample-description">
                  {sample.description}
                </p>

                <audio
                  controls
                  className="va__sample-audio"
                  preload="metadata"
                >
                  <source src={sample.src} type="audio/mpeg" />
                  Your browser does not support audio playback.
                </audio>
              </article>
            ))}
          </div>
        </section>

        <section
        id="about"
        className="va__section va__section-card"
        >
          <h2 className="va__section-title">{about.title}</h2>

          {about.content.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <p className="va__body" key={index}>
                  {item.text}
                </p>
              )
            }

            if (item.type === "list") {
            return (
              <div key={index}>
                {item.title && (
                  <h3 className="va__body">
                    {item.title}
                  </h3>
                )}

                <ul className="va__body va__list">
                  {item.items.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )
          }

            return null
          })}
        </section>

        <section
          id="credits"
          className="va__section va__section-card"
        >
          <h2 className="va__section-title">Credits & Projects</h2>
          <div className="va__credits-list">
          {credits.map((credit) => (
            <article className="va__credit" key={credit.id}>
              <div>
                <h3 className="va__credit-title">
                  {credit.project}
                </h3>

                <p className="va__credit-description">
                  {credit.role} · {credit.description}
                </p>
              </div>

              {credit.url && (
                <a
                  className="va__text-link"
                  href={credit.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project ↗
                </a>
              )}
            </article>
          ))}
        </div>
        </section>

        <section
          id="contact"
          className="va__section va__section-card"
        >
          <h2 className="va__section-title">{contact.title}</h2>

          <div className="va__contact-links">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="va__contact-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="va__contact-email">
            <p>Business inquries only may be sent to: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          </div>
        </section>
      </main>

      <footer className="va__footer">
        <p>
          © {new Date().getFullYear()} Madison Beazer
        </p>
      </footer>
    </div>
  )
}
export default App
