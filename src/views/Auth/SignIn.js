import React, { useState } from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import api from "services/api";
// Assets
import signInImage from "assets/img/signInImage.png";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const toast = useToast();

  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await api.post("/auth/signin", {
        email,
        password,
      });

      // Check if we got a valid response (including 304)
      if (response.status === 304) {
        // For 304, we need to check if we have the token in the cached response
        if (!response.data || !response.data.token) {
          throw new Error('Invalid credentials');
        }
      } else if (!response.data || !response.data.token) {
        throw new Error('Invalid credentials');
      }

      dispatch({ type: "auth/setToken", payload: response.data.token });
      toast({
        title: "Success",
        description: "Signed in successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      history.push("/admin");
    } catch (error) {
      // Always show invalid credentials message if we don't get a valid token
      toast({
        title: "Invalid Credentials",
        description: "The email or password you entered is incorrect. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex position='relative' mb='40px'>
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ sm: "100px", md: "0px" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            p='48px'
            mt={{ md: "150px", lg: "80px" }}>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Welcome Back
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Enter your email and password to sign in
            </Text>
            <FormControl as="form" onSubmit={handleSubmit}>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Email
              </FormLabel>
              <Input
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='email'
                placeholder='Your email address'
                size='lg'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Password
              </FormLabel>
              <Input
                borderRadius='15px'
                mb='36px'
                fontSize='sm'
                type='password'
                placeholder='Your password'
                size='lg'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FormControl display='flex' alignItems='center'>
                <Switch id='remember-login' colorScheme='teal' me='10px' />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  ms='1'
                  fontWeight='normal'>
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                fontSize='10px'
                type='submit'
                bg='teal.300'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mt='20px'
                isLoading={isLoading}
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}>
                SIGN IN
              </Button>
            </FormControl>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Don't have an account?
                <NavLink to="/auth/signup">
                  <Link color={titleColor} as='span' ms='5px' fontWeight='bold'>
                    Sign Up
                  </Link>
                </NavLink>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='100%'
          w='40vw'
          position='absolute'
          right='0px'>
          <Box
            bgImage={signInImage}
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            borderBottomLeftRadius='20px'></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
