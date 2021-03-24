import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import * as S from './styles';

const Challenges: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.GoToChallengesList>
          <FaArrowLeft
            size={20}
            style={{ marginRight: '8px', marginBottom: '-1px' }}
          />
          <Link to="/">Challenges list </Link>
        </S.GoToChallengesList>
      </S.Header>
      <S.Square>
        <S.Challenge>Challenge</S.Challenge>
        <S.Code>Code</S.Code>
      </S.Square>
    </S.Container>
  );
};

export default Challenges;
