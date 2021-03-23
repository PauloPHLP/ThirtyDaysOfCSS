import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding: 1rem 1rem;
  text-align: center;
`;

export const Square = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid #4a5079;
  border-radius: 8px;
`;

export const Social = styled.div`
  margin-bottom: 1rem;
`;

export const SocialLink = styled.a`
  font-size: 20px;
  text-decoration: none;
  margin: 0 5px;

  &:visited {
    color: #989db8;
    text-decoration: none;
  }

  &:hover {
    color: #6fd0cf;
    cursor: pointer;
  }
`;

export const Header = styled.header`
  font-size: 48px;
  color: #ffffff;
  font-weight: 500;
`;

export const Description = styled.p`
  margin-top: 1rem;
  color: #989db8;
`;
