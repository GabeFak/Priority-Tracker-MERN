import {
    SET_LOADING,
    ADD_TASK,
    DELETE_TASK,
    SET_CURRENT_TASK,
    CLEAR_CURRENT_TASK,
    UPDATE_TASK,
    FILTER_TASK,
    CLEAR_FILTER_TASK,
    SET_BACKLOGGED_TO_STARTED,
    DELETE_FINAL_ROW
} from '../types';

const Reducer = (state, action) => {
    switch(action.type) {

        case DELETE_FINAL_ROW:
            let deleteFinished = state.userData;
            let rowDeleted = deleteFinished.filter(cat => cat.category !== 'finished');
            return {
                ...state,
                userData: rowDeleted
            };
        case SET_LOADING:
            return {
                ...state,
                setLaoding: true
            };
        case ADD_TASK:
            // let curentState = state.userData;
            // let addedNewTask = curentState.unshift(action.payload)
            return {
                ...state,
                userData: [action.payload, ...state.userData]
            };
        case SET_CURRENT_TASK:
            let selectData = state.userData;
            let newCurrent = selectData.filter(task => task.name === action.payload);
            // console.log(newCurrent)
            return {
                ...state,
                currentTask: newCurrent[0]
            };
        case CLEAR_CURRENT_TASK:
            return {
                ...state,
                currentTask: null
            };
        case DELETE_TASK:
            let selectDataForDeletion = state.userData;
            let deleted = selectDataForDeletion.filter(task => task.name !== action.payload);
            return {
                ...state,
                userData: deleted
            };
        // case FILTER_TASK:
        //     return {
            
        //     }
        case UPDATE_TASK:
            let selectTask = state.userData;
            let tasksMinusUpdate = selectTask.filter(task => task.name !== action.payload.name);
            tasksMinusUpdate.unshift(action.payload);
            return {
                ...state,
                userData: tasksMinusUpdate
            };
        case SET_BACKLOGGED_TO_STARTED:
            let selectBackLoggedToStarted = state.userData;
            let setTostartedCat = selectBackLoggedToStarted.filter(task => task.name === action.payload);
            let restOfState = selectBackLoggedToStarted.filter(task => task.name !== action.payload);
            setTostartedCat.catagory = 'started';
            let newUserData = restOfState.unshift(setTostartedCat);
            return {
                ...state,
                userData: newUserData
            };
        default:
            return state;
    };
};
export default Reducer;