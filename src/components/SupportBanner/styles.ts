import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Wrapper = styled.div`
    padding: 15px;
    width: 370px;
    display: flex;
    flex-direction: column;
    background-color: ${defaultTheme.colors.white};
`;

export const MniWrapper = styled.div`
    height: 41px;
    width: 220px;
    background-color: ${defaultTheme.colors.white};
    padding-left: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    :hover {
        transition: 0.3s;
        scale: 1.05;
        cursor: pointer;
    }
`;

export const PageTitle = styled.text`
    font-family: Inter Bold;
    font-size: 24px;
    color: ${defaultTheme.colors.black};
`;

export const SubTitle = styled.text`
    font-family: Inter Bold;
    margin-top: 15px;
    font-size: 16px;
    color: ${defaultTheme.colors.black};
`;

export const Text = styled.text`
    font-family: Inter Regular;
    margin-top: 5px;
    font-size: 16px;
    color: ${defaultTheme.colors.black};
`;
