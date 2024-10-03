/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { fetchPersonalData, PersonalData } from 'services/ProfileService';
import { updateProfile } from 'services/UpdateProfileService';
import * as S from './styles';

interface ConfirmAddressProps {
    onClose: () => void;
    onConfirm: () => void; // Adicionar uma prop para confirmar o resgate
}

const ConfirmAddress: React.FC<ConfirmAddressProps> = ({
    onClose,
    onConfirm
}) => {
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

    const handleConfirm = async () => {
        if (personalData) {
            try {
                const updatedData = {
                    email: (
                        document.querySelector(
                            'input[placeholder="Email"]'
                        ) as HTMLInputElement
                    )?.value,
                    cellphone: (
                        document.querySelector(
                            'input[placeholder="Telefone"]'
                        ) as HTMLInputElement
                    )?.value,
                    endereco: (
                        document.querySelector(
                            'input[placeholder="Rua"]'
                        ) as HTMLInputElement
                    )?.value,
                    numero: (
                        document.querySelector(
                            'input[placeholder="Número"]'
                        ) as HTMLInputElement
                    )?.value,
                    bairro: (
                        document.querySelector(
                            'input[placeholder="Bairro"]'
                        ) as HTMLInputElement
                    )?.value,
                    cidade: (
                        document.querySelector(
                            'input[placeholder="Cidade"]'
                        ) as HTMLInputElement
                    )?.value,
                    uf: (
                        document.querySelector(
                            'input[placeholder="Estado"]'
                        ) as HTMLInputElement
                    )?.value,
                    cep: (
                        document.querySelector(
                            'input[placeholder="CEP"]'
                        ) as HTMLInputElement
                    )?.value,
                    complemento: (
                        document.querySelector(
                            'input[placeholder="Complemento"]'
                        ) as HTMLInputElement
                    )?.value
                };

                // Atualizar o perfil
                await updateProfile(updatedData);

                // Após a atualização, acione a função de resgate
                onConfirm();
            } catch (error) {
                console.error('Erro ao atualizar o endereço', error);
                alert('Erro ao atualizar o endereço. Tente novamente.');
            }
        }
    };

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
                    defaultValue={personalData?.cellphone}
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

                <S.ConfirmButton onClick={handleConfirm}>
                    Confirmar e Resgatar
                </S.ConfirmButton>
            </S.Form>
        </S.ModalContainer>
    );
};

export default ConfirmAddress;
