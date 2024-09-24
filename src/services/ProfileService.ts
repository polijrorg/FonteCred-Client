/* eslint-disable no-console */
import api from './api';

export interface PersonalData {
    name: string;
    email: string;
    phoneNumber: string;
    endereco: {
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
        complemento?: string;
    };
    points: string;
    avatar: number; // Adicionando o avatar aqui
}

export async function fetchPersonalData(): Promise<PersonalData> {
    try {
        const response = await api.get('/clients/specific');
        const { data } = response;
        console.log(data);

        const personalData: PersonalData = {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber || '',
            endereco: {
                rua: data.endereco,
                numero: data.numero,
                bairro: data.bairro,
                cidade: data.cidade,
                estado: data.uf,
                cep: data.cep,
                complemento: data.complemento || ''
            },
            points: `${data.points || 0} pts`,
            avatar: data.avatar // Pegando o valor do avatar da resposta
        };

        return personalData;
    } catch (error) {
        console.log('Erro ao buscar dados pessoais', error);
        throw error;
    }
}
