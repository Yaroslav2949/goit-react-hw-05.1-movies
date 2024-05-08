import { Button, Form, Input } from './SearchBar.styled';
const SearchBar = ({ onSubmitSearchBar }) => {
  return (
    <Form onSubmit={onSubmitSearchBar}>
      <Input type="text" name="query" placeholder="Search movies" />

      <Button type="submit">Searh Movie</Button>
    </Form>
  );
};
export default SearchBar;
