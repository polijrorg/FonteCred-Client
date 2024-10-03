import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #f8f9fa;
    width: 100%;
    position: relative;
`;

export const Path = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    height: 100px;
`;

export const ProgressBarContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 5px;
    background-color: #d3d3d3;
    border-radius: 5px;
    z-index: 0;
`;

export const ProgressBar = styled.div<{ progress: number }>`
    height: 100%;
    width: ${({ progress }) => `${progress}%`};
    background-color: #32cd32;
    border-radius: 5px;
    transition: width 0.3s ease;
`;

export const PrizeContainer = styled.div<{ redeemed?: boolean }>`
    width: 80px;
    height: 80px;
    background-color: ${({ redeemed }) => (redeemed ? '#32CD32' : '#ffffff')};
    border: 2px solid ${({ redeemed }) => (redeemed ? '#32CD32' : '#d3d3d3')};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${({ redeemed }) => (redeemed ? '0 0 10px #32CD32' : 'none')};
    transition: background-color 0.3s, border 0.3s;
    z-index: 1; /* Garantir que o card fique acima da barra */
`;

export const PrizeImage = styled.img`
    width: 80%;
    height: 80%;
    object-fit: contain;
    border-radius: 20px;
`;
