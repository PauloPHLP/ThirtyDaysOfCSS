import React from 'react';

import ChallengeItem from '../ChallengeItem';
import challengesList from '../../assets/challenges/challengesList.json';
import * as S from './styles';

const ChallengesList: React.FC = () => {
  return (
    <S.Container>
      {challengesList?.length &&
        challengesList.map(challenge => (
          <ChallengeItem challenge={challenge} />
        ))}
    </S.Container>
  );
};

export default ChallengesList;
