import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { useState } from 'react';
import ItemCard from 'components/ItemCard';
import Searchbar from 'components/Searchbar';
import * as S from './styles';

interface Item {
    id: string;
    name: string;
    points: number;
}

const items: Item[] = [
    { id: '1', name: 'Capacete branco', points: 500 },
    { id: '2', name: 'Luva', points: 250 },
    { id: '3', name: 'Capacete preto', points: 500 },
    { id: '4', name: 'Chaveiro', points: 150 }
];

const AwardsTemplate: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [, setSelectedItem] = useState<Item | null>(null);

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleEditClick = (item: Item) => {
        setSelectedItem(item);
    };

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
                        {filteredItems.map((item) => (
                            <ItemCard
                                key={item.id}
                                item={item}
                                onEditClick={handleEditClick}
                            />
                        ))}
                    </S.Grid>
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default AwardsTemplate;
