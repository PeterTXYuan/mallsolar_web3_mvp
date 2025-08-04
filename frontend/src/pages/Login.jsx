import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Heading,
  VStack,
  Text,
  IconButton
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaArrowLeft } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // 假登录逻辑
    if (email && password) {
      alert("Login successful (frontend only)");
      navigate('/market');
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      px={4}
    >
      <IconButton
        aria-label="Go Back"
        position="absolute"
        top="4"
        left="4"
        size="lg"
        boxSize={12}
        colorScheme="teal"
        variant="ghost"
        onClick={() => navigate(-1)}
        _hover={{
          bg: 'teal.100',
          transform: 'scale(1.15)',
        }}
        transition="all 0.3s ease"
      >
        <FaArrowLeft />
      </IconButton>

      <Box
        bg="white"
        p={8}
        rounded="md"
        shadow="md"
        width={{ base: '100%', md: '400px' }}
      >
        <Heading mb={6} textAlign="center" size="lg" color="teal.600">
          Log In
        </Heading>
        <VStack spacing={4}>
          <Box w="100%">
            <Text mb={1} fontWeight="medium">Email</Text>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </Box>
          <Box w="100%">
            <Text mb={1} fontWeight="medium">Password</Text>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </Box>
          <Button colorScheme="teal" w="100%" mt={4} onClick={handleLogin}>
            Log In
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;
