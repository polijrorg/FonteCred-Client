import axios from 'axios';

export function getApi() {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjQ2Nzg5OTksImV4cCI6MTcyNDc2NTM5OSwic3ViIjoiOTEifQ.kNwxr-jvF9TYgNeeacfNW-wASaFl1OGLZHHwN4Cy_mg';

    const api = axios.create({
        baseURL: 'https://fontecred.polijrinternal.com/'
    });

    // adicionando basic auth no cabeçalho da requisição
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    return api;
}
