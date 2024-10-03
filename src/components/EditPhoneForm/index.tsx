/* eslint-disable no-alert */
import React, { useState } from 'react';
import * as S from './styles';

interface PhoneNumber {
    cellphone: string;
    confirmCellphone: string;
}

interface Props {
    onSave: (newNumber: PhoneNumber) => void;
    currentNumber: PhoneNumber;
}

const EditNumberForm: React.FC<Props> = ({ onSave, currentNumber }) => {
    const [number, setNumber] = useState(currentNumber);

    const handleChange =
        (field: keyof PhoneNumber) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setNumber({ ...number, [field]: event.target.value });
        };

    const handleSave = () => {
        if (number.cellphone === number.confirmCellphone) {
            onSave(number);
        } else {
            alert(
                'Os números de telefone não coincidem. Por favor, verifique.'
            );
        }
    };

    return (
        <S.Container>
            <S.Form>
                <S.Label>
                    Novo Telefone:
                    <S.Input
                        type="text"
                        value={number.cellphone}
                        onChange={handleChange('cellphone')}
                    />
                </S.Label>
                <S.Label>
                    Confirmar Telefone:
                    <S.Input
                        type="text"
                        value={number.confirmCellphone}
                        onChange={handleChange('confirmCellphone')}
                    />
                </S.Label>
            </S.Form>
            <S.Button onClick={handleSave}>Salvar Alterações</S.Button>
        </S.Container>
    );
};

export default EditNumberForm;
