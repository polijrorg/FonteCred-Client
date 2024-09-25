/* eslint-disable no-console */
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import ItensComponent from 'components/ItensComponent';
import ReedemComponent from 'components/ReedemComponent';
import ProfielProgressCard from 'components/ProfileProgressCard';
import { useEffect, useState } from 'react';
import { fetchPersonalData, Prize } from 'services/ProfileService';
import * as S from './styles';

const HomeTemplate = () => {
    const [notRedeemedPrizes, setNotRedeemedPrizes] = useState<Prize[]>([]);

    useEffect(() => {
        const loadPersonalData = async () => {
            try {
                const data = await fetchPersonalData();
                setNotRedeemedPrizes(data.notRedeemedPrizes);
            } catch (error) {
                console.error('Erro ao carregar prêmios a resgatar', error);
            }
        };
        loadPersonalData();
    }, []);
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
                    <ProfielProgressCard />
                    <S.ExampleImg src="assets/images/exemplo2.png" />
                    <S.InfoBigWrapper>
                        <S.Banner src="assets/images/banner1.svg" />
                        <ItensComponent Title="Prêmios a Resgatar">
                            {notRedeemedPrizes.length > 0 ? (
                                notRedeemedPrizes.map((prize) => (
                                    <ReedemComponent
                                        key={prize.prizeCode}
                                        name={prize.prizeName}
                                        imageUrl={prize.prizeImage}
                                    />
                                ))
                            ) : (
                                <p>Nenhum prêmio disponível para resgate.</p>
                            )}
                        </ItensComponent>
                    </S.InfoBigWrapper>
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default HomeTemplate;
