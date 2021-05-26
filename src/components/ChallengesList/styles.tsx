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

  @media (max-width: 280px) {
    height: 65%;
    width: 87%;
  }

  @media (min-width: 281px) and (max-width: 320px) {
    height: 58%;
    width: 89%;
  }

  @media (min-width: 321px) and (max-width: 370px) {
    height: 65%;
  }

  @media (min-width: 371px) and (max-width: 374px) {
    height: 73%;
  }

  @media (min-width: 375px) and (max-width: 410px) {
    height: 68%;
  }

  @media (min-width: 411px) and (max-width: 449px) {
    height: 70%;
  }

  @media (min-width: 450px) and (max-width: 499px) {
    height: 65%;
  }

  @media (min-width: 450px) and (max-width: 539px) {
    height: 65%;
  }

  @media (min-width: 540px) and (max-width: 550px) {
    height: 65%;
  }
`;
