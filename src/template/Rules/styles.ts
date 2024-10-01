import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;

    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Background = styled.div`
    width: 60%;
    background-color: ${defaultTheme.colors.secondary.light3};
    padding: 20px;
`;

export const Background2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${defaultTheme.colors.secondary.light3};
    padding: 20px;
`;

export const SubtitleDiv = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
`;

export const Subtitle = styled.text`
    font-family: Inter Light;
    font-size: 24px;

    color: ${defaultTheme.colors.black};
`;

export const RightDiv = styled.div`
    width: 370px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;

export const Banner2 = styled.img`
    width: 370px;
    height: 425px;
`;

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

// Adicione as seguintes estilizações:

export const LoadingMessage = styled.div`
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: ${defaultTheme.colors.primary.main};
    padding: 20px;
`;

export const ErrorMessage = styled.div`
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 20px;
`;

export const EmptyMessage = styled.div`
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: ${defaultTheme.colors.black};
    padding: 20px;
`;

export const Qbutton = styled.div`
    height: 32px;
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${defaultTheme.colors.primary.main};
    font-family: Inter Bold;
    font-size: 14px;

    border-radius: 8px;
    border: 1px solid ${defaultTheme.colors.primary.main};

    :hover {
        transition: 100ms;
        scale: 1.1;
        cursor: pointer;
    }
`;
