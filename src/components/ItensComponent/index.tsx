import React from 'react';
import * as S from './styles';

interface Props {
    children: React.ReactNode;
    Title: string;
}

export const ItensComponent: React.FC<Props> = ({ children, Title }) => {
    // Verifica se children é um array e limita a 3 elementos
    const limitedChildren = React.Children.toArray(children).slice(0, 3);

    return (
        <S.Wrapper>
            <S.Text>{Title}</S.Text>
            {limitedChildren}
        </S.Wrapper>
    );
};

export default ItensComponent;
