import React, { useState, useContext, useEffect} from 'react';
import '../materializeOverride.css';
import { useNavigate, Link } from 'react-router-dom';
import AlertContext from '../context/Alert/AlertContext';
import Alerts from './Alerts';
import AuthContext from '../context/Auth/AuthContext';

const Login = () => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext)

    const { logIn, error, clearErrors, isAuthenticated} = authContext;
    const { setAlert } = alertContext;

    const nav = useNavigate();

    useEffect(() => {
        if(isAuthenticated) {
            nav('/dashboard');
        };

        if(error === 'Invalid credentials'){
            setAlert(error, 'danger');
            clearErrors();
        };
        //eslint-disable-next-line
    }, [error, isAuthenticated]);


    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        if(email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        } else {
            logIn({
                email,
                password
            });
        };
    };

    return (
        <div className="row container" >
            <div>Login</div>
                <form onSubmit={onSubmit} className="col s12">
                    <Alerts />
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" name='email' value={email} onChange={onChange} className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" name='password' value={password} onChange={onChange} className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <button className="waves-effect waves-light btn wide" type="submit" value="Login" >Login</button>
                        </div>
                        <div className="input-field col s6">
                            <Link className="waves-effect waves-light btn wide" to="/Register">Register</Link>
                        
                        </div>
                    </div>
                </form>
        </div>
    )
};

export default Login;