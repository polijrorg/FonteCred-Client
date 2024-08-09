import * as S from './styles';

interface Props {
    children: React.ReactNode;
    Title: string;
}

export const ItensComponent: React.FC<Props> = ({ children, Title }) => {
    return (
        <S.Wrapper>
            <S.Text>{Title}</S.Text>
            {children}
        </S.Wrapper>
    );
};

export default ItensComponent;
