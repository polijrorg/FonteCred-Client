/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import * as S from './styles';

const avatarImages = [
    'assets/icons/foto1.svg',
    'assets/icons/foto2.svg',
    'assets/icons/foto3.svg',
    'assets/icons/foto4.svg',
    'assets/icons/foto5.svg',
    'assets/icons/foto6.svg'
];

const AvatarSelectionModal: React.FC<{
    onClose: () => void;
    onSelect: (avatar: string) => void;
}> = ({ onClose, onSelect }) => {
    const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

    const handleSelectAvatar = (avatar: string) => {
        setSelectedAvatar(avatar);
    };

    const handleConfirm = () => {
        if (selectedAvatar) {
            onSelect(selectedAvatar);
            onClose();
        }
    };

    return (
        <S.ModalWrapper>
            <S.ModalContent>
                <S.Title>Escolha seu novo Avatar de Perfil</S.Title>
                <S.AvatarsContainer>
                    {avatarImages.map((avatar, index) => (
                        <S.AvatarImage
                            key={index}
                            src={avatar}
                            selected={selectedAvatar === avatar}
                            onClick={() => handleSelectAvatar(avatar)}
                        />
                    ))}
                </S.AvatarsContainer>
                <S.ConfirmButton onClick={handleConfirm}>
                    CONFIRMAR NOVO AVATAR
                </S.ConfirmButton>
                <S.CloseButton onClick={onClose}>X</S.CloseButton>
            </S.ModalContent>
        </S.ModalWrapper>
    );
};

export default AvatarSelectionModal;
