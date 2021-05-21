import axios from 'axios';

export const httpPerson = axios.create({
    baseURL: 'https://api.github.com/',
    responseType: 'json'
})
