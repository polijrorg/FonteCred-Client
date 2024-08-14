import React, { useState } from 'react';
import * as S from './styles';

interface PhoneNumber {
    number: string;
    confirmNumber: string;
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
        onSave(number);
    };

    return (
        <S.Container>
            <S.Form>
                <S.Label>
                    Novo Telefone:
                    <S.Input
                        type="text"
                        value={number.number}
                        onChange={handleChange('number')}
                    />
                </S.Label>
                <S.Label>
                    Confirmar Telefone:
                    <S.Input
                        type="text"
                        value={number.confirmNumber}
                        onChange={handleChange('confirmNumber')}
                    />
                </S.Label>
            </S.Form>
            <S.Button onClick={handleSave}>Salvar Alterações</S.Button>
        </S.Container>
    );
};

export default EditNumberForm;
