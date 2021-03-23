import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

interface ChallengeItemProps {
  challenge: {
    title: string;
    day: string;
    isFinished: boolean;
    link: string;
  };
}

const ChallengeItem: React.FC<ChallengeItemProps> = ({ challenge }) => {
  const history = useHistory();

  const handleGoToChallenge = useCallback(() => {
    if (challenge?.isFinished) history.push(`/challenges/${challenge?.link}`);
  }, [challenge, history]);

  return (
    <S.Container status={challenge.isFinished} onClick={handleGoToChallenge}>
      <S.Day>{challenge.day}</S.Day>
      <S.Title>{challenge.title}</S.Title>
      <S.Status status={challenge.isFinished}>
        {challenge.isFinished ? 'Completed' : 'Not Completed'}
      </S.Status>
    </S.Container>
  );
};

export default ChallengeItem;
