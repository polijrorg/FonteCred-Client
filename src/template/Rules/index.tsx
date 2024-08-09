import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import RuleList from 'components/RuleList';
import { useState } from 'react';
import SupportBanner from 'components/SupportBanner';
import * as S from './styles';

const RulesTemplate = () => {
    const [rules] = useState([
        {
            id: '1',
            title: '1?',
            content: 'testestetstfwteaftsadtfsdt'
        }
    ]);
    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background2>
                    <S.Background>
                        <S.SubtitleDiv>
                            <S.Subtitle>
                                Bem vindo de volta, Fonte Cred!
                            </S.Subtitle>
                        </S.SubtitleDiv>
                        <RuleList rules={rules} />
                    </S.Background>
                    <S.RightDiv>
                        <S.Banner2 src="assets/images/banner1.svg" />
                        <SupportBanner
                            title="Queremos ouvir você!
                            Nos conte sobre os
                            prêmios que quer ganhar "
                            email="contato@fontecred.com.br"
                            phone="0800 885 5000"
                            cellphone="(11) 97581-8262"
                            ouvidoria="ouvidoria@fontecred.com.br"
                        />
                    </S.RightDiv>
                </S.Background2>
            </S.Wrapper>
        </S.Container>
    );
};

export default RulesTemplate;
