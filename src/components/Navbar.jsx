import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import moonIcon from '../assets/moon.svg';
import sunIcon from '../assets/sun.svg';
import logoImg from '../assets/image3.png';
import '../css/theme-animation.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 id="logo">
          <Link to="/">
            <img src={logoImg} alt="Your Logo" />
          </Link>
        </h1>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><Link className="nav-link" to="/about">ABOUT</Link></li>
          <li><a className="nav-link" href="https://anti-blog.vercel.app/" target="_blank" rel="noreferrer">BLOGS</a></li>
          <li><Link className="nav-link" to="/#projects">PROJECTS</Link></li>
          <li><a className="nav-link" href="https://www.linkedin.com/in/dravingupta" style={{ backgroundColor: '#FFCF41', color: '#000', padding: '8px 16px', borderRadius: '30px', fontWeight: '600' }}>CONTACT</a></li>


          <div className="theme-switch">
            <input
              type="checkbox"
              id="switch"
              checked={isDark}
              onChange={handleThemeToggle}
            />
            <label className="toggle-icons" htmlFor="switch">
              {!isDark && <img className="moon animate-rotate" src={moonIcon} alt="Moon" />}
              {isDark && <img className="sun animate-rotate" src={sunIcon} alt="Sun" />}
            </label>
          </div>
        </ul>

        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
