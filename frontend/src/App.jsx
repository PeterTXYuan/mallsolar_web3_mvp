import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import {
  Box,
  Button,
  Input,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import MallSolar from './contracts/MallSolar.json';
import { Link } from 'react-router-dom';

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [location, setLocation] = useState('');
  const [energy, setEnergy] = useState('');

  useEffect(() => {
    console.log('✅ Contract Address:', CONTRACT_ADDRESS);
  }, []);

  const connect = async () => {
    if (!window.ethereum) return alert("Please download MetaMask");

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      const c = new ethers.Contract(CONTRACT_ADDRESS, MallSolar.abi, signer);
      setAccount(addr);
      setContract(c);
    } catch (err) {
      console.error(err);
      alert("Connection failed: " + err.message);
    }
  };

  const register = async () => {
    if (!location || !energy) {
      return alert("Please fill out every blank");
    }
    try {
      const tx = await contract.registerAsset(location, Number(energy));
      await tx.wait();
      alert("✅ Asset has been successfully registered!");
    } catch (err) {
      console.error(err);
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <Box p={6}
    maxW="md"
    mx="auto"
    minH="20vh"
    display="grid"
    placeItems="center">
      <Heading mb={6} textAlign="center" color="teal.500">
        MallSolar Web3
      </Heading>

      {account ? (
        <VStack spacing={4}>
          <Text color="gray.600">Connected: {account}</Text>

          <Input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <Input
            placeholder="Power (kWh)"
            value={energy}
            onChange={(e) => setEnergy(e.target.value)}
          />

          <Button colorScheme="teal" onClick={register}>
            Register assets
          </Button>

          <Button as={Link} to="/market" colorScheme="blue" variant="outline">
            Go to Market tab
          </Button>
        </VStack>
      ) : (
        <Button colorScheme="blue" onClick={connect}>
          Connect to MetaMask Wallet
        </Button>
      )}

    </Box>
  );
}

export default App;