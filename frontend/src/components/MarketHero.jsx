import { Box, Heading, Text } from '@chakra-ui/react';

const MarketHero = () => {
  return (
    <Box textAlign="center" py={12} bg="gray.100">
      <Heading as="h1" size="xl" mb={4}>
        Decentralized power market.
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Discover, purchase, and sell green energy — making energy more accessible.
      </Text>
    </Box>
  );
};

export default MarketHero;