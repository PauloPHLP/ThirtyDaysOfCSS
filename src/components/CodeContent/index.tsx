import React, { Suspense, useEffect, useState } from 'react';
import LoadSpinner from '../LoadSpinner';

import * as S from './styles';

interface CodeContentProps {
  currentDay: string;
}

function LoadComponentDinamically(
  challengeDay: string,
  type: 'Challenge' | 'Code',
): React.ElementType {
  const Component = React.lazy(async () => {
    // Adding a delay to show the spinner while loading the component.
    await new Promise(resolve => setTimeout(resolve, 500));

    return import(
      `../../components/Challenges/Day${challengeDay}/${type}`
    ).catch(() => import(`../../components/ChallengeNotCompleted`));
  });

  return Component;
}

const CodeContent: React.FC<CodeContentProps> = ({ currentDay }) => {
  const [CurrentChallenge, setCurrentChallenge] = useState<React.ElementType>(
    () => {
      return LoadComponentDinamically('01', 'Challenge');
    },
  );
  const [CurrentCode, setCurrentCode] = useState<React.ElementType>(() => {
    return LoadComponentDinamically('01', 'Code');
  });

  useEffect(() => {
    setCurrentChallenge(LoadComponentDinamically(currentDay, 'Challenge'));
    setCurrentCode(LoadComponentDinamically(currentDay, 'Code'));
  }, [currentDay]);

  return (
    <S.Container>
      <Suspense fallback={<LoadSpinner size={46} />}>
        <S.Challenge>
          <CurrentChallenge />
        </S.Challenge>
        <S.Division />
        <S.Code>
          <CurrentCode />
        </S.Code>
      </Suspense>
    </S.Container>
  );
};

export default CodeContent;
