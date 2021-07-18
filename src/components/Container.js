import {
  Box,
  Stack,
  Center
} from '@chakra-ui/react';

function Container() {
  return (
    <Stack rounded="3xl" h="50vh" maxW="90%" m="auto" direction="row" shadow="lg">
      <Box w="25%" bg="red" roundedLeft="3xl"></Box>
      <Box w = "75%" bg="blue" roundedRight="3xl">2</Box>
    </Stack>
  );
}

export default Container;