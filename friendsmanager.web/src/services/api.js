const apiUrl = process.env.REACT_APP_API_URL;

export const loadFriends = async () => {
    return await fetch(apiUrl)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw response;
    })
    .catch(error => {
        console.error("error", error);
        throw error;
    });
};

export const addFriend = async (friend) => {
    return await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(friend)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw response;
    })
    .catch(error => {
        console.error("error", error);
        throw error;
    });
};
