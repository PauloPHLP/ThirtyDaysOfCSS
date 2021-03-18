import styled from 'styled-components';

export const Container = styled.div`
  background-color: #282d4f;
  border-bottom: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 75%;
  width: 90%;
  bottom: 0;
  margin-bottom: 1.1rem;
  position: absolute;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;

  @media (max-width: 410px) {
    height: 55%;
  }

  @media (min-width: 411px) and (max-width: 420px) {
    height: 60%;
  }

  @media (max-width: 510px) {
    height: 70%;
  }

  @media (min-width: 511px) and (max-width: 550px) {
    height: 70%;
  }

  @media (min-width: 1280px) {
    height: 70%;
  }
`;
