import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const EmptyMessage = styled.div`
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: ${defaultTheme.colors.black};
    padding: 20px;
`;
