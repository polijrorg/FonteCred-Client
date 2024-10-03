import React from 'react';
import * as S from './styles';

interface Props {
    name: string;
}

export const FavoriteItem: React.FC<Props> = ({ name }) => {
    return (
        <S.Wrapper>
            <S.Image src="assets/icons/circulocinza.svg" />
            <S.Text>{name}</S.Text>
            <S.Heart src="assets/icons/coracao.svg" />
        </S.Wrapper>
    );
};

export default FavoriteItem;
