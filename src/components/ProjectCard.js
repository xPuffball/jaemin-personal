import React from 'react'
import { Box, Center, Stack, HStack, Text} from '@chakra-ui/react'

function ProjectCard(props) {
    const { name, desc, tech } = props
    return (
        <Box rounded="md" w="49%" minH="16.8vh" shadow="md" padding="5vh">
            <Stack>
                <Text>{name}</Text>
                <Text>{desc}</Text>
                <HStack>{tech}</HStack>
            </Stack>
        </Box>
    )
}

export default ProjectCard;