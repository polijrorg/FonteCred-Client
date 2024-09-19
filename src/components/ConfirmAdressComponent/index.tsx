/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { fetchPersonalData, PersonalData } from 'services/ProfileService';
import * as S from './styles'; // Supondo que os estilos estão no arquivo styles

interface ConfirmAddressProps {
    onClose: () => void;
}

const ConfirmAddress: React.FC<ConfirmAddressProps> = ({ onClose }) => {
    const [personalData, setPersonalData] = useState<PersonalData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPersonalData();
                setPersonalData(data);
            } catch (error) {
                console.error('Erro ao buscar os dados pessoais', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Carregando dados do cliente...</div>;
    }

    return (
        <S.ModalContainer>
            <S.Header>
                <S.Title>Confirmar Dados Pessoais</S.Title>
                <S.CloseButton onClick={onClose}>X</S.CloseButton>
            </S.Header>
            <S.Form>
                <S.Label>Email</S.Label>
                <S.Input
                    type="email"
                    placeholder="Email"
                    defaultValue={personalData?.email}
                />

                <S.Label>Telefone</S.Label>
                <S.Input
                    type="text"
                    placeholder="Telefone"
                    defaultValue={personalData?.phoneNumber}
                />

                <S.Label>Rua</S.Label>
                <S.Input
                    type="text"
                    placeholder="Rua"
                    defaultValue={personalData?.endereco.rua}
                />

                <S.Label>Número</S.Label>
                <S.Input
                    type="text"
                    placeholder="Número"
                    defaultValue={personalData?.endereco.numero}
                />

                <S.Label>Bairro</S.Label>
                <S.Input
                    type="text"
                    placeholder="Bairro"
                    defaultValue={personalData?.endereco.bairro}
                />

                <S.Label>Cidade</S.Label>
                <S.Input
                    type="text"
                    placeholder="Cidade"
                    defaultValue={personalData?.endereco.cidade}
                />

                <S.Label>Estado</S.Label>
                <S.Input
                    type="text"
                    placeholder="Estado"
                    defaultValue={personalData?.endereco.estado}
                />

                <S.Label>CEP</S.Label>
                <S.Input
                    type="text"
                    placeholder="CEP"
                    defaultValue={personalData?.endereco.cep}
                />

                <S.Label>Complemento</S.Label>
                <S.Input
                    type="text"
                    placeholder="Complemento"
                    defaultValue={personalData?.endereco.complemento}
                />

                <S.ConfirmButton onClick={onClose}>
                    Confirmar e Resgatar
                </S.ConfirmButton>
            </S.Form>
        </S.ModalContainer>
    );
};

export default ConfirmAddress;
