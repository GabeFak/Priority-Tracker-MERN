import React, {Fragment, useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/Auth/AuthContext';


const Header = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logOut, user } = authContext;

  const onLogout = () => {
    logOut();
  }

  const authLinks = (
    <Fragment>
      <li>
        Hello { user && user.name }
      </li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='material-icons'>arrow_forward</i>
          <span className="hide">Logout</span>
        </a>
      </li>
    </Fragment>
  )

  const guistLinks= (
    <Fragment>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/Register">Register</Link>
            </li>
    </Fragment>
  )

  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {isAuthenticated ? authLinks : guistLinks}
            {/* <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/Register">Register</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header