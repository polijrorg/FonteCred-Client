/* eslint-disable no-console */
import api from './api';

export interface UpdateProfileData {
    name?: string;
    email?: string;
    cpf?: string;
    cep?: string;
    cellphone?: string;
    endereco?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    uf?: string;
    cidade?: string;
    avatar?: number;
}

export async function updateProfile(data: UpdateProfileData): Promise<void> {
    try {
        await api.patch('/clients/update', data);
    } catch (error) {
        console.error('Erro ao atualizar dados pessoais', error);
        throw error;
    }
}
