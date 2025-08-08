/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  SimpleGrid,
  Image,
  Stack
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../components/Navbar";

const infoData = {
  login: {
    title: "Login",
    description: "Access your MallSolar account securely.",
    buttonText: "Login Now",
    route: "/login",
  },
  market: {
    title: "Marketplace",
    description: "Explore the decentralized energy market.",
    buttonText: "Enter Market",
    route: "/market",
  },
  about: {
    title: "About Us",
    description: "Learn more about the mission behind MallSolar.",
    buttonText: "Read More",
    route: "/about",
  },
};

export default function Home() {
  const [selected, setSelected] = useState("login");

  return (
    <Box
      minH="100vh"
      color="white"
      css={{
        "@keyframes fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      {/* 顶部导航栏 */}
      <Navbar />

      {/* 信息卡片 */}
      <Box
        w="full"
        minH="60vh"
        px={{ base: 6, md: 20 }}
        py={{ base: 10, md: 16 }}
        bgGradient="to-r"
        gradientFrom="teal.200"
        gradientTo="blue.200"
        color="gray.800"
        data-state="open"
        _open={{
          animation: "fade-in 600ms ease-out",
        }}
        shadow="xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <VStack spacing={8} textAlign="center" maxW="5xl">
          <Heading fontSize={{ base: "3xl", md: "5xl" }} color="teal.600" marginBottom="30px">
            {infoData[selected].title}
          </Heading>
          <Text fontSize="xl" lineHeight="tall" marginBottom="30px">
            {infoData[selected].description}
          </Text>
          <Button
            as={RouterLink}
            to={infoData[selected].route}
            colorScheme="teal"
            size="lg"
            bg="yellow.300"
            color="black"
            _hover={{ bg: "white", color: "blue.600", opacity: 1 }}
            rounded="full"
            px={10}
          >
            {infoData[selected].buttonText}
          </Button>

        </VStack>

        {/* 三个选项按钮栏 */}
        <HStack
          position="absolute"
          bottom="40px"
          left="50%"
          transform="translateX(-50%)"
          zIndex="10"
        >
          {["login", "market", "about"].map((key) => (
            <Button
              key={key}
              variant="surface"
              fontSize="lg"
              px={20}
              py={12}
              opacity={0.7}
              marginTop={12}
              borderColor="black"
              borderWidth="1px"
              bg="rgba(255,255,255,0.5)"
              _hover={{ bg: "white", color: "blue.600", opacity: 1 }}
              onClick={() => setSelected(key)}
              isActive={selected === key}
            >
              {infoData[key].title}
            </Button>
          ))}
          </HStack>

      </Box>

      {/* Section 1: Our Mission */}
      <Box bg="gray.50" py={20} px={{ base: 6, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Image src="/something.jpg" alt="Solar Panels" borderRadius="md" />
          <VStack align="start" spacing={4}>
            <Heading color="teal.600">Our Mission</Heading>
            <Text color="gray.700" fontSize="lg">
              Empower communities worldwide to generate, trade, and consume clean energy through a transparent, decentralized marketplace powered by blockchain technology.
            </Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Section 2: Why MallSolar */}
      <Box bg="white" py={20} px={{ base: 6, md: 20 }}>
        <Heading textAlign="center" mb={10} color="teal.600">Why MallSolar?</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Box textAlign="center" p={6} shadow="md" borderRadius="md">
            <Heading size="md" mb={3} color="gray.800">Decentralized Trading</Heading>
            <Text color="gray.600">Trade energy directly without intermediaries, reducing costs and increasing transparency.</Text>
          </Box>
          <Box textAlign="center" p={6} shadow="md" borderRadius="md">
            <Heading size="md" mb={3} color="gray.800">Smart Contract Security</Heading>
            <Text color="gray.600">All transactions are automated and secured through blockchain-based smart contracts.</Text>
          </Box>
          <Box textAlign="center" p={6} shadow="md" borderRadius="md">
            <Heading size="md" mb={3} color="gray.800">Sustainable & Green</Heading>
            <Text color="gray.600">Promoting renewable energy adoption and sustainable consumption globally.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Section 3: Advantages */}
      <Box bgGradient="to-r" gradientFrom="teal.50" gradientTo="blue.50" py={20} px={{ base: 6, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" mb={16}>
          <Image src="/smart-contract.jpg" alt="Smart Contract" borderRadius="md" />
          <Stack spacing={4}>
            <Heading color="teal.600">Transparent Energy Market</Heading>
            <Text color="gray.700">
              Our blockchain-powered marketplace ensures every transaction is verifiable, secure, and immutable.
            </Text>
          </Stack>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Stack spacing={4}>
            <Heading color="teal.600">Global Community Impact</Heading>
            <Text color="gray.700">
              By connecting energy producers and consumers worldwide, we enable fair access to clean energy.
            </Text>
          </Stack>
          <Image src="/global-community.jpg" alt="Global Community" borderRadius="md" />
        </SimpleGrid>
      </Box>

      {/* Section 4: Call to Action */}
      <Box bg="teal.600" py={16} textAlign="center" color="white">
        <Heading mb={4}>Join the Energy Revolution</Heading>
        <Text fontSize="lg" mb={8}>Be part of a global movement towards a cleaner, decentralized future.</Text>
        <Button as={RouterLink} to="/market" size="lg" colorScheme="yellow">
          Go to Marketplace
        </Button>
      </Box>

      
    </Box>
  );
}


