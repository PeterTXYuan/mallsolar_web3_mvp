import { Box, Heading, Text } from '@chakra-ui/react';

const MarketHero = () => {
  return (
    <Box textAlign="center" py={12} bg="gray.100">
      <Heading as="h1" size="xl" mb={4}>
        去中心化电力市场
      </Heading>
      <Text fontSize="lg" color="gray.600">
        发现、购买、出售绿色能源 — 让能源更自由
      </Text>
    </Box>
  );
};

export default MarketHero;