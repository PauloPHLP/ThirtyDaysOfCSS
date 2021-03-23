import React from 'react';
import { FaGithub, FaTerminal } from 'react-icons/fa';

import ChallengesList from '../../components/ChallengesList';
import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <S.Square>
        <S.Social>
          <S.SocialLink href="https://github.com/PauloPHLP" target="_blank">
            <FaGithub size={16} style={{ marginRight: '2px' }} /> GitHub
          </S.SocialLink>
          &bull;
          <S.SocialLink
            href="https://paulophlp.github.io/portfolio/"
            target="_blank"
          >
            <FaTerminal
              size={16}
              style={{ marginRight: '4px', marginBottom: '-1px' }}
            />
            Paulo Lima
          </S.SocialLink>
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
