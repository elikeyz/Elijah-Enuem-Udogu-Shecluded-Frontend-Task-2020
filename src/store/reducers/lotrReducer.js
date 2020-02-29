import { GET_LOTR_STARTED, GET_LOTR_SUCCESS, GET_LOTR_FAILED } from '../constants';

const initialState = {
    error: '',
    characters: [],
    isLoading: false
}

const lotrReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LOTR_STARTED:
            return { ...state, isLoading: true, error: '' };
        case GET_LOTR_SUCCESS:
            return { ...state, isLoading: false, characters: action.data };
        case GET_LOTR_FAILED:
            return { ...state, isLoading: false, error: action.error };
        default:
            return state;
    }
};

export default lotrReducer;