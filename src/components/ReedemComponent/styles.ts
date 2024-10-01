import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Wrapper = styled.div`
    width: 356px;
    height: 80px;
    padding: 0px 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid grey;
`;

export const Image = styled.img`
    height: 48px;
    width: 48px;
    border-radius: 24px;
`;

export const Text = styled.text`
    font-family: Inter Regular;
    font-size: 16px;
`;

export const Heart = styled.img`
    height: 32px;
    width: 32px;
`;

export const Button = styled.div`
    height: 24px;
    width: 80px;
    border-radius: 4px;
    padding: 4px 8px;
    background-color: ${defaultTheme.colors.primary.main};
    font-family: Inter Bold;
    font-size: 14px;
    color: ${defaultTheme.colors.white};

    :hover {
        cursor: pointer;
        transition: 0.1s;
        scale: 1.1;
    }
`;
