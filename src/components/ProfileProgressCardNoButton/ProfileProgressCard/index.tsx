/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import ProgressBar from 'components/ProgressBarComponent';
import AvatarSelectionModal from 'components/AvatarSelectionModal';
import { fetchPersonalData } from 'services/ProfileService';
import { updateProfile } from 'services/UpdateProfileService';
import * as S from './styles';

// Array de avatares correspondendo aos valores do avatar (0 a 5)
const avatarImages = [
    'assets/icons/foto1.svg',
    'assets/icons/foto2.svg',
    'assets/icons/foto3.svg',
    'assets/icons/foto4.svg',
    'assets/icons/foto5.svg',
    'assets/icons/foto6.svg'
];

export const ProfielProgressCardNoButton: React.FC = () => {
    const [progression, setProgression] = useState(0);
    const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
    const [avatar, setAvatar] = useState(avatarImages[0]); // Definindo a imagem padrão como foto1

    const handleOpenModal = () => setIsAvatarModalOpen(true);
    const handleCloseModal = () => setIsAvatarModalOpen(false);

    const handleAvatarSelect = async (selectedAvatar: string) => {
        // Obtendo o índice correspondente à imagem selecionada
        const avatarIndex = avatarImages.indexOf(selectedAvatar);

        if (avatarIndex === -1) {
            console.error('Índice de avatar inválido.');
            return;
        }

        try {
            // Enviando o valor numérico para o PATCH
            await updateProfile({ avatar: avatarIndex });
            setAvatar(selectedAvatar); // Atualizando o avatar selecionado na interface
        } catch (error) {
            console.error('Erro ao atualizar avatar', error);
        }
    };

    const handleClick2 = () => {
        window.location.href = 'http://localhost:3000/Awards';
    };

    const loadPersonalData = async () => {
        try {
            const data = await fetchPersonalData();
            const avatarValue = data.avatar !== undefined ? data.avatar : 0;
            setAvatar(avatarImages[avatarValue]); // Ajustando a imagem com base no valor do avatar
            setProgression(data.progression);
        } catch (error) {
            console.error('Erro ao carregar dados do cliente', error);
        }
    };

    useEffect(() => {
        loadPersonalData();
    }, []);

    return (
        <>
            <S.Wrapper>
                <S.Image src={avatar} />
                <S.WrapperAllData>
                    <S.WrapperWithButton>
                        <S.TextDiv>
                            <S.Text1>
                                Parabéns! Você está em dia com suas parcelas!
                            </S.Text1>
                            <S.Text2>
                                Pague mais dois meses no prazo e libere o
                                próximo prêmio!
                            </S.Text2>
                        </S.TextDiv>
                        <S.ExtrButton onClick={handleOpenModal}>
                            EDITAR AVATAR DE PERFIL
                        </S.ExtrButton>
                    </S.WrapperWithButton>
                    <S.ProgressBarContainer>
                        <ProgressBar percentage={progression} />
                        <S.ExtrButton onClick={handleClick2}>
                            CAMINHO DE PRÊMIOS
                        </S.ExtrButton>
                    </S.ProgressBarContainer>
                </S.WrapperAllData>
            </S.Wrapper>
            {isAvatarModalOpen && (
                <AvatarSelectionModal
                    onClose={handleCloseModal}
                    onSelect={handleAvatarSelect}
                />
            )}
        </>
    );
};

export default ProfielProgressCardNoButton;
