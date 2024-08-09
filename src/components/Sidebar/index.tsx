import React, { useState } from 'react';
import * as S from './styles';

const Sidebar: React.FC = () => {
    const [activePage, setActivePage] = useState<string>('Home');

    const handleNavigation = (page: string) => {
        setActivePage(page);
        if (page === 'Home') {
            window.location.href = 'http://localhost:3000';
        } else if (page === 'Clientes') {
            window.location.href = 'http://localhost:3000/ClientList';
        } else if (page === 'Awards') {
            window.location.href = 'http://localhost:3000/Awards';
        } else if (page === 'ClientInfo') {
            window.location.href = 'http://localhost:3000/ClientInfo';
        } else if (page === 'Rules') {
            window.location.href = 'http://localhost:3000/Rules';
        }
    };

    return (
        <S.Wrapper>
            <S.MniWrapper onClick={() => handleNavigation('Home')}>
                <S.Symbol src="assets/icons/HomeSymbol.svg" />
                <S.PageTitle isActive={activePage === 'Home'}>Home</S.PageTitle>
            </S.MniWrapper>
            <S.MniWrapper onClick={() => handleNavigation('Clientes')}>
                <S.Symbol src="assets/icons/PranchetaSymbol.svg" />
                <S.PageTitle isActive={activePage === 'Clientes'}>
                    Regras de pontuação
                </S.PageTitle>
            </S.MniWrapper>
        </S.Wrapper>
    );
};

export default Sidebar;
