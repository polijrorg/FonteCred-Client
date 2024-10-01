import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 20px;
`;

export const ColorButton = styled.button<{ selected: boolean }>`
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    background-color: ${(props) => (props.selected ? '#4caf50' : '#fff')};
    color: ${(props) => (props.selected ? '#fff' : '#333')};
    border: ${(props) =>
        props.selected ? '2px solid #4caf50' : '1px solid #ccc'};
    border-radius: 5px;
`;

export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 10px;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const ProductName = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: #333;
`;

export const Description = styled.p`
    font-size: 14px;
    color: #777;
`;

export const Points = styled.div`
    margin-top: 10px;
    font-size: 14px;
    color: #333;
`;

export const SizeButton = styled.button<{ selected: boolean }>`
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    background-color: ${(props) => (props.selected ? '#4caf50' : '#fff')};
    color: ${(props) => (props.selected ? '#fff' : '#333')};
    border: ${(props) =>
        props.selected ? '2px solid #4caf50' : '1px solid #ccc'};
    border-radius: 5px;
`;

export const RedeemButton = styled.button`
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 15px;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #45a049;
    }
`;

export const Colors = styled.div`
    margin-top: 15px;
`;

export const ColorOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Sizes = styled.div`
    margin-top: 15px;
`;

export const SizeOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const CouponCard = styled.div`
    width: 350px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const CouponHeader = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    color: #ff6b00;
    margin-bottom: 10px;
`;

export const CouponTitle = styled.h3`
    margin: 0;
`;

export const CouponDescription = styled.p`
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
    text-align: center;
`;

export const CouponCopySuccess = styled.div`
    background-color: #e0ffe0;
    color: #4caf50;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 14px;
`;

export const CouponButton = styled.button`
    padding: 10px 20px;
    background-color: #ff6b00;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;

    &:hover {
        background-color: #ff5500;
    }
`;

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
    z-index: 999;
`;

export const ModalContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    max-width: 90vw;
`;

export const LoadingMessage = styled.text`
    font-size: 18px;
    color: ${defaultTheme.colors.primary.main};
    padding: 20px;
`;

export const ErrorMessage = styled.text`
    font-size: 18px;
    padding: 20px;
`;

export const CouponCodeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px; /* Espaço entre o código e o botão */
`;

export const CopyButton = styled.button`
    padding: 4px 8px;
    background-color: #4caf50; /* Cor de fundo */
    color: white; /* Cor do texto */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #45a049; /* Cor de fundo ao passar o mouse */
    }
`;
