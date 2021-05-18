import { httpPerson } from './http-common';

export const getPerson = (userName) => {
    return httpPerson.get(`users/${userName}`)
}

export const getPersonRepos = (userName) => {
    return httpPerson.get(`users/${userName}/repos`)
}
