import axios from 'axios'
import router from './router'

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('auth_token')}`;
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(
(response) => {return response; },
    (error) => {
        if(error.response.status == 401)
            router.push('/')

    return Promise.reject(error);
});