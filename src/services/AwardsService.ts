import { AxiosResponse } from 'axios';
import api from './api';

export interface Award {
    id: string;
    name: string;
    percentage: number;
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
}
