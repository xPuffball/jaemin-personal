import React from 'react'
import { Box, Center, Stack, HStack, Text, Flex} from '@chakra-ui/react'
import { FaCode } from 'react-icons/fa'

function ProjectCard(props) {
    const { name, desc, tech } = props
    return (
        <Box rounded="md" w="49%" minH="16.8vh" shadow="md" padding="3vh">
            <Flex direction="column" h="100%" justify="space-around">
                <Text fontSize="5xl" fontWeight="600">{name}</Text>
                <Text fontSize="xl">{desc}</Text>
                <HStack fontSize="md" fontWeight="600"><FaCode/><Text>{tech}</Text></HStack>
            </Flex>
        </Box>
    )
}

export default ProjectCard;