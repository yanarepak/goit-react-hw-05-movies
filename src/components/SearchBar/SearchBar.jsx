import { Form, Input, FormBtn } from "./SearchBar.styled";

const SearchBar = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input 
        type="text"
        name="search"
        placeholder="Enter the name of the movie"
      />
      <FormBtn type="submit">Search</FormBtn>
    </Form>
  );
};

export default SearchBar;
