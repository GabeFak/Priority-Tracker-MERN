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

const Reducer = (state, action) => {
    switch(action.type) {
      
        case SET_LOADING:
            return {
                ...state,
                setLaoding: true
            };
      
        default:
            return state;
    };
};
export default Reducer;