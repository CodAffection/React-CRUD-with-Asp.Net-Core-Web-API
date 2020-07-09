import * as actionTypes from '../actions/actionTypes';

const initialState = {
    list: []
}

const dCandidate = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        case actionTypes.CREATE:
            return {
                ...state,
                list: [...state.list, ...action.payload]
            }

        case actionTypes.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x.id === action.payload.id ? action.payload : x)
            }

        case actionTypes.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x.id !== action.payload)
            }

        default:
            return state;
    }
}

export default dCandidate;