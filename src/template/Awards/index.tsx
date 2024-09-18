import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { useState, useEffect } from 'react';
import ItemCard from 'components/ItemCard';
import Searchbar from 'components/Searchbar';
import AwardsService, { Award } from 'services/AwardsService';
import * as S from './styles';

const AwardsTemplate: React.FC = () => {
    const [items, setItems] = useState<Award[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
                        {filteredItems.map((data) => (
                            <ItemCard key={data.id} item={data} />
                        ))}
                    </S.Grid>
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default AwardsTemplate;
