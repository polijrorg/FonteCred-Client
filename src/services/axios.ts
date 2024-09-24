import axios from 'axios';

export function getApi() {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjcxMzg0NDMsImV4cCI6MTcyNzIyNDg0Mywic3ViIjoiMTE1NzgifQ.885dLM3D3g4CkcFWNwMlCRxIHb72y9HZ0Vtt7EV730U';
    const api = axios.create({
        baseURL: 'https://fontecred.polijrinternal.com/'
    });

    // adicionando basic auth no cabeçalho da requisição
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    return api;
}
