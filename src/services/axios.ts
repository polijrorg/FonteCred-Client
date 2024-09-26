import axios from 'axios';

export function getApi() {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjczNTM2NTUsImV4cCI6MTcyNzQ0MDA1NSwic3ViIjoiMTE1NzgifQ.BvQrpTUEDoZZCZXdmAWeN9jmFRZA5gOvRulB2fZVRcc';
    const api = axios.create({
        baseURL: 'https://fontecred.polijrinternal.com/'
    });

    // adicionando basic auth no cabeçalho da requisição
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    return api;
}
