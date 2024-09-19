import { AxiosResponse } from 'axios';
import api from './api';

export interface OpenedAward {
    code: string;
    name: string;
    description: string;
    percentage: number;
    isCoupon: boolean;
    options: Array<{
        id: string;
        title: string;
        values: Array<{
            id: string;
            value: string;
            isAvailable: boolean;
        }>;
    }>;
}

export default class OpenedAwardService {
    static async getOpenedAwardById(id: string): Promise<OpenedAward> {
        const response: AxiosResponse<OpenedAward> = await api.get(
            `/prizes/${id}`
        );
        return response.data;
    }
}
