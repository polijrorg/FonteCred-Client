import React from 'react';
import ExpandableListItem from 'components/RuleItem';
import { RulesList } from 'services/RulesService';
import * as S from './styles';

interface RuleListProps {
    rules: RulesList[]; // Certifique-se de que `RulesList` está corretamente tipado
}

const RuleList: React.FC<RuleListProps> = ({ rules }) => {
    return (
        <S.ListWrapper>
            {rules.length > 0 ? (
                rules.map((rule) => (
                    <ExpandableListItem
                        key={rule.id}
                        title={rule.policyName}
                        content={rule.policyDescription}
                        id={rule.id}
                    />
                ))
            ) : (
                <S.EmptyMessage>
                    Não há regras disponíveis no momento.
                </S.EmptyMessage>
            )}
        </S.ListWrapper>
    );
};

export default RuleList;
