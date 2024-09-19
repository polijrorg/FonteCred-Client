/* eslint-disable no-console */
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { useState, useEffect } from 'react';
import ItemCard from 'components/ItemCard';
import Searchbar from 'components/Searchbar';
import AwardsService, { Award } from 'services/AwardsService';
import OpenedAwardService from 'services/OpenedAwardService';
import ProductCard from 'components/OpenedAwardCard';
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
        sizes: string[];
        colors: string[]; // Adicionamos as cores aqui
        isCoupon: boolean;
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
            console.log('Award data:', awardData); // Verifica os dados recebidos

            // Extrair os tamanhos do campo options
            const sizes =
                awardData.options
                    .find((option) => option.title.toLowerCase() === 'tamanho')
                    ?.values.filter((value) => value.isAvailable)
                    .map((value) => value.value) || [];

            // Extrair as cores do campo options
            const colors =
                awardData.options
                    .find((option) => option.title.toLowerCase() === 'cor')
                    ?.values.filter((value) => value.isAvailable)
                    .map((value) => value.value) || [];

            // Certifique-se de incluir o isCoupon
            const mappedProduct = {
                name: awardData.name,
                description: awardData.description,
                percentage: awardData.percentage,
                sizes,
                colors,
                isCoupon: awardData.isCoupon // Inclua isCoupon aqui
            };

            setSelectedAward(mappedProduct); // Exibe o modal com os detalhes do prêmio
        } catch (err) {
            console.error('Erro ao carregar os detalhes do prêmio:', err);
            setError('Erro ao carregar os detalhes do prêmio');
        }
    };

    const closeModal = () => {
        setSelectedAward(null); // Fecha o modal
    };

    const filteredItems = items.filter((data) =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                    <S.ExampleImg src="assets/images/exemplo2.png" />
                    <S.SubtitleDiv>
                        <S.Title>Todos os Prêmios</S.Title>
                        <Searchbar onSearch={setSearchQuery} />
                    </S.SubtitleDiv>
                    <S.Grid>
                        {filteredItems.map((data) => {
                            console.log('Data inside map:', data); // Verifica se o 'code' está correto
                            return (
                                <ItemCard
                                    key={data.code} // Usando 'code' como chave
                                    item={data}
                                    onClick={() => {
                                        console.log(
                                            'Clicked item code:',
                                            data.code
                                        ); // Verifica se o código está sendo passado corretamente
                                        handleItemClick(data.code); // Passando 'code' para a função de clique
                                    }}
                                />
                            );
                        })}
                    </S.Grid>
                </S.Background>
            </S.Wrapper>
            {selectedAward && ( // Modal com os detalhes do prêmio
                <S.ModalBackdrop onClick={closeModal}>
                    <ProductCard product={selectedAward} />{' '}
                </S.ModalBackdrop>
            )}
        </S.Container>
    );
};

export default AwardsTemplate;
