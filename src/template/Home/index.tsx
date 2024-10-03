/* eslint-disable no-console */
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import ItensComponent from 'components/ItensComponent';
import ReedemComponent from 'components/ReedemComponent';
import ProfielProgressCard from 'components/ProfileProgressCard';
import { useEffect, useState } from 'react';
import { fetchPersonalData, Prize } from 'services/ProfileService';
import * as S from './styles';

const handleClick = () => {
    window.location.href = 'http://localhost:3000/Rules';
};

const handleClick2 = () => {
    window.location.href = 'http://localhost:3000/Awards';
};

const HomeTemplate = () => {
    const [firtsName, setFirstName] = useState('');
    const [loading, setLoading] = useState(true);
    const [notRedeemedPrizes, setNotRedeemedPrizes] = useState<Prize[]>([]);

    useEffect(() => {
        const loadPersonalData = async () => {
            try {
                const data = await fetchPersonalData();
                setNotRedeemedPrizes(data.notRedeemedPrizes);
                setFirstName(data.name.split(' ')[0]); // Atualiza o nome do cliente
            } catch (error) {
                console.error('Erro ao carregar prêmios a resgatar', error);
            } finally {
                setLoading(false);
            }
        };
        loadPersonalData();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }
    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.SubtitleDiv>
                        <S.Subtitle>
                            Bem vindo de volta, {firtsName}!
                        </S.Subtitle>
                        <S.RulesButton onClick={handleClick}>
                            VER REGRAS DE PONTUAÇÃO
                        </S.RulesButton>
                    </S.SubtitleDiv>
                    <ProfielProgressCard />
                    <S.InfoBigWrapper>
                        <S.Banner src="assets/images/banner1.svg" />
                        <ItensComponent Title="Prêmios a Resgatar">
                            {notRedeemedPrizes.length > 0 ? (
                                notRedeemedPrizes.map((prize) => (
                                    <ReedemComponent
                                        key={prize.prizeCode}
                                        name={prize.prizeName}
                                        imageUrl={prize.prizeImage}
                                        button={handleClick2}
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
