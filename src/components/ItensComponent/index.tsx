import * as S from './styles';

interface Props {
    children: React.ReactNode;
}

export const ItensComponent: React.FC<Props> = ({ children }) => {
    return (
        <S.Wrapper>
            <S.Text>Favoritos</S.Text>
            {children}
        </S.Wrapper>
    );
};

export default ItensComponent;
