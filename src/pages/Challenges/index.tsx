import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

const Challenges: React.FC = () => {
  const [newRoute, setNewRoute] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [previousDay, setPreviousDay] = useState('');
  const [nextDay, setNextDay] = useState('');
  const history = useHistory();

  const handleDays = useCallback(() => {
    const current = history?.location?.pathname.split('/challenges/')[1];
    const dayNumber = Number(current.split('day-')[1]);
    const next = dayNumber + 1 < 10 ? `0${dayNumber + 1}` : `${dayNumber + 1}`;
    const previous =
      dayNumber - 1 < 10 ? `0${dayNumber - 1}` : `${dayNumber - 1}`;

    setCurrentDay(`Day${dayNumber < 10 ? `0${dayNumber}` : `${dayNumber}`}`);
    setNextDay(`day-${next}`);
    setPreviousDay(`day-${previous}`);
  }, [history]);

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
              previousDay !== 'day-00' && handleRouteChange(previousDay)}
            isDisabled={previousDay === 'day-00'}
          >
            <FaArrowLeft
              size={16}
              style={{ marginRight: '4px', marginBottom: '-2px' }}
            />
            <p>Previous challenge</p>
          </S.BackButton>
          &bull;
          <S.NextButton
            onClick={() => nextDay !== 'day-31' && handleRouteChange(nextDay)}
            isDisabled={nextDay === 'day-31'}
          >
            <p>Next challenge</p>
            <FaArrowRight
              size={16}
              style={{ marginLeft: '4px', marginBottom: '-2px' }}
            />
          </S.NextButton>
        </S.ArrowButtons>
      </S.Header>
      <S.Square>
        <S.Challenge>buildComponent</S.Challenge>
        <S.Code>Code</S.Code>
      </S.Square>
    </S.Container>
  );
};

export default Challenges;
