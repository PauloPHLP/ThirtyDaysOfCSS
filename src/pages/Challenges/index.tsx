import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import CodeContent from '../../components/CodeContent';
import challengesList from '../../assets/challenges/challengesList.json';
import * as S from './styles';

interface ChallengeProps {
  title: string;
  day: string;
  isFinished: boolean;
  link: string;
}

const Challenges: React.FC = () => {
  const [newRoute, setNewRoute] = useState('');
  const [previousDay, setPreviousDay] = useState('');
  const [nextDay, setNextDay] = useState('');
  const [challenge, setChallenge] = useState({} as ChallengeProps);
  const [currentDay, setCurrentDay] = useState('01');
  const history = useHistory();

  // Adds a zero on the left on numbers minor than 10.
  const zeroPad = useCallback(number => {
    return String(number).padStart(2, '0');
  }, []);

  const setNextAndPreviousRouteAvailability = useCallback(
    (currentDayNumber: number) => {
      challengesList[currentDayNumber]?.isFinished
        ? setNextDay(zeroPad(currentDayNumber + 1))
        : setNextDay('');

      challengesList[currentDayNumber - 2]?.isFinished &&
      currentDayNumber - 1 > 0
        ? setPreviousDay(zeroPad(currentDayNumber - 1))
        : setPreviousDay('');
    },
    [zeroPad],
  );

  const handleDays = useCallback(() => {
    // Getting the current day based on the URI.
    const currentDayNumber = history?.location?.pathname
      .split('/challenges/')[1]
      .split('day-')[1];

    setNextAndPreviousRouteAvailability(Number(currentDayNumber));

    // Checking if the current day number is in the range of challenge days.
    if (Number(currentDayNumber) >= 1 && Number(currentDayNumber) <= 30) {
      setChallenge(challengesList[Number(currentDayNumber) - 1]);
      setCurrentDay(String(currentDayNumber));
    } else history.push('/');
  }, [history, setNextAndPreviousRouteAvailability]);

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
        <S.BackButtonContainer onClick={() => handleRouteChange('/')}>
          <S.BackIcon>
            <FaArrowLeft />
          </S.BackIcon>
          <S.BackButton>Back to challenges list</S.BackButton>
        </S.BackButtonContainer>
        <S.ChallengeDetails>
          <S.ChallengeDay>{challenge.day}</S.ChallengeDay>
          <S.ChallengeTitle>&nbsp;- {challenge.title}</S.ChallengeTitle>
        </S.ChallengeDetails>
      </S.Header>

      <CodeContent currentDay={currentDay} />

      <S.Footer>
        <S.PreviousButton
          onClick={() => previousDay && handleRouteChange(`day-${previousDay}`)}
          disabled={!previousDay}
        >
          <FaArrowLeft />
          <S.ControlText>Previous challenge</S.ControlText>
        </S.PreviousButton>
        &nbsp;|&nbsp;
        <S.NextButton
          onClick={() => nextDay && handleRouteChange(`day-${nextDay}`)}
          disabled={!nextDay.length && nextDay !== '31'}
        >
          <S.ControlText>Next challenge</S.ControlText>
          <FaArrowRight />
        </S.NextButton>
      </S.Footer>
    </S.Container>
  );
};

export default Challenges;
