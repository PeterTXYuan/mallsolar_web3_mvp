import { Box, Flex, Text, Spacer, Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex bg="blue.700" color="white" px={6} py={4} align="center">
      <Text fontSize="xl" fontWeight="bold">MallSolar</Text>
      <Spacer />
      <Button colorScheme="teal" variant="outline" size="sm">登录</Button>
    </Flex>
  );
};

export default Navbar;