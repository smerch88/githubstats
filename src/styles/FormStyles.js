import styled from 'styled-components';

export const UserForm = styled.form`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
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
  margin-right: 8px;
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

export const Label = styled.label`
  display: block;
  margin-bottom: 24px;
  width: 100%;
`;
