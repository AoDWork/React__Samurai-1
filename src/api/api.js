import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "some generated key" }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const usersTracking = {
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data);
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
}

export const userAuth = () => {
    return instance.get(`auth/me`)
}