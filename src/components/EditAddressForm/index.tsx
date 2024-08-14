import React, { useState } from 'react';
import * as S from './styles';

interface Address {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
    complement: string;
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

    const handleSave = () => {
        onSave(address);
    };

    return (
        <S.Container>
            <S.Form>
                <S.Label>
                    Rua:
                    <S.Input
                        type="text"
                        value={address.street}
                        onChange={handleChange('street')}
                    />
                </S.Label>
                <S.Label>
                    Número:
                    <S.Input
                        type="text"
                        value={address.number}
                        onChange={handleChange('number')}
                    />
                </S.Label>
                <S.Label>
                    Bairro:
                    <S.Input
                        type="text"
                        value={address.neighborhood}
                        onChange={handleChange('neighborhood')}
                    />
                </S.Label>
                <S.Label>
                    Cidade:
                    <S.Input
                        type="text"
                        value={address.city}
                        onChange={handleChange('city')}
                    />
                </S.Label>
                <S.Label>
                    Estado:
                    <S.Input
                        type="text"
                        value={address.state}
                        onChange={handleChange('state')}
                    />
                </S.Label>
                <S.Label>
                    CEP:
                    <S.Input
                        type="text"
                        value={address.zip}
                        onChange={handleChange('zip')}
                    />
                </S.Label>
                <S.Label>
                    Complemento:
                    <S.Input
                        type="text"
                        value={address.complement}
                        onChange={handleChange('complement')}
                    />
                </S.Label>
                <S.Button onClick={handleSave}>Salvar Alterações</S.Button>
            </S.Form>
        </S.Container>
    );
};

export default EditAddressForm;
