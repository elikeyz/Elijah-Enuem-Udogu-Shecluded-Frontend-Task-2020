import { GET_CATS_STARTED } from '../constants';

export const getCats = (page) => ({
    type: GET_CATS_STARTED,
    page
});