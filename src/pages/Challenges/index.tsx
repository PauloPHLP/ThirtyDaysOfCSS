import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

function loadChallenge(
  challengeDay: string,
  type: 'Challenge' | 'Code',
): React.ElementType {
  const Component = React.lazy(() =>
    import(`../../components/Challenges/Day${challengeDay}/${type}`).catch(() =>
      // Change to NotCompletedChallengeComponent.
      import(`../../components/Challenges/Day01/${type}`),
    ),
  );

  return Component;
}

const Challenges: React.FC = () => {
  const [newRoute, setNewRoute] = useState('');
  const [previousDay, setPreviousDay] = useState('');
  const [nextDay, setNextDay] = useState('');
  const [CurrentChallenge, setCurrentChallenge] = useState<React.ElementType>(
    () => {
      return loadChallenge('01', 'Challenge');
    },
  );
  const [CurrentCode, setCurrentCode] = useState<React.ElementType>(() => {
    return loadChallenge('01', 'Code');
  });

  const history = useHistory();

  const zeroPad = useCallback(number => {
    return String(number).padStart(2, '0');
  }, []);

  const handleDays = useCallback(() => {
    // Getting the current day based on the URI.
    const currentDayNumber = history?.location?.pathname
      .split('/challenges/')[1]
      .split('day-')[1];

    setNextDay(zeroPad(Number(currentDayNumber) + 1));
    setPreviousDay(zeroPad(Number(currentDayNumber) - 1));

    setCurrentChallenge(loadChallenge(currentDayNumber, 'Challenge'));
    setCurrentCode(loadChallenge(currentDayNumber, 'Code'));
  }, [history, zeroPad]);

  const handleRouteChange = useCallback(
    (path: string) => {
      setNewRoute(path);
      history.push(path);
    },
    [history],
  );

  useEffect(() => {
    handleDays();
  }, [handleDays, newRoute]);

  return (
    <S.Container>
      <S.Header>
        <S.GoToChallengesList onClick={() => handleRouteChange('/')}>
          <FaArrowLeft
            size={20}
            style={{ marginRight: '8px', marginBottom: '-1px' }}
          />
          <p>Challenges list</p>
        </S.GoToChallengesList>
        <S.ArrowButtons>
          <S.BackButton
            onClick={() =>
              previousDay !== '00' && handleRouteChange(`day-${previousDay}`)}
            isDisabled={previousDay === '00'}
          >
            <FaArrowLeft
              size={16}
              style={{ marginRight: '4px', marginBottom: '-2px' }}
            />
            <p>Previous challenge</p>
          </S.BackButton>
          &bull;
          <S.NextButton
            onClick={() =>
              nextDay !== '31' && handleRouteChange(`day-${nextDay}`)}
            isDisabled={nextDay === '31'}
          >
            <p>Next challenge</p>
            <FaArrowRight
              size={16}
              style={{ marginLeft: '4px', marginBottom: '-2px' }}
            />
          </S.NextButton>
        </S.ArrowButtons>
      </S.Header>
      <Suspense fallback={<div>Loading...</div>}>
        <S.Square>
          <S.Challenge>
            <CurrentChallenge />
          </S.Challenge>
          <S.Code>
            <CurrentCode />
          </S.Code>
        </S.Square>
      </Suspense>
    </S.Container>
  );
};

export default Challenges;
