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
    DELETE_FINAL_ROW,
    SET_BACKLOGGED_TO_STARTED,
    SET_CURRENT_FILTER_SELECT,
    CLEAR_CURRENT_FILTER_SELECT,
    SET_CURRENT_STATE_CAT
} from '../types';

const UserDataState = props => {
    const initialState = {
        setLaoding: false,
        userData: [   
        // Test Data
        {    
            category: 'backlog',
            name: 'Finish Dishes',
            description: '',
            subTasks: [],
            tags: [{tag: 'Tags'}],
            priority: 'low',
            isFinished: false,
            date: "2022-6-17 11:32:44"
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
            tags: [{tag: 'Tags'}, {tag: 'homeImprovement'}, {tag: 'garage'}],
            priority: 'med',
            isFinished: false,
            date: "2022-6-17 11:32:44"
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
            tags: [{tag: 'Tags'}, {tag: 'Programming'}, {tag: 'codeCleanup'}],
            priority: 'med',
            isFinished: false,
            date: "2022-6-17 11:32:44"
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
            tags: [{tag: 'Tags'}, {tag: 'Programming'}, {tag: 'codeCleanup'}],
            priority: 'low',
            isFinished: false,
            date: "2022-6-17 11:32:44"
        }
    ],
    clickCurrentFilter: null,
    curtentStateCat: null,
    filtered: null,
    currentTask: null,
    filtered: null
    };
    const [state, dispatch] = useReducer(userDataReducer, initialState);

    // DELETE_FINAL_ROW
    const deleteFinalRow = () => {
        dispatch({ type: DELETE_FINAL_ROW });
    };

    // SET_LOADING
    const setLoading = () => dispatch({ type: SET_LOADING });

    // ADD_TASK
    const addTask = (task) => {
        dispatch({ type: ADD_TASK, payload: task });
    };

    // DELETE_TASK
    const deleteTask = (name) => {
        dispatch({ type: DELETE_TASK, payload: name });
    };

    // SET_CURRENT_TASK
    const setCurrentTask = (name) => {
        clearCurrentTask();
        dispatch({ type: SET_CURRENT_TASK, payload: name });
    };

    // CLEAR_CURRENT_TASK
    const clearCurrentTask = () => {
        dispatch({ type: CLEAR_CURRENT_TASK });
    };

    // UPDATE_TASK
    const updateTask = (task) => {
        dispatch({ type: UPDATE_TASK, payload: task });
    };

    // FILTER_TASK
    const filterTasks = (input) => {
        dispatch({ type: FILTER_TASK, payload: input });
    };

    // CLEAR_FILTER_TASK
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER_TASK });
    };

    // SET_CURRENT_FILTER_SELECT
    const setCurrentFilterSelect = (catagory) => {
        clearCurrentFilterSelect();
        clearFilter();
        setCurtentStateCat(catagory);
        dispatch({ type: SET_CURRENT_FILTER_SELECT, payload: catagory });
    };

    // SET_CURRENT_STATE_CAT
    const setCurtentStateCat = (cat) => {
        dispatch({ type: SET_CURRENT_STATE_CAT, payload: cat });
    };

    // CLEAR_CURRENT_FILTER_SELECT
    const clearCurrentFilterSelect = () => {
        dispatch({ type: CLEAR_CURRENT_FILTER_SELECT });
    };

    // SET_BACKLOGGED_TO_STARTED
    const setToStarted = (name) => {
        dispatch({ type: SET_BACKLOGGED_TO_STARTED, payload: name });
    };

    return(
        <userDataContext.Provider
        value={{
            userData: state.userData,
            setLoading: state.setLoading,
            currentTask: state.currentTask,
            filtered: state.filtered,
            clickCurrentFilter: state.clickCurrentFilter,
            filtered: state.filtered,
            curtentStateCat: state.curtentStateCat,
            setCurrentFilterSelect,
            deleteFinalRow,
            deleteTask,
            setToStarted,
            addTask,
            updateTask,
            filterTasks,
            clearFilter,
            setCurrentTask,
            clearCurrentTask,
            setLoading
        }}>
            { props.children }
        </userDataContext.Provider>
    );
};

export default UserDataState;