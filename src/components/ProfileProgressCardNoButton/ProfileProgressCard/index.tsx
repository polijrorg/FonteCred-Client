import React from 'react';
import ProgressBar from 'components/ProgressBarComponent';
import * as S from './styles';

export const ProfielProgressCardNoButton: React.FC = () => {
    return (
        <S.Wrapper>
            <S.Image src="assets/images/profilepic2.svg" />
            <S.WrapperAllData>
                <S.WrapperWithButton>
                    <S.TextDiv>
                        <S.Text1>
                            Parabéns! Você está em dia com suas parcelas!
                        </S.Text1>
                        <S.Text2>
                            Pague mais dois meses no prazo e libere o próximo
                            prêmio!
                        </S.Text2>
                    </S.TextDiv>
                </S.WrapperWithButton>
                <ProgressBar percentage={50} />
            </S.WrapperAllData>
        </S.Wrapper>
    );
};

export default ProfielProgressCardNoButton;
