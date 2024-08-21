import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import * as S from './styles';

interface ExpandableListItemProps {
    title: string;
    content: string;
    id: string;
}

const ExpandableListItem: React.FC<ExpandableListItemProps> = ({
    title,
    content
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentContent] = useState(content);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <S.ListItem>
                <S.ListItemHeader>
                    <S.ListItemTitle>{title}</S.ListItemTitle>
                    <S.IconWrapper>
                        {isExpanded ? (
                            <FaChevronUp
                                size={20}
                                color="black"
                                onClick={toggleExpansion}
                            />
                        ) : (
                            <FaChevronDown
                                size={20}
                                color="black"
                                onClick={toggleExpansion}
                            />
                        )}
                    </S.IconWrapper>
                </S.ListItemHeader>
                {isExpanded && (
                    <S.ListItemContent>{currentContent}</S.ListItemContent>
                )}
            </S.ListItem>
        </>
    );
};

export default ExpandableListItem;
