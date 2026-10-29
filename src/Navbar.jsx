import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import './theme.css';
import { ChefHat, HardHat, MicVocal, Guitar, Dices } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (index) => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="container">
        <nav>
            <ul className="nav--list">

                <li>
                    <button  className={`nav--toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <ChefHat size={40}/>
                    </button>
                </li>


                { isOpen && (
                    <ul className="nav--menu">
                        <li className="item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="item">
                            <Link to="/developer"> <HardHat/> Developer</Link>
                        </li>
                        <li className="item">
                            <Link to="/voiceactor"> <MicVocal/> Voice Actor</Link>
                        </li>
                        <li className="item">
                            <Link to="/musician"> <Guitar/> Musician</Link>
                        </li>
                        <li className="item">
                            <Link to="/ttrpg"> <Dices/> Game Master</Link>
                        </li>
                    </ul>
                )}
                <li>
                    <div className="nav--title"> mayflymadz </div>
                </li>
            </ul>
        </nav>
    </div>
  )
}