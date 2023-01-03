import { UserForm, H1, Input, Label } from '../styles/FormStyles';
import { Button } from '../styles/CommonStyles';

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
            required
            placeholder="Search User"
            onChange={event => {
              setInputValue(event.target.value);
            }}
          />
        </Label>
        <Button type="submit">
          <span>Find!</span>
        </Button>
      </UserForm>
    </div>
  );
};
