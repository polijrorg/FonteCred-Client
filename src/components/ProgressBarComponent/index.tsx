import React from 'react';
import * as S from './styles';

interface ProgressBarProps {
    percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
    const formattedPercentage = percentage.toFixed(2); // Formata para duas casas decimais

    return (
        <S.PrimaryDiv>
            <S.Container>
                <S.BarFill style={{ width: `${formattedPercentage}%` }} />
            </S.Container>
            <S.Percentage>{formattedPercentage}</S.Percentage>
            <S.Symbol>%</S.Symbol>
        </S.PrimaryDiv>
    );
};

export default ProgressBar;
