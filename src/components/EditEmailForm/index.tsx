/* eslint-disable no-alert */
import React, { useState } from 'react';
import * as S from './styles';

interface Email {
    email: string;
    confirmEmail: string;
}

interface Props {
    onSave: (newNumber: Email) => void;
    currentEmail: Email;
}

const EditEmailForm: React.FC<Props> = ({ onSave, currentEmail }) => {
    const [email, setEmail] = useState(currentEmail);

    const handleChange =
        (field: keyof Email) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail({ ...email, [field]: event.target.value });
        };

    const handleSave = () => {
        if (email.email === email.confirmEmail) {
            onSave(email);
        } else {
            alert('Os emails não coincidem. Por favor, verifique.');
        }
    };

    return (
        <S.Container>
            <S.Form>
                <S.Label>
                    Novo Email:
                    <S.Input
                        type="text"
                        value={email.email}
                        onChange={handleChange('email')}
                    />
                </S.Label>
                <S.Label>
                    Confirmar Email:
                    <S.Input
                        type="text"
                        value={email.confirmEmail}
                        onChange={handleChange('confirmEmail')}
                    />
                </S.Label>
            </S.Form>
            <S.Button onClick={handleSave}>Salvar Alterações</S.Button>
        </S.Container>
    );
};

export default EditEmailForm;
