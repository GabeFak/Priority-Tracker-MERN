import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import {v4 as uuid} from 'uuid';
import {
    SET_ALERT,
    REMOVE_ALERT 
} from '../types';

const AlertState = props => {
    const initialState = [];

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // SET_ALERT
    const setAlert = (msg, type, alertClass, timeout = 5000) => {
        const id = uuid();
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, alertClass, id }
        });
        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    }

    return(
        <AlertContext.Provider
        value={{
            alerts: state,
            setAlert
        }}>
            { props.children }
        </AlertContext.Provider>
    );
};

export default AlertState;