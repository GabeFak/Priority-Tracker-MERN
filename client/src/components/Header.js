import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
                <Link to="/">Login/out</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header