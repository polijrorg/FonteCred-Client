/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
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
    avatar: number;
    redeemedPrizes: Prize[];
    notRedeemedPrizes: Prize[]; // Adicionando os prêmios não resgatados
    availablePrizes: any[]; // Adicionando availablePrizes aqui
    progression: number;
}

export interface AvailablePrize {
    prizeCode: string;
    prizeVersion: number;
    clientId: string;
    available: boolean;
    available_at: string;
    redeemed: boolean;
    redeemed_at: string | null;
    prize: Prize;
}

export interface Prize {
    prizeCode: string;
    prizeName: string;
    prizeImage: string;
    percentage: number;
}

export async function fetchPersonalData(): Promise<PersonalData> {
    try {
        const response = await api.get('/clients/specific');
        const { data } = response;
        console.log(data);

        // Extraindo todos os prêmios disponíveis
        const availablePrizes = data.availablePrizes || [];

        // Separando os prêmios que foram resgatados e os que estão disponíveis para resgate
        const redeemedPrizes = availablePrizes
            .filter((prize: any) => prize.redeemed === true) // Apenas os que foram resgatados
            .map((prize: any) => ({
                prizeCode: prize.prize.code,
                prizeName: prize.prize.name,
                prizeImage:
                    prize.prize.imageUrl || 'assets/icons/default-image.svg',
                percentage: prize.prize.percentage, // Adicionando o atributo percentage
                redeemed_at: prize.redeemed_at
            }));

        const notRedeemedPrizes = availablePrizes
            .filter((prize: any) => prize.redeemed === false) // Apenas os que ainda não foram resgatados
            .map((prize: any) => ({
                prizeCode: prize.prize.code,
                prizeName: prize.prize.name,
                prizeImage:
                    prize.prize.imageUrl || 'assets/icons/default-image.svg',
                percentage: prize.prize.percentage, // Adicionando o atributo percentage
                available_at: prize.available_at
            }));

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
            avatar: data.avatar,
            redeemedPrizes,
            notRedeemedPrizes, // Adicionando os prêmios não resgatados
            availablePrizes, // Agora incluindo os availablePrizes
            progression: data.progression
        };

        return personalData;
    } catch (error) {
        console.log('Erro ao buscar dados pessoais', error);
        throw error;
    }
}
