import axios from 'axios';

export function getApi() {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Mjc3OTA0MTIsImV4cCI6MTcyNzg3NjgxMiwic3ViIjoiNzI3NyJ9.eeZbZ3jRr3vqO9I8Yu8gTK0tiShxspivDe6giTG0FVs';
    const api = axios.create({
        baseURL: 'https://fontecred.polijrinternal.com/'
    });

    // adicionando basic auth no cabeçalho da requisição
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    return api;
}
