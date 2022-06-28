import React, {Fragment, useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/Auth/AuthContext';
import '../materializeOverride.css';
import UserDataContext from '../context/UserData/UserDataContext';

const Header = () => {
    const userDataContext = useContext(UserDataContext)
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logOut, user } = authContext;
    const { clearTasks } = userDataContext;

    const onLogout = () => {
        logOut();
        clearTasks();
    };

    const authLinks = (
        <div className='authLinks'>
            <li>
                Hello { user && user.name }
            </li>
            <li>
                <a onClick={onLogout} href='#!'>
                    <i className='material-icons'>arrow_forward</i>
                </a>
            </li>
        </div>
    );

    const guistLinks = (
        <div className='landing-links'>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/Register">Register</Link>
            </li>
        </div>
    );

    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Task Tracker</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {isAuthenticated ? authLinks : guistLinks}
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;