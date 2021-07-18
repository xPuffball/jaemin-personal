import React from 'react';
import {
  Stack,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Text
} from '@chakra-ui/react'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mnqlbgnl");
  if (state.succeeded) {
      return (
        <Center padding="10px" h="90%">
          <Text fontSize="50">thanks for getting in touch!</Text>
        </Center>
      )
  }
  return (
        <Stack
          h="90%" 
          overflowY="scroll"
          css={{
            '&::-webkit-scrollbar': {
              width: '0px',
            }
          }}
        >
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Stack>
                <Stack spacing="-1vh" mb="1vh">
                  <Text fontSize="4xl" fontWeight="1000">get in touch.</Text>
                  <Text fontSize="md" fontWeight="500">{'(or @ me on linkedin or discord)'}</Text>
                </Stack>
                <Input id="name" name="name" type="text" placeholder="name"/>
                <Input id="email" type="email" name="email" placeholder="email"/>
                <Input type="text" placeholder="subject"/>
                <Textarea id="message" name="message" placeholder="what's up?" h="10vh"></Textarea>
                <Button type="submit" disabled={state.submitting}>send me a message</Button>
              </Stack>
            </FormControl>
          </form>
        </Stack>
  );
}

export default ContactForm;