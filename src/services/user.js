import { http } from "./http";

export const getUsersByUsername = async ({ username }) => {
    try {
        const response = await http({ url: `search/${username}` });
        if (response) {
            return response;
        }
        throw new Error("Failed to get users");
    } catch (error) {
        return error;
    }
}

export const sendFriendRequest = async ({ id }) => {
    try {
        const response = await http({ method: "POST", url: `friend-request`, body: { id } });
        if (response) {
            return response;
        }
        throw new Error("Failed to send friend request");
    } catch (error) {
        return error;
    }
}

export const acceptFriendRequest = async ({ friendId }) => {
    try {
        const response = await http({ method: "POST", url: `accept-friend-request`, body: { friendId } });
        if (response) {
            return response;
        }
        throw new Error("Failed to accept friend request");
    } catch (error) {
        return error;
    }
}