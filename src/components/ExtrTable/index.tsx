/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { fetchPersonalData } from 'services/ProfileService';
import * as S from './styles';

interface TransactionItem {
    date: string;
    description: string;
    action: string;
    timePercentage: string;
}

interface Props {
    Close: () => void;
}

const ExtrTableComponent: React.FC<Props> = ({ Close }) => {
    const [searchQuery] = useState('');
    const [transactions, setTransactions] = useState<TransactionItem[]>([]);

    const loadTransactions = async () => {
        try {
            const data = await fetchPersonalData();

            const allPrizes = data.availablePrizes;

            const formattedTransactions = allPrizes.map((prize: any) => {
                const isRedeemed = prize.redeemed === true;

                const date = isRedeemed
                    ? prize.redeemed_at
                        ? new Date(prize.redeemed_at).toLocaleDateString(
                              'pt-BR'
                          )
                        : 'Data Inválida'
                    : prize.available_at
                    ? new Date(prize.available_at).toLocaleDateString('pt-BR')
                    : 'Data Inválida';

                const action = isRedeemed ? 'Resgatado' : 'Disponível';
                return {
                    date,
                    description: prize.prize.name,
                    action,
                    timePercentage: `${prize.prize.percentage}%`
                };
            });

            setTransactions(formattedTransactions);
        } catch (error) {
            console.error('Erro ao carregar transações', error);
        }
    };

    useEffect(() => {
        loadTransactions();
    }, []);

    const filteredTransactions = transactions
        .filter((item) =>
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort(
            (a, b) =>
                parseFloat(b.timePercentage) - parseFloat(a.timePercentage)
        );

    return (
        <S.Background>
            <S.Table>
                <thead>
                    <tr>
                        <S.Th>Data de Movimentação</S.Th>
                        <S.Th>Nome do Item</S.Th>
                        <S.Th>Ação</S.Th>
                        <S.Th>Porcentagem Paga</S.Th>
                        <S.CloseIcon
                            src="assets/icons/closeIcon.svg"
                            onClick={Close}
                        />
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map((item, index) => (
                        <S.Tr
                            key={index}
                            style={{
                                backgroundColor:
                                    item.action === 'Resgatado'
                                        ? '#90EE90'
                                        : 'transparent',
                                color:
                                    item.action === 'Resgatado'
                                        ? 'green'
                                        : 'black'
                            }}
                        >
                            <S.Td>{item.date}</S.Td>
                            <S.Td>{item.description}</S.Td>
                            <S.Td>{item.action}</S.Td>
                            <S.Td>{item.timePercentage}</S.Td>
                        </S.Tr>
                    ))}
                </tbody>
            </S.Table>
        </S.Background>
    );
};

export default ExtrTableComponent;
