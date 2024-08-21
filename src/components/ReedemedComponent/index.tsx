import React from 'react';
import * as S from './styles';

interface Props {
    name: string;
}

export const ReedemComponent: React.FC<Props> = ({ name }) => {
    return (
        <S.Wrapper>
            <S.Image src="assets/icons/circulocinza.svg" />
            <S.Text>{name}</S.Text>
            <S.Button>Resgatado</S.Button>
        </S.Wrapper>
    );
};

export default ReedemComponent;
