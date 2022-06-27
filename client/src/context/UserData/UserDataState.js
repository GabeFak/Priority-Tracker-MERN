import React, { useReducer } from 'react';
import userDataContext from './UserDataContext';
import userDataReducer from './UserDataReducer';
import axios from 'axios';

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
    SET_CURRENT_FILTER_SELECT,
    CLEAR_CURRENT_FILTER_SELECT,
    SET_CURRENT_STATE_CAT,
    TASK_ERROR,
    GET_TASKS,
    CLEAR_TASKS,
    SET_LOADING_FALSE
} from '../types';

const UserDataState = props => {
    const initialState = {
        loading: false,
        error: null,
        userData: [   
        // Test Data
        // {   id: '123', 
        //     category: 'backlog',
        //     name: 'Finish Dishes',
        //     description: '',
        //     subTasks: [],
        //     tags: [{tag: 'Tags'}],
        //     priority: 'low',
        //     isFinished: false,
        //     date: "2022-6-17 11:32:44"
        // },
        // {   id: '1234', 
        //     category: 'started',
        //     name: 'Fix garage door',
        //     description: 'Replace torson rod and make it move up and down again.',
        //     subTasks: [
        //         ['fix torson rod', true],
        //         ['re-assemble', false],
        //         ['get torque right', false]

        //     ],
        //     tags: [{tag: 'Tags'}, {tag: 'homeImprovement'}, {tag: 'garage'}],
        //     priority: 'med',
        //     isFinished: false,
        //     date: "2022-6-17 11:32:44"
        // },
        // {   id: '12345', 
        //     category: 'inProgress',
        //     name: 'Clean code',
        //     description: 'Clean final code for project',
        //     subTasks: [
        //         ['Make it readable', true],
        //         ['Delete unnessasary tests', true],
        //         ['recompile', false]

        //     ],
        //     tags: [{tag: 'Tags'}, {tag: 'Programming'}, {tag: 'codeCleanup'}],
        //     priority: 'med',
        //     isFinished: false,
        //     date: "2022-6-17 11:32:44"
        // },
        // {   id: '123456', 
        //     category: 'finished',
        //     name: 'Clean code 3',
        //     description: 'Clean final code for project 3',
        //     subTasks: [
        //         ['Make it readable 3', true],
        //         ['Delete unnessasary tests 3', true],
        //         ['recompile 3', true]

        //     ],
        //     tags: [{tag: 'Tags'}, {tag: 'Programming'}, {tag: 'codeCleanup'}],
        //     priority: 'low',
        //     isFinished: false,
        //     date: "2022-6-17 11:32:44"
        // }
    ],
    clickCurrentFilter: null,
    curtentStateCat: null,
    filtered: null,
    currentTask: null,
    filtered: null
    };

    const [state, dispatch] = useReducer(userDataReducer, initialState);

    // SET_LOADING_FALSE
    const setLoadingFalse = () => dispatch({ type: SET_LOADING_FALSE });

    // GET_TASKS
    const getTasks = async () => {
        setLoading();
        try {
            const res = await axios.get('/api/userData');

            dispatch({ type: GET_TASKS, payload: res.data });
            setLoadingFalse();
        } catch (err) {
            dispatch({ type: TASK_ERROR, payload: err.responce.msg});
        };
    };

    // SET_LOADING
    const setLoading = () => dispatch({ type: SET_LOADING });

    // ADD_TASK
    const addTask = async (task) => {
        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        };

        try {
            const res = await axios.post('/api/userData', task, config);

            dispatch({ type: ADD_TASK, payload: res.data });
        } catch (err) {
            dispatch({ type: TASK_ERROR, payload: err.responce.msg});
        }; 
    };

    // UPDATE_TASK
    const updateTask = async (task) => {
        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        };

        try {
            const res = await axios.put(`/api/userData/${task._id}`, task, config);

            dispatch({ type: UPDATE_TASK, payload: res.data });
        } catch (err) {
            dispatch({ type: TASK_ERROR, payload: err.responce.msg});
        };
    };

    // DELETE_TASK
    const deleteTask = async (id) => {
        try {
            await axios.delete(`/api/userData/${id}`);

            dispatch({ type: DELETE_TASK, payload: id });

        } catch (err) {
            dispatch({ type: TASK_ERROR, payload: err.responce.msg });
        }; 
    };

    // DELETE_FINAL_ROW
    // const deleteFinalRow = () => {
    //     dispatch({ type: DELETE_FINAL_ROW });
    // };

    // SET_CURRENT_TASK
    const setCurrentTask = (name) => {
        setLoading();
        clearCurrentTask();
        dispatch({ type: SET_CURRENT_TASK, payload: name });
    };

    // CLEAR_CURRENT_TASK
    const clearCurrentTask = () => {
        // setLoading();
        dispatch({ type: CLEAR_CURRENT_TASK });
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

    // CLEAR_TASKS
    const clearTasks = () => {
        dispatch({ type: CLEAR_TASKS });
    };

    return(
        <userDataContext.Provider
        value={{
            userData: state.userData,
            loading: state.loading,
            currentTask: state.currentTask,
            filtered: state.filtered,
            clickCurrentFilter: state.clickCurrentFilter,
            filtered: state.filtered,
            curtentStateCat: state.curtentStateCat,
            error: state.error,
            getTasks,
            setCurrentFilterSelect,
            // deleteFinalRow,
            deleteTask,
            addTask,
            updateTask,
            filterTasks,
            clearFilter,
            setCurrentTask,
            clearCurrentTask,
            setLoading,
            clearTasks 
        }}>
            { props.children }
        </userDataContext.Provider>
    );
};

export default UserDataState;