import axios from 'axios';

export function getApi() {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjczNzgwMDYsImV4cCI6MTcyNzQ2NDQwNiwic3ViIjoiNzI3NyJ9.jjG5N8fR0h61FFl0u9e5TmwnVzSAePx2M-p8pSBz5M4';
    const api = axios.create({
        baseURL: 'https://fontecred.polijrinternal.com/'
    });

    // adicionando basic auth no cabeçalho da requisição
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    return api;
}
