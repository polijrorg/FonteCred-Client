/* eslint-disable no-console */
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { useState, useEffect } from 'react';
import ItemCard from 'components/ItemCard';
import Searchbar from 'components/Searchbar';
import AwardsService, { Award } from 'services/AwardsService';
import OpenedAwardService from 'services/OpenedAwardService';
import ProductCard from 'components/OpenedAwardCard';
import AwardsPathComponent from 'components/AwardsPathComponent';
import * as S from './styles';

const AwardsTemplate: React.FC = () => {
    const [items, setItems] = useState<Award[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedAward, setSelectedAward] = useState<{
        name: string;
        description: string;
        percentage: number;
        sizes: { id: string; value: string; optionId: string }[]; // Ajustar o tipo aqui
        colors: { id: string; value: string; optionId: string }[]; // Ajustar o tipo aqui
        isCoupon: boolean;
        prizeCode: string;
        imageUrl: string;
    } | null>(null);

    useEffect(() => {
        const fetchAwards = async () => {
            try {
                const data = await AwardsService.getAwards();
                setItems(data);
            } catch (err) {
                setError('Erro ao carregar os prêmios');
            } finally {
                setLoading(false);
            }
        };

        fetchAwards();
    }, []);

    const handleItemClick = async (code: string) => {
        if (!code) {
            console.error('Código inválido para o prêmio.');
            return;
        }

        try {
            const awardData = await OpenedAwardService.getOpenedAwardById(code);
            console.log('Award data:', awardData);

            const sizes =
                awardData.options
                    .find((option) => option.title.toLowerCase() === 'tamanho')
                    ?.values.filter((value) => value.isAvailable)
                    .map((value) => ({
                        id: value.id, // Adicionando o ID do tamanho
                        value: value.value,
                        optionId:
                            awardData.options.find(
                                (opt) => opt.title.toLowerCase() === 'tamanho'
                            )?.id || '' // Recuperando o ID da opção de tamanho
                    })) || [];

            const colors =
                awardData.options
                    .find((option) => option.title.toLowerCase() === 'cor')
                    ?.values.filter((value) => value.isAvailable)
                    .map((value) => ({
                        id: value.id, // Adicionando o ID da cor
                        value: value.value,
                        optionId:
                            awardData.options.find(
                                (opt) => opt.title.toLowerCase() === 'cor'
                            )?.id || '' // Recuperando o ID da opção de cor
                    })) || [];

            const mappedProduct = {
                name: awardData.name,
                description: awardData.description,
                percentage: awardData.percentage,
                sizes,
                colors,
                isCoupon: awardData.isCoupon,
                prizeCode: awardData.code,
                imageUrl: awardData.imageUrl
            };

            setSelectedAward(mappedProduct);
        } catch (err) {
            console.error('Erro ao carregar os detalhes do prêmio:', err);
            setError('Erro ao carregar os detalhes do prêmio');
        }
    };

    const closeModal = () => {
        setSelectedAward(null);
    };

    const filteredItems = items
        .filter((data) =>
            data.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => a.percentage - b.percentage);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.SubtitleDiv>
                        <S.Subtitle>Caminho de Prêmios</S.Subtitle>
                    </S.SubtitleDiv>
                    <AwardsPathComponent />
                    <S.SubtitleDiv>
                        <S.Title>Todos os Prêmios</S.Title>
                        <Searchbar onSearch={setSearchQuery} />
                    </S.SubtitleDiv>
                    <S.Grid>
                        {filteredItems.map((data) => {
                            console.log('Data inside map:', data);
                            return (
                                <ItemCard
                                    key={data.code}
                                    item={data}
                                    onClick={() => {
                                        console.log(
                                            'Clicked item code:',
                                            data.code
                                        );
                                        handleItemClick(data.code);
                                    }}
                                />
                            );
                        })}
                    </S.Grid>
                </S.Background>
            </S.Wrapper>
            {selectedAward && (
                <S.ModalBackdrop onClick={closeModal}>
                    <ProductCard product={selectedAward} />
                </S.ModalBackdrop>
            )}
        </S.Container>
    );
};

export default AwardsTemplate;
