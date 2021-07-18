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
      return <p>Thanks for joining!</p>;
  }
  return (
        <Stack
          padding="10px"
          h="90%" 
          padding="10px" 
          overflowY="scroll"
          css={{
            '&::-webkit-scrollbar': {
              width: '0px',
            }
          }}
        >
          <FormControl onSubmit={handleSubmit}>
            <Stack>
              <Stack spacing="-0.5vh" mb="1vh">
                <Text fontSize="6xl" fontWeight="1000">get in touch.</Text>
                <Text fontSize="lg" fontWeight="500">{'or use linkedin or discord.'}</Text>
              </Stack>
              <Input type="email" placeholder="name"/>
              <Input type="email" placeholder="email"/>
              <Input type="email" placeholder="subject"/>
              <Textarea placeholder="what's up?" h="10vh"></Textarea>
              <Button type="submit" disabled={state.submitting}>send me a message</Button>
            </Stack>
          </FormControl>
        </Stack>
  );
}

function App() {
  return (
    <ContactForm />
  );
}
export default App;