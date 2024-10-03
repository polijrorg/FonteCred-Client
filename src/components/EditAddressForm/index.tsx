/* eslint-disable no-console */
import React, { useState } from 'react';
import { updateProfile } from 'services/UpdateProfileService'; // Importe o serviço
import * as S from './styles';

interface Address {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento: string;
}

interface Props {
    onSave: (newAddress: Address) => void;
    currentAddress: Address;
}

const EditAddressForm: React.FC<Props> = ({ onSave, currentAddress }) => {
    const [address, setAddress] = useState(currentAddress);

    const handleChange =
        (field: keyof Address) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setAddress({ ...address, [field]: event.target.value });
        };

    const handleSave = async (event: React.FormEvent) => {
        event.preventDefault(); // Previne o comportamento padrão do botão

        try {
            await updateProfile({
                endereco: address.rua,
                numero: address.numero,
                bairro: address.bairro,
                cidade: address.cidade,
                uf: address.estado,
                cep: address.cep,
                complemento: address.complemento
            });

            // Atualize o estado no componente pai
            onSave(address);
        } catch (error) {
            console.error('Erro ao atualizar endereço', error);
        }
    };

    return (
        <S.Container>
            <S.Form>
                <S.Label>
                    Rua:
                    <S.Input
                        type="text"
                        value={address.rua}
                        onChange={handleChange('rua')}
                    />
                </S.Label>
                <S.Label>
                    Número:
                    <S.Input
                        type="text"
                        value={address.numero}
                        onChange={handleChange('numero')}
                    />
                </S.Label>
                <S.Label>
                    Bairro:
                    <S.Input
                        type="text"
                        value={address.bairro}
                        onChange={handleChange('bairro')}
                    />
                </S.Label>
                <S.Label>
                    Cidade:
                    <S.Input
                        type="text"
                        value={address.cidade}
                        onChange={handleChange('cidade')}
                    />
                </S.Label>
                <S.Label>
                    Estado:
                    <S.Input
                        type="text"
                        value={address.estado}
                        onChange={handleChange('estado')}
                    />
                </S.Label>
                <S.Label>
                    CEP:
                    <S.Input
                        type="text"
                        value={address.cep}
                        onChange={handleChange('cep')}
                    />
                </S.Label>
                <S.Label>
                    Complemento:
                    <S.Input
                        type="text"
                        value={address.complemento}
                        onChange={handleChange('complemento')}
                    />
                </S.Label>
                <S.Button onClick={handleSave}>Salvar Alterações</S.Button>
            </S.Form>
        </S.Container>
    );
};

export default EditAddressForm;
