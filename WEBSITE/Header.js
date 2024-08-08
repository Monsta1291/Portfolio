import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="assets/1.PNG" alt="Yousef's Logo" />
          <a href="https://www.youtube.com/@YousefCompSci" target="_blank" rel="noopener noreferrer">Yousef Alhamad</a>
        </div>
        <ul className={isMenuOpen ? 'open' : ''}>
          <li><a href="#main">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#feedback">Feedback</a></li>
        </ul>
        <a href="mailto:yousef.alhamad@outlook.com?subject=E-portfolio%20Email&body=Hello%20Yousef%20">
          <button>Contact Me</button>
        </a>
        <button id="menuButton" onClick={toggleMenu}><i className='bx bx-menu'></i></button>
      </nav>
    </header>
  );
}

export default Header;
