import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
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
                        <S.ExampleImg2 src="assets/images/exemplo3.png" />
                    </S.InfoBigWrapper>
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default HomeTemplate;
