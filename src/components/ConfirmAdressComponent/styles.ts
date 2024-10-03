import styled from 'styled-components';

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* Certifica que ele fique à frente de todo o conteúdo */
`;

export const ModalContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px; /* Definir largura adequada para o modal */
    max-width: 90vw; /* Para garantir que ele se adapte a telas menores */
    max-height: 90vh; /* Limita a altura do modal a 90% da altura da viewport */
    overflow-y: auto; /* Adiciona scroll vertical quando necessário */
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Title = styled.h2`
    font-size: 18px;
    color: #333;
`;

export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
`;

export const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    font-size: 14px;
    color: #333;
`;

export const Input = styled.input`
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
    width: 100%;
`;

export const ConfirmButton = styled.button`
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    width: 100%; /* Deixar o botão com largura total */

    &:hover {
        background-color: #45a049;
    }
`;
