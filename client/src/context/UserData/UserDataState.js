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
                ['fix torson rod', true],
                ['re-assemble', false],
                ['get torque right', false]

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
                ['Make it readable', true],
                ['Delete unnessasary tests', true],
                ['recompile', false]

            ],
            tags: ['Programming', 'codeCleanup'],
            priority: 'med',
            isFinished: false,
            date: Date.now
        },
        {    
            category: 'finished',
            name: 'Clean code 3',
            description: 'Clean final code for project 3',
            subTasks: [
                ['Make it readable 3', true],
                ['Delete unnessasary tests 3', true],
                ['recompile 3', true]

            ],
            tags: ['Programming', 'codeCleanup'],
            priority: 'low',
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
        const addTask = (task) => {
            dispatch({ type: ADD_TASK, payload: task });
        }
    // DELETE_TASK
        const deleteTask = (name) => {
            dispatch({ type: DELETE_TASK, payload: name });
        }
    // SET_CURRENT_TASK
        const setCurrentTask = (name) => {
            clearCurrentTask();
            dispatch({ type: SET_CURRENT_TASK, payload: name });
        }

    // CLEAR_CURRENT_TASK
        const clearCurrentTask = () => {
            dispatch({ type: CLEAR_CURRENT_TASK });
        }
    // UPDATE_TASK
        const updateTask = (task) => {
            dispatch({ type: UPDATE_TASK, payload: task })
        }
    // FILTER_TASK

    // CLEAR_FILTER_TASK

    return(
        <userDataContext.Provider
        value={{
            userData: state.userData,
            setLoading: state.setLoading,
            currentTask: state.currentTask,
            deleteTask,
            addTask,
            updateTask,
            setCurrentTask,
            clearCurrentTask,
            setLoading
        }}>
            { props.children }
        </userDataContext.Provider>
    );
};

export default UserDataState;