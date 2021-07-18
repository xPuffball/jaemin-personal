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

import ProjectCard from './ProjectCard'

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'

function Container() {
  return (
    <Stack rounded="2xl" h="50vh" maxW="80%" m="auto" direction="row" spacing='0' shadow="lg">
      <Flex padding="5vh" w="25vh" roundedLeft="2xl" backgroundImage="bg4.jpg">
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
      <Box w = "75vw" bg="white" roundedRight="2xl" paddingLeft="75px" paddingRight="75px" paddingTop="50px" paddingBottom="50px">
        <Text fontSize="50" fontWeight="900">
          my work.
        </Text>
        <Stack 
          padding="10px"
          h="90%" 
          overflowY="scroll"
          css={{
            '&::-webkit-scrollbar': {
              width: '0px',
            }
          }}
        >
          <Flex justify="space-between" mb="18px">
            <ProjectCard name="hobbynet" link="https://github.com/moseskim25/final-project" desc="multi page full stack social media app with search & chat features" tech="node / express / react / psql / socket.io"></ProjectCard>
            <ProjectCard name="lightquiz" link="https://github.com/jesselap/midterm-quiz" desc="fullstack quiz app with user CRUDable quizzes" tech=" node / express / jquery / psql / bootstrap"></ProjectCard>
          </Flex>
          <Flex justify="space-between">
            <ProjectCard name="scheduler" link="https://github.com/xPuffball/scheduler" desc="fullstack react scheduling app" tech="javascript / react / sql / axios"></ProjectCard>
            <ProjectCard name="tinyapp" link="https://github.com/xPuffball/tinyapp" desc="RESTful url shortener w/ bootstrap" tech="node / express / jquery / bootstrap"></ProjectCard>
          </Flex>
          <Flex justify="space-between">
            <ProjectCard name="tweeter" link="https://github.com/xPuffball/tweeter" desc="single page twitter clone w/ ajax" tech="node / express / jquery / ajax"></ProjectCard>
            <ProjectCard name="macaron" link="https://github.com/the-macaron" desc="news app made for nwHacks 2020 (best pitch & honorable mention)" tech="javascript / bootstrap"></ProjectCard>
          </Flex>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Container;