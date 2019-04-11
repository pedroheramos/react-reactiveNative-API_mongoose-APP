import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    baseURL2: 'http://oministack-backend.herokuapp.com'
})

export default api;