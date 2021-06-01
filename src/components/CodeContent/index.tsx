import React, { Suspense, useEffect, useState } from 'react';

import * as S from './styles';

interface CodeContentProps {
  currentDay: string;
}

// Loads challenges dinamically based on the current day.
function LoadComponentDinamically(
  challengeDay: string,
  type: 'Challenge' | 'Code',
): React.ElementType {
  const Component = React.lazy(() =>
    import(
      `../../components/ChallengesDays/Day${challengeDay}/${type}`
    ).catch(() => import(`../../components/ChallengeNotCompleted`)),
  );

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
      <Suspense fallback={<div>Loading...</div>}>
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
