import axios from 'axios'

/* https://connect-sphere-api.onrender.com/  http://localhost:3001/*/

export const api = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 10000
})
