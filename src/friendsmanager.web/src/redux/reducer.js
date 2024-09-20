import * as types from "./actionType";

const initialState = {
    friends: [],
    friend: {},
    loading: false
};

const friendReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_FRIENDS:
            return {
                ...state,
                friends: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default friendReducer;
