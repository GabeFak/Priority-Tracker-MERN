import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../materializeOverride.css';
import AlertContext from '../context/Alert/AlertContext';
import Alerts from './Alerts';
import AuthContext from '../context/Auth/AuthContext';


const Register = () => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext)
    const { register, error, clearErrors, isAuthenticated} = authContext;
    const { setAlert } = alertContext;

    const nav = useNavigate();
    useEffect(() => {
        if(isAuthenticated) {
            nav('/dashboard')
        }

        if(error === 'User already exists'){
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated])

    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
      password2: ''
    });

    const {name, email, password, password2 } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        if(name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else if(password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({
                name,
                email,
                password
            });
        }
    }

    return (
        <div className="row container" >
            <div>Register</div>
            
            <form onSubmit={onSubmit} className="col s12">
                <Alerts />
                <div className="row">
                    <div className="input-field col s12">
                        <input id="userName" name='name' value={name} onChange={onChange} required type="text" className="validate" />
                        <label htmlFor="userName" >User Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" name='email' value={email} onChange={onChange} required type="email" className="validate" />
                        <label htmlFor="email">Email</label> 
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" name='password' value={password} onChange={onChange} required minLength='6' type="password" className="validate" />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password2" name='password2' value={password2} onChange={onChange} minLength='6' type="password" className="validate" />
                        <label htmlFor="password2">Retype Password</label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s6">
                    {/* <a className="waves-effect waves-light btn wide"> */}
                        <input type="submit" value="Register"></input>
                        {/* </a> */}
                        
                    </div>
                </div>
                   
            </form>

        </div>
    )
};

export default Register;