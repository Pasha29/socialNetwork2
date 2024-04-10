import axios  from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 
        "API-KEY": 'c4106ccd-27fa-4d1c-8f6f-0340b30e32b8' 
    }
})

export let usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true}).then(response => response.data);
    },
    follow(id){
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    unfollow(id){
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
}

export let profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status }).then(response => response.data);
    },
    updatePhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile);
        
        return instance.put(`profile/photo`, 
        formData, 
        { headers: { 'Content-Type': 'multipart/form-data' }})
        .then(response => response.data);
    },
    updateMainData(data) {
        return instance.put('profile/', data).then(response => response.data);
    }
}

export let authAPI = {
    getAuthData() {
        return instance.get('auth/me').then(response => response.data);
    },
    login(email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data);
    }
}

export let securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url').then(response => response.data);
    }
}