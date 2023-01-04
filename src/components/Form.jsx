import { UserForm, H1, Input, Label } from '../styles/FormStyles';
import { Button } from '../styles/CommonStyles';
import { useState } from 'react';

export const Form = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    handleSubmit(inputValue);
  };

  const handleSetInputValue = event => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <H1>Find a GitHUB User</H1>
      <UserForm onSubmit={handleFormSubmit}>
        <Label>
          <Input
            type="text"
            value={inputValue}
            autoFocus
            required
            placeholder="Search User"
            onChange={handleSetInputValue}
          />
        </Label>
        <Button type="submit">
          <span>Find!</span>
        </Button>
      </UserForm>
    </div>
  );
};
