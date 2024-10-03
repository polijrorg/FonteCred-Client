import { AxiosResponse } from 'axios';
import api from './api';

export interface Award {
    code: string;
    name: string;
    percentage: number;
    imageUrl: string;
    redeemed: boolean;
    isActive: boolean;
}

export interface NearbyPrize {
    name: string;
    prizeCode: string;
    prizeVersion: number;
    prizeImage: string | null;
    percentage: number;
    monthUntil?: number;
    createdAt?: string;
    active: boolean;
    nextPrizes: {
        active: boolean;
    };
    previousPrizes: {
        active: boolean;
    };
}

export default class AwardsService {
    static async getAwards(
        page = 0,
        pageSize = 10,
        rank = 'favoritos',
        order = '9-0'
    ): Promise<Award[]> {
        const response: AxiosResponse<Award[]> = await api.get('/prizes', {
            params: {
                page,
                pageSize,
                rank,
                order
            }
        });
        return response.data;
    }

    static async getNearbyPrizes(): Promise<{
        nextPrizes: NearbyPrize[];
        previousPrizes: NearbyPrize[];
    }> {
        const response: AxiosResponse<{
            nextPrizes: NearbyPrize[];
            previousPrizes: NearbyPrize[];
        }> = await api.get('/prizes/history/nearby');
        return response.data;
    }
}
