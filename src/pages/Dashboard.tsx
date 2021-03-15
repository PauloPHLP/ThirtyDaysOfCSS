import React from 'react';

import ChallengesList from '../components/ChallengesList';
import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <S.Square>
        <S.Social>
          <S.SocialLink>GitHub</S.SocialLink>
          &bull;
          <S.SocialLink>Paulo Lima</S.SocialLink>
        </S.Social>
        <S.Header>Thirty Days Of CSS</S.Header>
        <S.Description>
          A thirty days CSS challenge to test your skills
        </S.Description>

        <ChallengesList />
      </S.Square>
    </S.Container>
  );
};

export default Dashboard;
