/* eslint-disable no-console */
import React from 'react';
import * as S from './styles';

interface ItemCardProps {
    item: {
        code: string;
        name: string;
        percentage: number;
        imageUrl: string;
    };
    onClick: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onClick }) => {
    console.log('ItemCard item:', item);
    return (
        <S.Card onClick={onClick}>
            <S.Content>
                <S.Image
                    src={item.imageUrl || 'assets/images/defautlPic.jpg'}
                    alt={item.name}
                />
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
