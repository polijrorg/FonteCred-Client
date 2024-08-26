import React from 'react';
import * as S from './styles';

interface ProgressBarProps {
    percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
    return (
        <S.PrimaryDiv>
            <S.Container>
                <S.BarFill style={{ width: `${percentage}%` }} />
            </S.Container>
            <S.Percentage>{percentage}</S.Percentage>
            <S.Symbol>%</S.Symbol>
        </S.PrimaryDiv>
    );
};

export default ProgressBar;
