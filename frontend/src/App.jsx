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
    if (!window.ethereum) return alert("请先安装 MetaMask 插件");

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
      alert("连接失败: " + err.message);
    }
  };

  const register = async () => {
    if (!location || !energy) {
      return alert("请填写所有字段");
    }
    try {
      const tx = await contract.registerAsset(location, Number(energy));
      await tx.wait();
      alert("✅ 资产已成功注册！");
    } catch (err) {
      console.error(err);
      alert("注册失败: " + err.message);
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
          <Text color="gray.600">已连接: {account}</Text>

          <Input
            placeholder="位置（Location）"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <Input
            placeholder="能源值 (kWh)"
            value={energy}
            onChange={(e) => setEnergy(e.target.value)}
          />

          <Button colorScheme="teal" onClick={register}>
            注册资产
          </Button>

          <Button as={Link} to="/market" colorScheme="blue" variant="outline">
            前往市场页面
          </Button>
        </VStack>
      ) : (
        <Button colorScheme="blue" onClick={connect}>
          连接 MetaMask 钱包
        </Button>
      )}

    </Box>
  );
}

export default App;