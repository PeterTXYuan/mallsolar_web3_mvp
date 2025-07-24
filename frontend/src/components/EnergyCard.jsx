import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';

const EnergyCard = ({ title, price, location }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={6} bg="white" shadow="md">
      <Heading size="md" mb={2}>{title}</Heading>
      <Text mb={1}>位置：{location}</Text>
      <Text mb={4}>价格：{price} ETH</Text>
      <Stack direction="row">
        <Button colorScheme="blue" size="sm">购买</Button>
        <Button variant="outline" size="sm">详情</Button>
      </Stack>
    </Box>
  );
};

export default EnergyCard;