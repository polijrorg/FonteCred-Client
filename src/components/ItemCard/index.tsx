import React from 'react';
import * as S from './styles';

interface ItemCardProps {
    item: {
        id: string;
        name: string;
        percentage: number;
    };
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <S.Card>
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
