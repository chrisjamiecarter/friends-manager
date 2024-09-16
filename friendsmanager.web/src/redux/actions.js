import * as types from "./actionType";

const getContacts = (contacts) => ({
    type: types.GET_CONTACTS,
    payload: contacts,
});

export const loadContacts = () => {
    return function (dispatch) {
        // fetch(`${process.env.REACT_APP_API}`)
        fetch("http://localhost:5000/contacts")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(data => {
            console.log("data", data);
            dispatch(getContacts(data));
        })
        .catch(error => {
            console.error("error", error);
        });
    };
};
