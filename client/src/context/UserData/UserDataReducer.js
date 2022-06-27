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
    SET_LOADING_FALSE,
    CLEAR_TASKS
} from '../types';

const Reducer = (state, action) => {
    switch(action.type) {
        case GET_TASKS:
            return {
                ...state,
                userData: action.payload
            };

        case SET_LOADING_FALSE:
            return {
                ...state,
                loading: false
            };

        // case DELETE_FINAL_ROW:
        //     let deleteFinished = state.userData;
        //     let rowDeleted = deleteFinished.filter(cat => cat.category !== 'finished');
        //     return {
        //         ...state,
        //         userData: rowDeleted,
        //         loading: false
        //     };

        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        case ADD_TASK:
            return {
                ...state,
                userData: [action.payload, ...state.userData],
                loading: false
            };

        case SET_CURRENT_TASK:
            let selectData = state.userData;
            let newCurrent = selectData.filter(task => task.name === action.payload);
            return {
                ...state,
                currentTask: newCurrent[0],
                loading: false
            };

        case CLEAR_CURRENT_TASK:
            return {
                ...state,
                currentTask: null,
                loading: false
            };

        case DELETE_TASK:
            let selectDataForDeletion = state.userData;
            let deleted = selectDataForDeletion.filter(task => task._id !== action.payload);
            return {
                ...state,
                userData: deleted,
                loading: false
            };

        case FILTER_TASK:
            let test = state.clickCurrentFilter.filter(input => {
                const regex = new RegExp(`${action.payload}`, 'gi');
                return input.name.match(regex) || input.priority.match(regex);
            });
            return {
                ...state,
                filtered: test,
                loading: false
            };

        case CLEAR_FILTER_TASK:
            return {
                ...state, 
                filtered: null,
                loading: false
            };

        case SET_CURRENT_FILTER_SELECT:
            let unfiltered = state.userData;
            let addToFilterSelect = unfiltered.filter(selectCat => selectCat.category === action.payload);
            return {
                ...state,
                clickCurrentFilter: addToFilterSelect,
                loading: false
            };

        case SET_CURRENT_STATE_CAT:
            return {
                ...state,
                curtentStateCat: action.payload,
                loading: false
            };

        case CLEAR_CURRENT_FILTER_SELECT:
            return {
                ...state,
                clickCurrentFilter: null,
                curtentStateCat: null,
                loading: false
            };   

        case CLEAR_TASKS:
            return {
                ...state,
                userData: [],
                clickCurrentFilter: null,
                curtentStateCat: null,
                filtered: null,
                currentTask: null,
                filtered: null,
                error: null,
                loading: false
            };

        case UPDATE_TASK:
            return {
                ...state,
                userData: state.userData.map(task => {
                    if(task._id !== action.payload._id) {
                        return task
                    }else{
                        return action.payload
                    }}),
                loading: false
            };

        case TASK_ERROR: 
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    };
};

export default Reducer;