import React from 'react';
import * as S from './styles';

interface Props {
    name: string;
    info: string;
    onClick: () => void;
}

export const ProfileInfo: React.FC<Props> = ({ name, info, onClick }) => {
    return (
        <S.Wrapper>
            <S.Text>
                {name}: {info}
            </S.Text>
            <S.EditIcon src="assets/icons/profileEdit.svg" onClick={onClick} />
        </S.Wrapper>
    );
};

export default ProfileInfo;
