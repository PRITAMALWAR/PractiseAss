import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/actions";
import { Input, Container } from "@chakra-ui/react";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <Container maxW="container.md" mt={5}>
      <Input
        placeholder="Search posts..."
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        size="lg"
      />
    </Container>
  );
};

export default Search;
