/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import * as S from './styles';

interface TransactionItem {
    date: string;
    description: string;
    action: string;
    points: number;
    newBalance: number;
}

interface Props {
    Close: () => void;
}

const initialTransactions: TransactionItem[] = [
    {
        date: '01/02/2024',
        description: 'Luva',
        action: 'Resgate',
        points: 100,
        newBalance: 0
    },
    {
        date: '01/01/2024',
        description: 'Pagamento Parcela',
        action: 'Premiação',
        points: 10,
        newBalance: 100
    },
    {
        date: '01/01/2024',
        description: 'Missão',
        action: 'Premiação',
        points: 10,
        newBalance: 90
    }
    // Adicione mais itens conforme necessário
];

const ExtrTableComponent: React.FC<Props> = ({ Close }) => {
    const [searchQuery] = useState('');
    const [transactions] = useState(initialTransactions);

    const filteredTransactions = transactions.filter((item) =>
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <S.Background>
            <S.Table>
                <thead>
                    <tr>
                        <S.Th>Data de Movimentação</S.Th>
                        <S.Th>Descrição</S.Th>
                        <S.Th>Ação</S.Th>
                        <S.Th>Pontos</S.Th>
                        <S.Th>Novo Saldo</S.Th>
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
                                    item.action === 'Resgate'
                                        ? '#90EE90'
                                        : 'transparent'
                            }}
                        >
                            <S.Td>{item.date}</S.Td>
                            <S.Td>{item.description}</S.Td>
                            <S.Td>{item.action}</S.Td>
                            <S.Td>{item.points}</S.Td>
                            <S.Td>{item.newBalance}</S.Td>
                        </S.Tr>
                    ))}
                </tbody>
            </S.Table>
        </S.Background>
    );
};

export default ExtrTableComponent;
