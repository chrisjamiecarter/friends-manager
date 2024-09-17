import * as types from "./actionType";

const getFriends = (friends) => ({
    type: types.GET_FRIENDS,
    payload: friends,
});

export const loadFriends = () => {
    return function (dispatch) {
        // fetch(`${process.env.REACT_APP_API}`)
        fetch("http://localhost:5000/friends")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(data => {
            console.log("data", data);
            dispatch(getFriends(data));
        })
        .catch(error => {
            console.error("error", error);
        });
    };
};
