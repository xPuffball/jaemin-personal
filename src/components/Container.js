import {
  Box,
  Stack,
  Center,
  Text,
  Flex,
  Image,
  Link,
  HStack
} from '@chakra-ui/react';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'

function Container() {
  return (
    <Stack rounded="2xl" h="50vh" maxW="90%" m="auto" direction="row" spacing='0' shadow="lg">
      <Flex padding="5vh" w="25%" roundedLeft="2xl" backgroundImage="bg4.jpg">
        <Center>
          <Stack color="white" fontWeight="400">
            <Image src='Logo.png' rounded="md" boxSize="12vh"></Image>
            <Stack spacing="-0.5vh">
              <Text fontSize="25">jaemin han</Text>
              <Text>@poof</Text>
            </Stack>
            <Box>
              <Text fontSize='xl'>fullstack web developer</Text>
            </Box>
            <Stack spacing="1px">
              <HStack spacing='5px'><AiFillGithub/><Link href="https://github.com/xPuffball">github</Link></HStack>
              <HStack spacing='5px'><AiFillLinkedin/><Link href="https://www.linkedin.com/in/hanjaemin/">linkedin</Link></HStack>
              <HStack spacing='5px'><FaDiscord/><Text>poof#5402</Text></HStack>
              <HStack spacing='5px'><AiOutlineMail/><Text>j4emin.han@gmail.com</Text></HStack>
            </Stack>
            <Box>
              <HStack><ImLocation/><Text>toronto</Text></HStack>
            </Box>
          </Stack>
        </Center>
      </Flex>
      <Box w = "75%" bg="white" roundedRight="2xl" padding="5vh">
        <Stack>
          <Text fontSize="50" fontWeight="900">
            my work.
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Container;