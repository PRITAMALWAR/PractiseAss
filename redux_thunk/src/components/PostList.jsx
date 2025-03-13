import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { Box, Spinner, Text, Heading, VStack, Container } from "@chakra-ui/react";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error, searchTerm } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Spinner size="xl" mt={10} />;
  if (error) return <Text color="red.500">Error: {error}</Text>;

  return (
    <Container maxW="container.md" mt={5}>
      <VStack spacing={4}>
        {filteredPosts.map((post) => (
          <Box key={post.id} p={4} borderWidth="1px" borderRadius="lg" w="100%">
            <Heading size="md">{post.title}</Heading>
            <Text mt={2}>{post.body}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default PostList;
