import { Box, SimpleGrid, Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import MarketHero from '../components/MarketHero';
import EnergyCard from '../components/EnergyCard';
import App from '../App'; // 你的钱包连接逻辑

const dummyData = [
  { title: '光伏项目 #1', price: 1.2, location: '杭州' },
  { title: '光伏项目 #2', price: 0.9, location: '广州' },
  { title: '光伏项目 #3', price: 1.5, location: '上海' },
];

const Market = () => {
  return (
    <>
      <Navbar />
      <MarketHero />
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {dummyData.map((item, idx) => (
            <EnergyCard key={idx} {...item} />
          ))}
        </SimpleGrid>
        <Box mt={12}>
          <App /> {/* 钱包连接和智能合约逻辑 */}
        </Box>
      </Container>
    </>
  );
};

export default Market;