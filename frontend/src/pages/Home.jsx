import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Container,
  Image,
  HStack
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Box
      minH="100vh"
      bgImage="url('/solar.jpg')"
      bgSize="cover"
      bgPosition="center"
      color="white"
    >
      <Navbar />

      <Container maxW="6xl" py={20}>
        <VStack spacing={8} align="start">
          <Heading fontSize={{ base: "3xl", md: "5xl" }} marginBottom="20px">
            Empowering the Global Solar Energy Market
          </Heading>
          <Text fontSize="lg" maxW="xl" marginBottom="20px">
            Join a decentralized ecosystem where energy assets are tokenized and traded
            transparently, securely, and sustainably.
          </Text>
          <HStack spacing={4}>
            <Button colorScheme="teal" as={Link} to="/market">
              Enter Marketplace
            </Button>
            <Button variant="outline" colorScheme="teal" bg="white">
              Learn More
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;