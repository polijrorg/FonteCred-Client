/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import ProgressBar from 'components/ProgressBarComponent';
import { fetchPersonalData } from 'services/ProfileService';
import * as S from './styles';

const handleClick = () => {
    window.location.href = 'http://localhost:3000/Profile';
};

const avatarImages = [
    'assets/icons/foto1.svg',
    'assets/icons/foto2.svg',
    'assets/icons/foto3.svg',
    'assets/icons/foto4.svg',
    'assets/icons/foto5.svg',
    'assets/icons/foto6.svg'
];

export const ProfielProgressCard: React.FC = () => {
    const [progression, setProgression] = useState(0);
    const [avatar, setAvatar] = useState(avatarImages[0]);
    const loadPersonalData = async () => {
        try {
            const data = await fetchPersonalData();
            const avatarValue = data.avatar !== undefined ? data.avatar : 0;
            setAvatar(avatarImages[avatarValue]);
            setProgression(data.progression);
        } catch (error) {
            console.error('Erro ao carregar dados do cliente', error);
        }
    };

    useEffect(() => {
        loadPersonalData();
    }, []);
    return (
        <S.Wrapper>
            <S.Image src={avatar} />
            <S.WrapperAllData>
                <S.WrapperWithButton>
                    <S.TextDiv>
                        <S.Text1>
                            Parabéns! Você está em dia com suas parcelas!
                        </S.Text1>
                        <S.Text2>
                            Pague mais dois meses no prazo e libere o próximo
                            prêmio!
                        </S.Text2>
                    </S.TextDiv>
                    <S.SeeProfileButton onClick={handleClick}>
                        VER PERFIL COMPLETO
                    </S.SeeProfileButton>
                </S.WrapperWithButton>
                <ProgressBar percentage={progression} />
            </S.WrapperAllData>
        </S.Wrapper>
    );
};

export default ProfielProgressCard;
