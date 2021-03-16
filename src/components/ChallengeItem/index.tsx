import React from 'react';

import * as S from './styles';

interface ChallengeItemProps {
  title: string;
}

const ChallengeItem: React.FC<ChallengeItemProps> = ({ title }) => {
  return <S.Container>{title}</S.Container>;
};

export default ChallengeItem;
