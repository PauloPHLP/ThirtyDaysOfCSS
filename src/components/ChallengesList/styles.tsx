import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #917164;
  border-bottom: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 70%;
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

  @media only screen and (max-width: 600px) {
    height: 55%;
  }
`;
