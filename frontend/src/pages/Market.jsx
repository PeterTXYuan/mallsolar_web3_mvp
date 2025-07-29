import { Box, SimpleGrid, Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import MarketHero from '../components/MarketHero';
import EnergyCard from '../components/EnergyCard';
import App from '../App'; // 你的钱包连接逻辑

const dummyData = [
  { title: 'Photovoltaic Power Project #1', price: 1.2, location: 'Hangzhou' },
  { title: 'Photovoltaic Power Project #2', price: 0.9, location: 'Tianjin' },
  { title: 'Photovoltaic Power Project #3', price: 1.5, location: 'Shanghai' },
  { title: 'Photovoltaic Power Project #4', price: 3.0, location: 'Guangzhou' },
  { title: 'Photovoltaic Power Project #5', price: 1.8, location: 'Beijing' },
];

const Market = () => {
  return (
    <>
      <Navbar />
      <MarketHero />
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="40px" spacing={10}>
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