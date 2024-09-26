const categoriesApiUrl = process.env.REACT_APP_CATEGORIES_API_URL;
const friendsApiUrl = process.env.REACT_APP_FRIENDS_API_URL;

export const loadFriends = async () => {
    return await fetch(friendsApiUrl)
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
    return await fetch(friendsApiUrl, {
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
