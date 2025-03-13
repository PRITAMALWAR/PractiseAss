import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import PostList from "./components/PostList";
import Search from "./components/Search";

const App = () => {
  return (
    <Box textAlign="center" p={5}>
      <Heading>Posts</Heading>
      <Search />
      <PostList />
    </Box>
  );
};

export default App;
