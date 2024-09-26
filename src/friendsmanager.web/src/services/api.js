const categoriesApiUrl = process.env.REACT_APP_CATEGORIES_API_URL;
const friendsApiUrl = process.env.REACT_APP_FRIENDS_API_URL;

export const loadCategories = async () => {
    return await fetch(categoriesApiUrl)
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

export const loadFriend = async (id) => {
    return await fetch(friendsApiUrl + `${id}`)
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

export const addContact = async (contact) => {
    var friend = await loadFriend(contact.friendid);

    const request = {};
    request.name = friend.name;
    request.desiredContactFrequency = friend.desiredContactFrequency;
    request.lastContactDate = contact.contactDate;
    request.lastContactType = contact.contactType;
    request.categoryId = friend.category.id;
    
    await updateFriend(friend.id, request);
};

const updateFriend = async (id, friend) => {
    return await fetch(friendsApiUrl + `${id}`, {
        method: 'PUT',
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
