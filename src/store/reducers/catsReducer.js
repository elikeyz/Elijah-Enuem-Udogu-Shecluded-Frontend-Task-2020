import { GET_CATS_STARTED, GET_CATS_SUCCESS, GET_CATS_FAILED } from '../constants';

const initialState = {
    error: '',
    cats: [],
    page: 0,
    isLoading: false
};

const catsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CATS_STARTED:
            return { ...state, isLoading: true, error: '' };
        case GET_CATS_SUCCESS:
            return { ...state, isLoading: false, cats: action.cats, page: action.page };
        case GET_CATS_FAILED:
            return { ...state, isLoading: false, error: action.error };
        default:
            return state;
    }
};

export default catsReducer;