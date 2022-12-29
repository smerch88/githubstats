export const Form = ({ handleSubmit, inputValue, setInputValue }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Find!</span>
        </button>
        <input
          type="text"
          value={inputValue}
          autoFocus
          placeholder="Search User"
          onChange={event => {
            setInputValue(event.target.value);
          }}
        />
      </form>
    </div>
  );
};
