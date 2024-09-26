import { AxiosResponse } from 'axios';
import api from './api';

export interface RedeemData {
    prizeCode: string;
    prizeVersion: number;
}

export interface PhysicalRedeemData {
    prizeCode: string;
    prizeVersion: number;
    selectedOptions: { optionId: string; valueId: string }[];
}

export default class RedeemService {
    static async redeemPrize(data: RedeemData): Promise<void> {
        const response: AxiosResponse<void> = await api.post(
            '/prizes/redeem/coupon',
            data
        );
        return response.data;
    }

    static async redeemPhysicalPrize(data: PhysicalRedeemData): Promise<void> {
        const response: AxiosResponse<void> = await api.post(
            '/prizes/redeem/physical',
            data
        );
        return response.data;
    }
}
