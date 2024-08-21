/* eslint-disable class-methods-use-this */
import { AxiosResponse } from 'axios';
import api from './api';

export interface RulesList {
    id: string;
    policyName: string;
    policyDescription: string;
}

export default class RulesServices {
    async getRules(): Promise<RulesList[]> {
        const response: AxiosResponse<RulesList[]> = await api.get(
            './policies'
        );
        return response.data;
    }
}
