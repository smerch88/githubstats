import styled from 'styled-components';

export const UserForm = styled.form`
  padding: 16px;
  width: 320px;
  margin: 0 auto;
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 32px;
  padding: 16px;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 white;
  margin-right: 16px/2;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;

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

  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fffe;
  }
  display: block;
  width: 100%;
  color: #ae1100;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 24px;
  width: 100%;
`;
