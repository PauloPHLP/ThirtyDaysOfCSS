import styled from 'styled-components';

interface ILinkButton {
  isDisabled: boolean;
}

export const Container = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  margin-top: 2rem;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  max-width: 90%;
  height: 100%;
`;

export const GoToChallengesList = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 2rem;
  margin-left: 5%;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  max-width: 90%;
  text-align: center;
  color: #989db8;
  font-size: 30px;

  &:hover {
    color: #6fd0cf;
    cursor: pointer;
  }

  @media (max-width: 260px), (max-width: 1000px) {
    flex-direction: column;
    margin-top: 2.6rem;

    & > p {
      display: none;
    }
  }
`;

export const ChallengeDetails = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 2.2rem;
  margin-right: 5%;
  display: flex;
  flex: 1;
  flex-direction: row;
  font-size: 25px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const ArrowButtons = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  margin-bottom: 1.8rem;
  font-size: 20px;
`;

const LinkButton = styled.div<ILinkButton>`
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: ${props => (props.isDisabled ? 0.5 : 1)};
  user-select: none;

  &:hover {
    color: ${props => !props.isDisabled && '#6fd0cf'};
    cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};
  }
`;

export const BackButton = styled(LinkButton)`
  margin-right: 8px;
`;

export const NextButton = styled(LinkButton)`
  margin-left: 8px;
`;

export const LoadingFallBack = styled.div`
  font-size: 0;
`;

export const Square = styled.div`
  align-self: center;
  height: 95%;
  max-height: 95%;
  width: 90%;
  max-width: 90%;
  border: 3px solid #6fd0cf;
  border-radius: 16px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const SquareItems = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex: 1;
  align-items: center;
  align-content: center;
  justify-content: center;

  @media (max-width: 1200px) {
    height: 50%;
    width: 100%;
  }
`;

export const Challenge = styled(SquareItems)`
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border-right: 3px solid #6fd0cf;

  @media (max-width: 1200px) {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 0px;
    border-right: none;
    border-bottom: 3px solid #6fd0cf;
  }
`;

export const Code = styled(SquareItems)`
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  @media (max-width: 1200px) {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 0px;
  }
`;
