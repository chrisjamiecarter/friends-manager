import * as types from "./actionType";

const initialState = {
    contacts: [],
    contact: {},
    loading: false
};

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default contactReducer;
