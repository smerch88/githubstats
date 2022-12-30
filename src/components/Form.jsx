import { Input, Button } from '@mantine/core';

export const Form = ({ handleSubmit, inputValue, setInputValue }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputValue}
          autoFocus
          placeholder="Search User"
          onChange={event => {
            setInputValue(event.target.value);
          }}
        />
        <Button color="indigo" uppercase type="submit">
          <span>Find!</span>
        </Button>
      </form>
    </div>
  );
};
