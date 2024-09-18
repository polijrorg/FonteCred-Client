import styled from 'styled-components';

export const PrimaryDiv = styled.div`
    width: 100%;
    height: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

export const Container = styled.div`
    width: 100%;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

export const BarFill = styled.div`
    height: 100%;
    background-color: #00ff00;
    border-radius: 10px 0 0 10px;
    transition: width 0.4s ease;
`;

export const Percentage = styled.text`
    font-family: Poppins Bold;
    font-weight: bold;
    font-size: 40px;
    margin-left: 10px;
    color: #000;
`;

export const Symbol = styled.text`
    font-family: Poppins Bold;
    font-weight: bold;
    font-size: 20px;
`;
