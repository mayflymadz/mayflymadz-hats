import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import './theme.css';
import { ChefHat, HardHat, MicVocal, Guitar, Dices } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="container">
      <nav aria-label="Primary navigation">
        <button
          className="nav--toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <ChefHat size={28} aria-hidden="true" />
        </button>

        <div className="nav--title">mayflymadz</div>

        <ul
          id="primary-navigation"
          className="nav--menu"
          hidden={!isOpen}
        >
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/developer"><HardHat aria-hidden="true" />Developer</Link>
            </li>
            <li className="item">
              <Link to="/voiceactor"><MicVocal aria-hidden="true" />Voice Actor</Link>
            </li>
            <li className="item">
              <Link to="/musician"><Guitar aria-hidden="true" />Musician</Link>
            </li>
            <li className="item">
              <Link to="/ttrpg"><Dices aria-hidden="true" />Game Master</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}