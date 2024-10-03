// avatarSelectionStyles.ts
import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 600px;
    text-align: center;
    position: relative;
`;

export const Title = styled.h2`
    font-family: Inter Bold;
    margin-bottom: 20px;
`;

export const AvatarsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

export const AvatarImage = styled.img<{ selected: boolean }>`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: ${({ selected }) =>
        selected
            ? `3px solid ${defaultTheme.colors.primary.main}`
            : '3px solid transparent'};
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

export const ConfirmButton = styled.button`
    background: ${defaultTheme.colors.primary.main};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: Inter Bold;
    margin-top: 10px;

    &:hover {
        background: ${defaultTheme.colors.primary.dark};
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
`;
