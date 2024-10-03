import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';

const Sidebar: React.FC = () => {
    const [activePage, setActivePage] = useState<string>('Home');
    const router = useRouter();

    const handleNavigation = (page: string) => {
        setActivePage(page);
        if (page === 'Home') {
            router.push('/');
        } else if (page === 'Clientes') {
            router.push('/ClientList');
        } else if (page === 'Awards') {
            router.push('/Awards');
        } else if (page === 'Profile') {
            router.push('/Profile');
        } else if (page === 'Rules') {
            router.push('/Rules');
        }
    };

    return (
        <S.Wrapper>
            <S.MniWrapper onClick={() => handleNavigation('Home')}>
                <S.Symbol src="assets/icons/HomeSymbol.svg" />
                <S.PageTitle isActive={activePage === 'Home'}>Home</S.PageTitle>
            </S.MniWrapper>
            <S.MniWrapper onClick={() => handleNavigation('Rules')}>
                <S.Symbol src="assets/icons/regras.svg" />
                <S.PageTitle isActive={activePage === 'Rules'}>
                    Regras de pontuação
                </S.PageTitle>
            </S.MniWrapper>
            <S.MniWrapper onClick={() => handleNavigation('Awards')}>
                <S.Symbol src="assets/icons/gift.png" />
                <S.PageTitle isActive={activePage === 'Awards'}>
                    Prêmios
                </S.PageTitle>
            </S.MniWrapper>
            <S.MniWrapper onClick={() => handleNavigation('Profile')}>
                <S.Symbol src="assets/icons/perfil.png" />
                <S.PageTitle isActive={activePage === 'Profile'}>
                    Meu Perfil
                </S.PageTitle>
            </S.MniWrapper>
        </S.Wrapper>
    );
};

export default Sidebar;
