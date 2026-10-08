import { Link } from 'react-router-dom';
import {useState} from 'react';
import './Navbar.css';
import './theme.css';
import { ChefHat } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(0);

  const toggleMenu = (index) => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container">
        <nav>
            <ul className="nav--list">

                <button className="nav--toggle ${isOpen ? 'open' : ''}" onClick={toggleMenu}>
                    Hats <ChefHat/>
                </button>
                
                <div className="nav--title"> mayflymadz </div>

                <li className="item">
                    <Link to="/">Home</Link>
                </li>
                <li className="item">
                    <Link to="/about">About</Link>
                </li>
                <li className="item">
                    <Link to="/services">Services</Link>
                </li>
                <li className="item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}