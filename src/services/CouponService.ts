import { AxiosResponse } from 'axios';
import api from './api';

export interface ClientData {
    progression: number;
    availablePrizes: {
        prizeCode: string;
        couponCode: string | null;
    }[];
}

export default class CouponService {
    static async getClientData(): Promise<ClientData> {
        const response: AxiosResponse<ClientData> = await api.get(
            '/clients/specific'
        );
        return response.data;
    }
}
