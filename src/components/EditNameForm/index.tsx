import React, { useState } from 'react';
import * as S from './styles';

interface Name {
    name: string;
    confirmName: string;
}

interface Props {
    onSave: (newNumber: Name) => void;
    currentName: Name;
}

const EditNameForm: React.FC<Props> = ({ onSave, currentName }) => {
    const [name, setName] = useState(currentName);

    const handleChange =
        (field: keyof Name) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setName({ ...name, [field]: event.target.value });
        };

    const handleSave = () => {
        onSave(name);
    };

    return (
        <S.Container>
            <S.Form>
                <S.Label>
                    Novo Nome:
                    <S.Input
                        type="text"
                        value={name.name}
                        onChange={handleChange('name')}
                    />
                </S.Label>
                <S.Label>
                    Confirmar Nome:
                    <S.Input
                        type="text"
                        value={name.confirmName}
                        onChange={handleChange('confirmName')}
                    />
                </S.Label>
            </S.Form>
            <S.Button onClick={handleSave}>Salvar Alterações</S.Button>
        </S.Container>
    );
};

export default EditNameForm;
