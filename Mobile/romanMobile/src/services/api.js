import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://192.168.3.103:5000/api' //Samuel_F1
    baseURL: 'http://192.168.0.103:5000/api' 
});

export default api;