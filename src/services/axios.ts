import axios from 'axios';

export function getApi() {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Mjc4MTMwMTIsImV4cCI6MTcyNzg5OTQxMiwic3ViIjoiNzQyMiJ9.cieA-I6QtQH1nIe7KDQQJiE0ZlVZSBAR6hyoImrypbI';
    const api = axios.create({
        baseURL: 'https://fontecred.polijrinternal.com/'
    });

    // adicionando basic auth no cabeçalho da requisição
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    return api;
}
