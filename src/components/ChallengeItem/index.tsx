import React from 'react';

import * as S from './styles';

interface ChallengeItemProps {
  challenge: {
    title: string;
    day: string;
    isFinished: boolean;
  };
}

const ChallengeItem: React.FC<ChallengeItemProps> = ({ challenge }) => {
  return (
    <S.Container status={challenge.isFinished}>
      <S.Day>{challenge.day}</S.Day>
      <S.Title>{challenge.title}</S.Title>
      <S.Status status={challenge.isFinished}>
        {challenge.isFinished ? 'Completed' : 'Not Completed'}
      </S.Status>
    </S.Container>
  );
};

export default ChallengeItem;
