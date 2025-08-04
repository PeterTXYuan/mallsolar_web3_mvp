// import {
//   Box,
//   Heading,
//   Text,
//   Button,
//   VStack,
//   Container,
//   Image,
//   HStack
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";

// const Home = () => {
//   return (
//     <Box
//       minH="100vh"
//       bgImage="url('/solar.jpg')"
//       bgSize="cover"
//       bgPosition="center"
//       color="white"
//     >
//       <Navbar />

//       <Container maxW="6xl" py={20}>
//         <VStack spacing={8} align="start">
//           <Heading fontSize={{ base: "3xl", md: "5xl" }} marginBottom="20px">
//             Empowering the Global Solar Energy Market
//           </Heading>
//           <Text fontSize="lg" maxW="xl" marginBottom="20px">
//             Join a decentralized ecosystem where energy assets are tokenized and traded
//             transparently, securely, and sustainably.
//           </Text>
//           <HStack spacing={4}>
//             <Button colorScheme="teal" as={Link} to="/market">
//               Enter Marketplace
//             </Button>
//             <Button variant="outline" colorScheme="teal" bg="white">
//               Learn More
//             </Button>
//           </HStack>
//         </VStack>
//       </Container>
//     </Box>
//   );
// };

// export default Home;

/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
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

      
    </Box>
  );
}


