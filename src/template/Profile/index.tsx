import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import ItensComponent from 'components/ItensComponent';
import ProfileInfo from 'components/ProfileInfo';
import { useState } from 'react';
import EditAddressForm from 'components/EditAddressForm';
import EditNumberForm from 'components/EditPhoneForm';
import EditEmailForm from 'components/EditEmailForm';
import EditNameForm from 'components/EditNameForm';
import ReedemedComponent from 'components/ReedemedComponent';
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

interface Name {
    name: string;
    confirmName: string;
}

interface PhoneNumber {
    number: string;
    confirmNumber: string;
}

interface Email {
    email: string;
    confirmEmail: string;
}

interface PersonalData {
    name: Name;
    email: Email;
    number: PhoneNumber;
    address: Address;
}

const ProfileTemplate: React.FC = () => {
    const [personalData, setPersonalData] = useState<PersonalData>({
        name: {
            name: 'Mariana Mari',
            confirmName: 'Mariana Mari'
        },
        email: {
            email: 'mariana.mari@gmail.com',
            confirmEmail: 'mariana.mari@gmail.com'
        },
        number: {
            number: '(11) 96545-4656',
            confirmNumber: '(11) 96545-4656'
        },
        address: {
            street: 'Rua Gravidade Zero',
            number: '100',
            neighborhood: 'Centro',
            city: 'São Paulo',
            state: 'SP',
            zip: '00000-000',
            complement: 'Apartamento D'
        }
    });

    const [showEditAddress, setShowEditAddress] = useState(false);
    const [showEditNumber, setShowEditNumber] = useState(false);
    const [showEditEmail, setShowEditEmail] = useState(false);
    const [showEditName, setShowEditName] = useState(false);

    const handleSaveAddress = (newAddress: Address) => {
        setPersonalData({ ...personalData, address: newAddress });
        setShowEditAddress(false);
    };

    const handleSaveNumber = (newNumber: PhoneNumber) => {
        setPersonalData({ ...personalData, number: newNumber });
        setShowEditNumber(false);
    };

    const handleSaveEmail = (newEmail: Email) => {
        setPersonalData({ ...personalData, email: newEmail });
        setShowEditEmail(false);
    };

    const handleSaveName = (newName: Name) => {
        setPersonalData({ ...personalData, name: newName });
        setShowEditName(false);
    };

    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.SubtitleDiv>
                        <S.Subtitle>Meu Perfil</S.Subtitle>
                    </S.SubtitleDiv>
                    <S.ExampleImg src="assets/images/exemplo.svg" />
                    <S.ExampleImg src="assets/images/missoes.png" />
                    {showEditAddress ||
                    showEditNumber ||
                    showEditEmail ||
                    showEditName ? (
                        <S.InfoBigWrapper>
                            {showEditAddress && (
                                <EditAddressForm
                                    onSave={handleSaveAddress}
                                    currentAddress={personalData.address}
                                />
                            )}
                            {showEditNumber && (
                                <EditNumberForm
                                    onSave={handleSaveNumber}
                                    currentNumber={personalData.number}
                                />
                            )}
                            {showEditEmail && (
                                <EditEmailForm
                                    onSave={handleSaveEmail}
                                    currentEmail={personalData.email}
                                />
                            )}
                            {showEditName && (
                                <EditNameForm
                                    onSave={handleSaveName}
                                    currentName={personalData.name}
                                />
                            )}
                            <S.Banner src="assets/images/banner1.svg" />
                            <ItensComponent Title="Prêmios a Resgatar">
                                <ReedemedComponent name="luvinhas" />
                                <ReedemedComponent name="luvinhas" />
                                <ReedemedComponent name="luvinhas" />
                            </ItensComponent>
                        </S.InfoBigWrapper>
                    ) : (
                        <S.InfoBigWrapper>
                            <ItensComponent Title="Dados Pessoais">
                                <ProfileInfo
                                    name="Nome Completo"
                                    info={personalData.name.name}
                                    onClick={() => setShowEditName(true)}
                                />
                                <ProfileInfo
                                    name="Email"
                                    info={personalData.email.email}
                                    onClick={() => setShowEditEmail(true)}
                                />
                                <ProfileInfo
                                    name="Telefone"
                                    info={personalData.number.number}
                                    onClick={() => setShowEditNumber(true)}
                                />
                                <ProfileInfo
                                    name="Endereço"
                                    info={`${personalData.address.street}, ${personalData.address.number}`}
                                    onClick={() => setShowEditAddress(true)}
                                />
                            </ItensComponent>
                            <S.Banner src="assets/images/banner1.svg" />
                            <ItensComponent Title="Prêmios Resgatados">
                                <ReedemedComponent name="luvinhas" />
                                <ReedemedComponent name="luvinhas" />
                                <ReedemedComponent name="luvinhas" />
                            </ItensComponent>
                        </S.InfoBigWrapper>
                    )}
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default ProfileTemplate;
