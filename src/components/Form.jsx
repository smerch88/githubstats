import { UserForm, H1, Input, Button, Label } from '../styles/FormStyles';

export const Form = ({ handleSubmit, inputValue, setInputValue }) => {
  return (
    <div>
      <H1>Find a GitHUB User</H1>
      <UserForm onSubmit={handleSubmit}>
        <Label>
          <Input
            type="text"
            value={inputValue}
            autoFocus
            placeholder="Search User"
            onChange={event => {
              setInputValue(event.target.value);
            }}
          />
        </Label>
        <Button color="indigo" type="submit">
          <span>Find!</span>
        </Button>
      </UserForm>
    </div>
  );
};
