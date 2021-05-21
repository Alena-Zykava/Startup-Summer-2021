import { httpPerson } from './http-common';

export const getPerson = (userName) => {
    return httpPerson.get(`users/${userName}`)
}

export const getPersonRepos = (userName, currentPage) => {
    return httpPerson.get(`users/${userName}/repos?per_page=4&page=${currentPage}`)
}
