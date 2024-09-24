import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Wrapper = styled.div`
    width: 1144px;
    height: 160px;
    padding: 0px 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid grey;
    gap: 5%;
    border-radius: 5px;
`;

export const ExtrButton = styled.div`
    height: 32px;
    width: 300px;
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

export const WrapperAllData = styled.div`
    width: 80%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`;

export const WrapperWithButton = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TextDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

export const Image = styled.img`
    height: 120px;
    width: 120px;
`;

export const Text1 = styled.text`
    font-family: Inter Regular;
    font-size: 24px;
    font-weight: bold;
`;

export const Text2 = styled.text`
    font-family: Inter Regular;
    font-size: 16px;
    margin-top: 15px;
`;

export const EditIcon = styled.img`
    height: 32px;
    width: 32px;

    :hover {
        transition: 0.1s;
        scale: 1.1;
        cursor: pointer;
    }
`;

export const SeeProfileButton = styled.div`
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
