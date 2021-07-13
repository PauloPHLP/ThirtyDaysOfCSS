import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 95%;
  border: 1px solid #6fd0cf;
  border-radius: 24px;

  @media (max-width: 1264px) {
    flex-direction: column;
  }
`;

const InternalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  padding: 1rem;

  @media (max-width: 1264px) {
    height: 50%;
    width: 100%;
  }
`;

export const Challenge = styled(InternalContent)``;

export const Division = styled.div`
  border: 1px solid #6fd0cf;
  height: 100%;
  width: 0%;

  @media (max-width: 1264px) {
    height: 0%;
    width: 100%;
  }
`;

export const Code = styled(InternalContent)``;
