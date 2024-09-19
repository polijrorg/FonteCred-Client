/* eslint-disable no-console */
import React from 'react';
import * as S from './styles';

interface ItemCardProps {
    item: {
        code: string; // Usando 'code' agora
        name: string;
        percentage: number;
    };
    onClick: () => void; // Função chamada ao clicar no card
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onClick }) => {
    console.log('ItemCard item:', item); // Verifica se o 'code' está sendo passado corretamente
    return (
        <S.Card onClick={onClick}>
            <S.Content>
                <S.Image src="assets/images/luva.jpg" />
            </S.Content>
            <S.Footer>
                <S.ItemName>{item.name}</S.ItemName>
                <S.Points>
                    Porcentagem: <span>{item.percentage}%</span>
                </S.Points>
            </S.Footer>
        </S.Card>
    );
};

export default ItemCard;
