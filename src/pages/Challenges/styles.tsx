import styled from 'styled-components';

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
`;

export const GoToChallengesList = styled.div`
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
  text-align: center;
  color: #989db8;

  @media (max-width: 260px) {
    flex-direction: column;

    & > a {
      display: none;
    }
  }

  &:hover {
    color: #6fd0cf;
    cursor: pointer;
  }

  & > a {
    font-size: 30px;
    text-decoration: none;

    &:visited {
      color: #989db8;
      text-decoration: none;
    }

    &:hover {
      color: #6fd0cf;
      cursor: pointer;
    }
  }
`;

export const Square = styled.div`
  align-self: center;
  height: 90%;
  max-height: 90%;
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

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const squareItems = styled.div`
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

export const Challenge = styled(squareItems)`
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

export const Code = styled(squareItems)`
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  @media (max-width: 1200px) {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 0px;
  }
`;
