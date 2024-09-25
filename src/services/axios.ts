import axios from 'axios';

export function getApi() {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjcyMjg4OTMsImV4cCI6MTcyNzMxNTI5Mywic3ViIjoiMTE1NzgifQ.jSvnWqFkv6CC8s000FlsCZytL9SQjc3kd3U-XuJQxWU';
    const api = axios.create({
        baseURL: 'https://fontecred.polijrinternal.com/'
    });

    // adicionando basic auth no cabeçalho da requisição
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    return api;
}
