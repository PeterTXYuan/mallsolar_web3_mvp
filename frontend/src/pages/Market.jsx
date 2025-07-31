import { Box, SimpleGrid, Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import MarketHero from '../components/MarketHero';
import EnergyCard from '../components/EnergyCard';
import App from '../App'; 

const dummyData = [
  { title: 'Photovoltaic Power Project #1', price: 1.2, location: 'Seattle' },
  { title: 'Photovoltaic Power Project #2', price: 0.9, location: 'New York City' },
  { title: 'Photovoltaic Power Project #3', price: 1.5, location: 'Los Angeles' },
  { title: 'Photovoltaic Power Project #4', price: 3.0, location: 'San Francisco' },
  { title: 'Photovoltaic Power Project #5', price: 1.8, location: 'Miami' },
];

const Market = () => {
  return (
    <Box
      minH="100vh"
      bgImage="url('/solar.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box
        p={6}
        maxW="1400px"
        mx="auto"
        backdropFilter="blur(4px)"
        bg="rgba(255,255,255,0.85)"
        borderRadius="lg"
        boxShadow="lg"
      >
        <Navbar />
        <MarketHero />
        <Container maxW="6xl" py={10}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="40px" spacing={10}>
            {dummyData.map((item, idx) => (
              <EnergyCard key={idx} {...item} />
            ))}
          </SimpleGrid>
          <Box mt={12}>
            <App />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Market;