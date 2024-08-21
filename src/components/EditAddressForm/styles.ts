// EditAddressForm/styles.ts
import styled from 'styled-components';
import { defaultTheme } from 'styles/default.theme';

export const Container = styled.div`
    padding: 20px;
    background-color: ${defaultTheme.colors.white};
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 30%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 10px;
    color: #333;
`;

export const Input = styled.input`
    padding: 2px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: ${defaultTheme.colors.secondary.light4};
    font-size: 10px;
`;

export const Button = styled.button`
    padding: 5px 10px;
    background-color: ${defaultTheme.colors.primary.main};
    color: white;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
        scale: 1.05;
        transition: 0.1s;
        cursor: pointer;
    }
`;
