import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 1rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  border: 1px solid #4a5079;
  border-radius: 8px;
`;

export const Header = styled.header`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1.5rem 0;
`;

export const Social = styled.div``;

export const SocialLink = styled.a`
  font-size: 20px;
  text-decoration: none;
  margin: 0 5px;
  color: #989db8;
  text-decoration: none;

  &:visited {
    color: #989db8;
    text-decoration: none;
  }

  &:hover {
    color: #6fd0cf;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    & > span {
      display: none;
    }
  }
`;

export const Title = styled.div`
  font-size: 42px;
  color: #ffffff;
  font-weight: 500;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Description = styled.div`
  margin-top: 0.3rem;
  color: #989db8;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
