import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={4}
      bgGradient="to-r"
      gradientFrom="teal.400"
      gradientTo="blue.500"
      color="white"
      boxShadow="md"
    >
      {}
      <Box fontWeight="bold" fontSize="xl">
        MallSolar
      </Box>

      <Spacer />

      {}
      <Flex gap={4}>
        <Button
          as={RouterLink}
          to="/"
          variant="ghost"
          _hover={{ bg: "whiteAlpha.300" }}
          color="white"
        >
          Home
        </Button>

        <Button
          as={RouterLink}
          to="/market"
          variant="ghost"
          _hover={{ bg: "whiteAlpha.300" }}
          color="white"
        >
          Market
        </Button>

        <Button
          as={RouterLink}
          to="/login"
          colorScheme="whiteAlpha"
          variant="solid"
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
