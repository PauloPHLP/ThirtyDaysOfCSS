import styled from 'styled-components';

interface StatusProps {
  status: boolean;
}

export const Container = styled.div<StatusProps>`
  height: 8rem;
  width: 20rem;
  margin: 1rem;
  display: flex;
  flex: auto;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  background-color: #4a5079;
  border: 3px solid #6fd0cf;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    border: 3px solid #a592f2;
  }
`;

export const Day = styled.h2`
  color: #ccd0e7;
`;

export const Title = styled.h2``;

export const Status = styled.h4<StatusProps>`
  color: ${props => (props.status ? '#7AD6A5' : '#E24C53')};
`;
