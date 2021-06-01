import styled from 'styled-components';

interface ILinkButton {
  disabled: boolean;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  padding: 0 2rem;
  font-size: 20px;
`;

export const BackButtonContainer = styled.div`
  display: flex;

  &:hover {
    color: #6fd0cf;
    cursor: pointer;
  }
`;

export const BackIcon = styled.div`
  margin-right: 0.5rem;
  margin-top: 0.2rem;
`;

export const BackButton = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ChallengeDetails = styled.div`
  display: flex;
`;

export const ChallengeDay = styled.p``;

export const ChallengeTitle = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100%;
`;

const ControlButtonsDefaults = styled.button<ILinkButton>`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover {
    color: ${props => !props.disabled && '#6fd0cf'};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }

  @media (max-width: 768px) {
    & > span {
      display: none;
    }
  }
`;

export const ControlText = styled.span``;

export const PreviousButton = styled(ControlButtonsDefaults)`
  & > svg {
    margin-right: 0.5rem;
  }
`;

export const NextButton = styled(ControlButtonsDefaults)`
  & > svg {
    margin-left: 0.5rem;
  }
`;
