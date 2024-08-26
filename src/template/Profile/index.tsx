/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import ItensComponent from 'components/ItensComponent';
import ProfileInfo from 'components/ProfileInfo';
import { useEffect, useState } from 'react';
import EditAddressForm from 'components/EditAddressForm';
// import EditNumberForm from 'components/EditPhoneForm';
import EditEmailForm from 'components/EditEmailForm';
import EditNameForm from 'components/EditNameForm';
import ReedemedComponent from 'components/ReedemedComponent';
import ExtrTableComponent from 'components/ExtrTable';
import { fetchPersonalData } from 'services/ProfileService';
import { updateProfile } from 'services/UpdateProfileService';
import ProfielProgressCardNoButton from 'components/ProfileProgressCardNoButton/ProfileProgressCard';
import * as S from './styles';

export interface PersonalData {
    name: string;
    email: string;
    phoneNumber: string;
    endereco: {
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
        complemento?: string;
    };
    points: string;
}

const ProfileTemplate: React.FC = () => {
    const [personalData, setPersonalData] = useState<PersonalData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showEditAddress, setShowEditAddress] = useState(false);
    const [showEditNumber] = useState(false);
    const [showEditEmail, setShowEditEmail] = useState(false);
    const [showEditName, setShowEditName] = useState(false);
    const [showExtrTable, setExtrTable] = useState(false);

    useEffect(() => {
        const loadPersonalData = async () => {
            try {
                const data = await fetchPersonalData();
                setPersonalData(data);
            } catch (error) {
                setError('Erro ao carregar dados do cliente');
            } finally {
                setLoading(false);
            }
        };

        loadPersonalData();
    }, []);

    const handleSaveAddress = async (newAddress: PersonalData['endereco']) => {
        try {
            await updateProfile({
                endereco: newAddress.rua,
                numero: newAddress.numero,
                bairro: newAddress.bairro,
                cidade: newAddress.cidade,
                uf: newAddress.estado,
                cep: newAddress.cep,
                complemento: newAddress.complemento
            });

            setPersonalData((prevData) =>
                prevData ? { ...prevData, address: newAddress } : null
            );
            setShowEditAddress(false);
        } catch (error) {
            console.error('Erro ao salvar endereço', error);
        }
    };

    // const handleSaveNumber = async (newNumber: string) => {
    //     try {
    //         await updateProfile({
    //             telefone: newNumber
    //         });

    //         setPersonalData((prevData) =>
    //             prevData ? { ...prevData, phoneNumber: newNumber } : null
    //         );
    //         setShowEditNumber(false);
    //     } catch (error) {
    //         console.error('Erro ao salvar número de telefone', error);
    //     }
    // };

    const handleSaveEmail = async (newEmail: {
        email: string;
        confirmEmail: string;
    }) => {
        try {
            // Aqui usamos newEmail.email para enviar o email ao serviço de atualização
            await updateProfile({
                email: newEmail.email
            });

            setPersonalData((prevData) =>
                prevData ? { ...prevData, email: newEmail.email } : null
            );
            setShowEditEmail(false);
        } catch (error) {
            console.error('Erro ao salvar email', error);
        }
    };

    const handleSaveName = async (newName: {
        name: string;
        confirmName: string;
    }) => {
        try {
            // Usamos newName.name para enviar o nome ao serviço de atualização
            await updateProfile({
                name: newName.name
            });

            setPersonalData((prevData) =>
                prevData ? { ...prevData, name: newName.name } : null
            );
            setShowEditName(false);
        } catch (error) {
            console.error('Erro ao salvar nome', error);
        }
    };

    const handleCloseTable = () => {
        setExtrTable(false);
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <S.Container>
            <Header />
            <S.Wrapper>
                <Sidebar />
                <S.Background>
                    <S.SubtitleDiv>
                        <S.Subtitle>Meu Perfil</S.Subtitle>
                        <S.ExtrDiv>
                            <S.Subtitle>Saldo</S.Subtitle>
                            <S.PtsDiv>{personalData?.points}</S.PtsDiv>
                            <S.ExtrButton
                                onClick={() => setExtrTable(!showExtrTable)}
                            >
                                EXTRATO DE PONTOS
                            </S.ExtrButton>
                        </S.ExtrDiv>
                    </S.SubtitleDiv>
                    <ProfielProgressCardNoButton />
                    {showExtrTable ? (
                        <ExtrTableComponent Close={handleCloseTable} />
                    ) : showEditAddress ||
                      showEditNumber ||
                      showEditEmail ||
                      showEditName ? (
                        <S.InfoBigWrapper>
                            {showEditAddress && (
                                <EditAddressForm
                                    onSave={handleSaveAddress}
                                    currentAddress={{
                                        rua: personalData?.endereco.rua || '',
                                        numero:
                                            personalData?.endereco.numero || '',
                                        bairro:
                                            personalData?.endereco.bairro || '',
                                        cidade:
                                            personalData?.endereco.cidade || '',
                                        estado:
                                            personalData?.endereco.estado || '',
                                        cep: personalData?.endereco.cep || '',
                                        complemento:
                                            personalData?.endereco
                                                .complemento || '' // Garantindo que 'complement' seja sempre uma string
                                    }}
                                />
                            )}
                            {/* {showEditNumber && (
                                <EditNumberForm
                                    onSave={handleSaveNumber}
                                    currentNumber={
                                        personalData?.phoneNumber || ''
                                    }
                                />
                            )} */}
                            {showEditEmail && (
                                <EditEmailForm
                                    onSave={handleSaveEmail}
                                    currentEmail={{
                                        email: personalData?.email || '',
                                        confirmEmail: personalData?.email || ''
                                    }}
                                />
                            )}
                            {showEditName && (
                                <EditNameForm
                                    onSave={handleSaveName}
                                    currentName={{
                                        name: personalData?.name || '',
                                        confirmName: personalData?.name || ''
                                    }}
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
                        <>
                            <S.InfoBigWrapper>
                                <ItensComponent Title="Dados Pessoais">
                                    <ProfileInfo
                                        name="Nome Completo"
                                        info={personalData?.name || ''}
                                        onClick={() => setShowEditName(true)}
                                    />
                                    <ProfileInfo
                                        name="Email"
                                        info={personalData?.email || ''}
                                        onClick={() => setShowEditEmail(true)}
                                    />
                                    {/* <ProfileInfo
                                        name="Telefone"
                                        info={personalData?.phoneNumber || ''}
                                        onClick={() => setShowEditNumber(true)}
                                    /> */}
                                    <ProfileInfo
                                        name="Endereço"
                                        info={`${
                                            personalData?.endereco.rua || ''
                                        }, ${
                                            personalData?.endereco.numero || ''
                                        }`}
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
                        </>
                    )}
                </S.Background>
            </S.Wrapper>
        </S.Container>
    );
};

export default ProfileTemplate;
