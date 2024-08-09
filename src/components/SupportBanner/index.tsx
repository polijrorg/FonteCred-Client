import React from 'react';
import * as S from './styles';

interface Props {
    title: string;
    email: string;
    phone: string;
    cellphone: string;
    ouvidoria: string;
}

const SupportBanner: React.FC<Props> = ({
    title,
    email,
    phone,
    cellphone,
    ouvidoria
}) => {
    return (
        <S.Wrapper>
            <S.PageTitle>{title}</S.PageTitle>
            <S.SubTitle>E-mail</S.SubTitle>
            <S.Text>{email}</S.Text>
            <S.SubTitle>Telefone</S.SubTitle>
            <S.Text>{phone}</S.Text>
            <S.Text>{cellphone}</S.Text>
            <S.SubTitle>Ouvidoria</S.SubTitle>
            <S.Text>{ouvidoria}</S.Text>
        </S.Wrapper>
    );
};

export default SupportBanner;
