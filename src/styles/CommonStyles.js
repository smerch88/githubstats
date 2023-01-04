import styled from 'styled-components';

export const Button = styled.button`
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 32px;
  padding: 16px;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px #fffe, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    box-shadow: -2px -2px 5px #fffe, 2px 2px 5px #babecc;
  }

  &:active,
  :disabled {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fffe;
  }
  display: block;
  width: 100%;
  color: ${props => (props.primary ? 'black' : '#ae1100')};

  &:disabled {
    pointer-events: none;
  }
`;

export const Ul = styled.ul`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-wrap: wrap;
  align-content: center;
  text-shadow: 1px 1px 0 #fff;
  color: #61677c;

  & li {
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #ae1100;
    }
  }
`;
