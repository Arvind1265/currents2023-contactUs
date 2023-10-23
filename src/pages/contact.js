import React, { useState } from 'react';
import { ChakraProvider, Box, Center, CSSReset, extendTheme, Input, Textarea, Button, FormControl, FormLabel, VStack } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    brand: {
      purple: '#76107E',
      brightPurple: '#E241E0',
      pink: '#EF4D84',
      darkPink: '#D550A6',
    },
  },
});

function ContactUs() {
  const [contactDetails, setContactDetails] = useState({ name: " ", email: " ", college: "  ", query: " " });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactDetails);
  };

  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Center minH="100vh">
        <Box
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          bgGradient="linear(to-t, brand.purple, brand.brightPurple, brand.pink, brand.darkPink)"
          boxShadow="lg"
          maxW="650px"
          height={650}
          width={650}
          w="100%"
          margin="auto"
        >
          <VStack spacing={4}>
            <Box marginTop={25} fontSize={30} color="white">
              Contact Us
            </Box>
            <form onSubmit={handleSubmit}>
              <FormControl marginTop={5} width={500}>
                <FormLabel htmlFor="name" color="white">Name:</FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={contactDetails.name}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl marginTop={5} width={500}>
                <FormLabel htmlFor="email" color="white">Email:</FormLabel>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  value={contactDetails.email}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl marginTop={5} width={500}>
                <FormLabel htmlFor="college" color="white">College:</FormLabel>
                <Input
                  type="text"
                  id="college"
                  name="college"
                  value={contactDetails.college}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl marginTop={5} width={500}>
                <FormLabel htmlFor="query" color="white">Query:</FormLabel>
                <Textarea
                  id="query"
                  name="query"
                  value={contactDetails.query}
                  onChange={handleInputChange}
                />
              </FormControl>

              <Center>
                <Button
                  colorScheme="brand.pink"
                  backgroundColor="white"
                  color="#e600ac"
                  type="submit"
                  marginTop={10}
                >
                  SUBMIT
                </Button>
              </Center>
            </form>
          </VStack>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default ContactUs;
