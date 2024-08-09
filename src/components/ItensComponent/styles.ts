import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Wrapper = styled.div`
    width: 356px;
    /* padding: 10px 20px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: solid 1px grey;
    border-radius: 5px;
    padding: 10px;
`;

export const Text = styled.div`
    font-size: 24px;
    font-weight: 600;
    font-family: Inter Regular;
    color: ${defaultTheme.colors.primary.main};
`;
