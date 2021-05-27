import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import challengesList from '../../assets/challenges/challengesList.json';
import * as S from './styles';

interface ChallengeProps {
  title: string;
  day: string;
  isFinished: boolean;
  link: string;
}

// Loads challenges dinamically based on the current day.
function loadChallenge(
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

const Challenges: React.FC = () => {
  const [newRoute, setNewRoute] = useState('');
  const [previousDay, setPreviousDay] = useState('');
  const [nextDay, setNextDay] = useState('');
  const [challenge, setChallenge] = useState({} as ChallengeProps);
  const [CurrentChallenge, setCurrentChallenge] = useState<React.ElementType>(
    () => {
      return loadChallenge('01', 'Challenge');
    },
  );
  const [CurrentCode, setCurrentCode] = useState<React.ElementType>(() => {
    return loadChallenge('01', 'Code');
  });
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
      setCurrentChallenge(
        loadChallenge(zeroPad(currentDayNumber), 'Challenge'),
      );
      setCurrentCode(loadChallenge(zeroPad(currentDayNumber), 'Code'));
      setChallenge(challengesList[Number(currentDayNumber) - 1]);
    } else history.push('/');
  }, [history, setNextAndPreviousRouteAvailability, zeroPad]);

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
      <S.Content>Content</S.Content>
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
