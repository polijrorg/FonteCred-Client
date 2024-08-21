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
    width: 100%;
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

export const ExtrButton = styled.div`
    height: 32px;
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${defaultTheme.colors.primary.main};
    font-family: Inter Bold;
    font-size: 14px;
    margin-left: 30px;

    border-radius: 8px;
    border: 1px solid ${defaultTheme.colors.primary.main};

    :hover {
        transition: 100ms;
        scale: 1.05;
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

export const ExampleImg = styled.img`
    height: 160px;
    width: 1144px;

    margin-top: 15px;
    margin-left: 12px;
`;

export const Title = styled.text`
    font-family: Inter Light;
    font-size: 24px;

    color: ${defaultTheme.colors.black};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    width: 100%;
    justify-items: center;
`;

export const ExampleImg2 = styled.img`
    height: 420px;
    width: 1144px;
`;

export const Banner = styled.img`
    height: 418px;
    width: 356px;
`;

export const ExtrDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PtsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${defaultTheme.colors.secondary.light5};
    color: ${defaultTheme.colors.primary.main};
    font-size: 16px;
    padding: 2px;
    border-radius: 16px;
    height: 32px;
    margin-left: 10px;
    font-family: Inter Bold;
`;
