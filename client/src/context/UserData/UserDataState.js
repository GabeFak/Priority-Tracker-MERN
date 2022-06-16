import React, { useReducer } from 'react';
import userDataContext from './UserDataContext';
import userDataReducer from './UserDataReducer';
import {
    SET_LOADING,
    ADD_TASK,
    DELETE_TASK,
    SET_CURRENT_TASK,
    CLEAR_CURRENT_TASK,
    UPDATE_TASK,
    FILTER_TASK,
    CLEAR_FILTER_TASK,
    ORGANIZE_BY_PRIORITY
} from '../types';

const UserDataState = props => {
    const initialState = {
        setLaoding: false,
        userData: [   
        {    
            category: 'backlog',
            name: 'Finish Dishes',
            description: '',
            subTasks: [],
            tags: [],
            priority: 'low',
            isFinished: false,
            date: Date.now
        },
        {    
            category: 'started',
            name: 'Fix garage door',
            description: 'Replace torson rod and make it move up and down again.',
            subTasks: [
                ['fix torson rod', 1],
                ['re-assemble', 0],
                ['get torque right', 0]

            ],
            tags: ['homeImprovement', 'garage'],
            priority: 'med',
            isFinished: false,
            date: Date.now
        },
        {    
            category: 'inProgress',
            name: 'Clean code',
            description: 'Clean final code for project',
            subTasks: [
                ['Make it readable', 1],
                ['Delete unnessasary tests', 1],
                ['recompile', 0]

            ],
            tags: ['Programming', 'codeCleanup'],
            priority: 'med',
            isFinished: false,
            date: Date.now
        }
    ],
    currentTask: null
    };
    const [state, dispatch] = useReducer(userDataReducer, initialState);

    // ORGANIZE_BY_PRIORITY

    // SET_LOADING
        const setLoading = () => dispatch({ type: SET_LOADING});
    // ADD_TASK

    // DELETE_TASK

    // SET_CURRENT_TASK
        const setCurrentTask = (name) => {
            clearCurrentTask();
            dispatch({ type: SET_CURRENT_TASK, payload: name});
        }

    // CLEAR_CURRENT_TASK
        const clearCurrentTask = () => {
            dispatch({ type: CLEAR_CURRENT_TASK });
        }
    // UPDATE_TASK

    // FILTER_TASK

    // CLEAR_FILTER_TASK

    return(
        <userDataContext.Provider
        value={{
            userData: state.userData,
            setLoading: state.setLoading,
            currentTask: state.currentTask,
            setCurrentTask,
            clearCurrentTask,
            setLoading
        }}>
            { props.children }
        </userDataContext.Provider>
    );
};

export default UserDataState;