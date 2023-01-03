export const Form = ({ handleSubmit, inputValue, setInputValue }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          autoFocus
          placeholder="Search User"
          onChange={event => {
            setInputValue(event.target.value);
          }}
        />
        <button color="indigo" type="submit">
          <span>Find!</span>
        </button>
      </form>
    </div>
  );
};
