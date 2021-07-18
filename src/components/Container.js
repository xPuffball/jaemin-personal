import {
  Box,
  Stack,
  Center,
  Text,
  Flex,
  Image
} from '@chakra-ui/react';

function Container() {
  return (
    <Stack rounded="2xl" h="50vh" maxW="90%" m="auto" direction="row" shadow="lg">
      <Flex padding="5vh" w="25%" roundedLeft="2xl" backgroundImage="bg4.jpg">
        <Center>
          <Stack color="white" fontWeight="400">
            <Image src='Logo.png' rounded="md" boxSize="12vh"></Image>
            <Box>
              <Text fontSize="25">jaemin han</Text>
            </Box>
            <Box>
              <Text fontSize='lg'>fullstack web developer</Text>
            </Box>
            <Box>
              <Text>github</Text>
              <Text>linkedin</Text>
              <Text>discord</Text>
              <Text>email</Text>
              <Text>location</Text>
            </Box>
          </Stack>
        </Center>
      </Flex>
      <Box w = "75%" bg="blue" roundedRight="2xl">2</Box>
    </Stack>
  );
}

export default Container;