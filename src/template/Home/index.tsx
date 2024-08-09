import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import ItensComponent from 'components/ItensComponent';
import FavoriteItem from 'components/FavoriteItem';
import ReedemComponent from 'components/ReedemComponent';
import * as S from './styles';

const HomeTemplate = () => {
    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.SubtitleDiv>
                        <S.Subtitle>Bem vindo de volta, Fonte Cred!</S.Subtitle>
                        <S.RulesButton>VER REGRAS DE PONTUAÇÃO</S.RulesButton>
                    </S.SubtitleDiv>
                    <S.ExampleImg src="assets/images/exemplo.svg" />
                    <S.ExampleImg src="assets/images/exemplo2.png" />
                    <S.InfoBigWrapper>
                        <ItensComponent Title="Favoritos">
                            <FavoriteItem name="capacete" />
                            <FavoriteItem name="capacete" />
                            <FavoriteItem name="capacete" />
                        </ItensComponent>
                        <S.Banner src="assets/images/banner1.svg" />
                        <ItensComponent Title="Prêmios a Resgatar">
                            <ReedemComponent name="luvinhas" />
                            <ReedemComponent name="luvinhas" />
                            <ReedemComponent name="luvinhas" />
                        </ItensComponent>
                    </S.InfoBigWrapper>
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default HomeTemplate;
