import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <Box minH="100vh" bg="gray.100">
      <Navbar />

      {/* Section 1 */}
      <Box px={{ base: 6, md: 20 }} py={16} textAlign="center">
        <Heading fontSize="4xl" color="teal.600" mb={4}>
          Empowering Clean Energy with Web3
        </Heading>
        <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
          MallSolar is a decentralized platform that transforms how energy is produced, traded, and consumed.
          We believe in a future where individuals have control over their clean energy assets and transactions.
        </Text>
      </Box>

      {/* Section 2 */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} px={{ base: 6, md: 20 }} py={10} alignItems="center" bgGradient="to-b" gradientFrom="gray.100" gradientTo="white">
        <Image
          src="/solar.jpg"
          alt="Solar panels"
          borderRadius="md"
          height="400px"
          width="550px"
          marginLeft="170px"
          objectFit="cover"
        />
        <VStack align="start" spacing={4} marginLeft="30px" marginRight="100px">
          <Heading fontSize="2xl" color="teal.500">Our Vision</Heading>
          <Text color="gray.700">
            We aim to make clean energy accessible and tradable using blockchain technology.
            Through smart contracts and decentralized applications, users can monetize their energy assets securely.
          </Text>
          <Text color="gray.700">
            Our platform promotes sustainability, decentralization, and community-driven innovation in the energy space.
          </Text>
        </VStack>
      </SimpleGrid>

      <Box overflow="hidden" lineHeight="0">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '80px', width: '100%' }}
        >
          <path
            d="M0,0 L0,100 Q250,0 500,100 L500,0 Z"
            style={{ stroke: 'none', fill: 'white' }} // blue.300
          ></path>
        </svg>
      </Box>
      {/* Section 3 */}
      {/* Team Members */}

      {/* Section 4 */}
      <Box textAlign="center" py={16}>
        <Heading fontSize="2xl" mb={4}>Join the Energy Revolution</Heading>
        <Button
          as={RouterLink}
          to="/market"
          colorScheme="teal"
          size="lg"
        >
          Go to Marketplace
        </Button>
      </Box>
    </Box>
  );
}
