import axios from 'axios';

export function getApi() {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjY2ODkyMzgsImV4cCI6MTcyNjc3NTYzOCwic3ViIjoiMzUwIn0._NoQp0iV0NHs_H3Y3zjkbTx0qxk-QHwWyevylBf0mNA';
    const api = axios.create({
        baseURL: 'https://fontecred.polijrinternal.com/'
    });

    // adicionando basic auth no cabeçalho da requisição
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    return api;
}
