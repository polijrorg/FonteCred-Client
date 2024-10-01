import React from 'react';
import * as S from './styles';

interface Props {
    name: string;
    imageUrl: string;
    button: () => void;
}

export const ReedemComponent: React.FC<Props> = ({
    name,
    imageUrl,
    button
}) => {
    return (
        <S.Wrapper>
            <S.Image src={imageUrl} alt={name} />
            <S.Text>{name}</S.Text>
            <S.Button onClick={button}>Resgatar</S.Button>
        </S.Wrapper>
    );
};

export default ReedemComponent;
