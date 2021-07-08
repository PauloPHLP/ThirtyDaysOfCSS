import styled from 'styled-components';

interface StatusProps {
  status: boolean;
}

export const Container = styled.div<StatusProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 8rem;
  width: 20rem;
  padding: 1rem;
  margin: 1rem;
  background-color: #4a5079;
  border: 3px solid #6fd0cf;
  border-radius: 8px;
  opacity: ${props => (props.status ? 1 : 0.5)};
  flex: auto;

  &:hover {
    cursor: ${props => (props.status ? 'pointer' : 'not-allowed')};
    border: ${props => props.status && '3px solid #a592f2'};
  }
`;

export const Day = styled.h2`
  color: #ccd0e7;
`;

export const Title = styled.h2`
  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

export const Status = styled.h4<StatusProps>`
  color: ${props => (props.status ? '#7AD6A5' : '#E24C53')};
`;
