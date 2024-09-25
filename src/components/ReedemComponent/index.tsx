import React from 'react';
import * as S from './styles';

interface Props {
    name: string;
    imageUrl: string;
}

export const ReedemComponent: React.FC<Props> = ({ name, imageUrl }) => {
    return (
        <S.Wrapper>
            <S.Image src={imageUrl} alt={name} />
            <S.Text>{name}</S.Text>
            <S.Button>Resgatar</S.Button>
        </S.Wrapper>
    );
};

export default ReedemComponent;
