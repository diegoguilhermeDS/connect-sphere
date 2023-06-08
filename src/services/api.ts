import axios from 'axios'

/* https://connect-sphere-api.onrender.com/  http://localhost:3001/*/

export const api = axios.create({
    baseURL: 'https://connect-sphere-api.onrender.com/',
    timeout: 10000
})
