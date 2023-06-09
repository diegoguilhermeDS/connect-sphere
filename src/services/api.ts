import axios from 'axios'


export const api = axios.create({
    baseURL: 'https://connect-sphere-api.onrender.com/',
    timeout: 10000
})
