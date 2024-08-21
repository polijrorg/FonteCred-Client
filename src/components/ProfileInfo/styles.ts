import styled from 'styled-components';

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
`;

export const Text = styled.text`
    font-family: Inter Regular;
    font-size: 16px;
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
