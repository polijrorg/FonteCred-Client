import axios from 'axios';

export function getApi() {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Mjc5NjUyNDksImV4cCI6MTcyODA1MTY0OSwic3ViIjoiNzQyMiJ9.IawrZfAfloJCqfqHIlMrVe-JnY1wvbHhyQgTKMsLpeQ';
    const api = axios.create({
        baseURL: 'https://fontecred.polijrinternal.com/'
    });

    // adicionando basic auth no cabeçalho da requisição
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    return api;
}
