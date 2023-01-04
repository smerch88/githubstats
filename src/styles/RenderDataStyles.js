import styled from 'styled-components';

export const Card = styled.div`
  padding: 16px;
  min-width: 300px;
  margin: 0 auto;

  border-radius: 32px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  & Button {
    margin-top: 16px;
  }
`;

export const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
`;

export const Bio = styled.div`
  height: 40px;
  overflow-y: scroll;
  /* -ms-overflow-style: none; */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Login = styled.h2`
  font-size: 16px;
  &:hover {
    opacity: 0.5;
  }
`;
