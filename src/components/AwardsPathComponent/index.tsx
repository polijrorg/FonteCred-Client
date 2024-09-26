/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import AwardsService, { NearbyPrize } from 'services/AwardsService';
import * as S from './styles';

const AwardsPathComponent: React.FC = () => {
    const [nextPrizes, setNextPrizes] = useState<NearbyPrize[]>([]);
    const [previousPrizes, setPreviousPrizes] = useState<NearbyPrize[]>([]);

    useEffect(() => {
        const fetchNearbyPrizes = async () => {
            try {
                const { nextPrizes, previousPrizes } =
                    await AwardsService.getNearbyPrizes();
                setNextPrizes(nextPrizes);
                setPreviousPrizes(previousPrizes);
            } catch (error) {
                console.error('Erro ao carregar prêmios próximos:', error);
            }
        };

        fetchNearbyPrizes();
    }, []);

    const totalPrizes = previousPrizes.length + nextPrizes.length;
    const redeemedCount = previousPrizes.length;
    const progressPercentage = (redeemedCount / totalPrizes) * 100;

    return (
        <S.Container>
            <S.Path>
                <S.ProgressBarContainer>
                    <S.ProgressBar progress={progressPercentage} />
                </S.ProgressBarContainer>

                {previousPrizes.map((prize, index) => (
                    <S.PrizeContainer key={`previous-${index}`} redeemed>
                        <S.PrizeImage
                            src={
                                prize.prizeImage ||
                                'assets/images/defaultPic.jpg'
                            }
                            alt={`Prêmio ${index + 1}`}
                        />
                    </S.PrizeContainer>
                ))}

                {nextPrizes.map((prize, index) => (
                    <S.PrizeContainer
                        key={`next-${index}`}
                        redeemed={prize.percentage >= 100}
                    >
                        <S.PrizeImage
                            src={
                                prize.prizeImage ||
                                'assets/images/defaultPic.jpg'
                            }
                            alt={`Prêmio ${index + 1}`}
                        />
                    </S.PrizeContainer>
                ))}
            </S.Path>
        </S.Container>
    );
};

export default AwardsPathComponent;
