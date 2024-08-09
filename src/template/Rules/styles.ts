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

export const LilCardsWrapper = styled.div`
    height: 131px;
    width: 1172px;
    margin-top: 30px;

    display: flex;
    flex-direction: row;
    gap: 12px;

    align-items: center;
    justify-content: center;
`;

export const BigCardsWrapper = styled.div`
    width: 100%;
    padding: 75px 0px;
    gap: 36px;

    display: flex;
    flex-wrap: wrap;
`;

export const ArrowButton = styled.button`
    position: absolute;
    right: 20px; /* Adjust based on your layout */
    top: 50%; /* Vertically centered */
    transform: translateY(-50%);
    background: white;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;

    &:hover {
        background: ${defaultTheme.colors.white};
    }
`;

export const RulesButton = styled.div`
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

export const InfoBigWrapper = styled.div`
    height: 420px;
    gap: 30px;
    width: 1144px;
    margin-left: 2px;
    margin-top: 15px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

// exemplo:

export const ExampleImg = styled.img`
    height: 160px;
    width: 1144px;

    margin-top: 15px;
    margin-left: 12px;
`;

export const ExampleImg2 = styled.img`
    height: 420px;
    width: 1144px;
`;

export const Banner = styled.img`
    height: 418px;
    width: 356px;
`;

export const RightDiv = styled.div`
    width: 370px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Banner2 = styled.img`
    width: 370px;
    height: 425px;
`;
