import React from 'react';
import { FaGithub, FaTerminal } from 'react-icons/fa';

import ChallengesList from '../../components/ChallengesList';
import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.Header>
          <S.Social>
            <S.SocialLink
              href="https://github.com/PauloPHLP/ThirtyDaysOfCSS"
              target="_blank"
            >
              <FaGithub size={16} style={{ marginRight: '2px' }} />
              <span> GitHub</span>
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
              <span>Paulo Lima</span>
            </S.SocialLink>
          </S.Social>

          <S.Title>Thirty Days Of CSS</S.Title>

          <S.Description>
            A thirty days CSS challenge to test your skills
          </S.Description>
        </S.Header>

        <ChallengesList />
      </S.InnerContainer>
    </S.Container>
  );
};

export default Dashboard;
