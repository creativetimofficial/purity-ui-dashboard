import React, { useState } from "react";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { NavLink, useHistory } from "react-router-dom";
import { signup } from "services/userService";
import { useDispatch } from 'react-redux';

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Attempting to sign up with:', formData);
      const response = await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      console.log('Signup response:', response);

      // Show success message
      toast({
        title: "Account created.",
        description: "Your account has been created successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Store token if remember me is checked
      if (formData.rememberMe && response?.token) {
        dispatch({ type: "auth/setToken", payload: response.token });
      }

      // Use history.push instead of window.location.href
      history.push('/auth/signin');
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Error creating account.",
        description: error.response?.data?.message || error.message || "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage={BgSignUp}
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}></Box>
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='6.5rem'
        mb='30px'>
        <Text fontSize='4xl' color='white' fontWeight='bold'>
          Welcome!
        </Text>
        <Text
          fontSize='md'
          color='white'
          fontWeight='normal'
          mt='10px'
          mb='26px'
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}>
          Use these awesome forms to login or create new account in your project
          for free.
        </Text>
      </Flex>
      <Flex
        direction='column'
        w='445px'
        background='transparent'
        borderRadius='15px'
        p='40px'
        mx={{ base: "100px" }}
        bg={bgColor}
        boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
        <Text
          fontSize='xl'
          color={textColor}
          fontWeight='bold'
          textAlign='center'
          mb='22px'>
          Register With
        </Text>
        <HStack spacing='15px' justify='center' mb='22px'>
          <Flex
            justify='center'
            align='center'
            w='75px'
            h='75px'
            borderRadius='15px'
            border='1px solid lightgray'
            cursor='pointer'
            transition='all .25s ease'
            _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
            <Link href='#'>
              <Icon
                as={FaFacebook}
                w='30px'
                h='30px'
                _hover={{ filter: "brightness(120%)" }}
              />
            </Link>
          </Flex>
          <Flex
            justify='center'
            align='center'
            w='75px'
            h='75px'
            borderRadius='15px'
            border='1px solid lightgray'
            cursor='pointer'
            transition='all .25s ease'
            _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
            <Link href='#'>
              <Icon
                as={FaApple}
                w='30px'
                h='30px'
                _hover={{ filter: "brightness(120%)" }}
              />
            </Link>
          </Flex>
          <Flex
            justify='center'
            align='center'
            w='75px'
            h='75px'
            borderRadius='15px'
            border='1px solid lightgray'
            cursor='pointer'
            transition='all .25s ease'
            _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
            <Link href='#'>
              <Icon
                as={FaGoogle}
                w='30px'
                h='30px'
                _hover={{ filter: "brightness(120%)" }}
              />
            </Link>
          </Flex>
        </HStack>
        <Text
          fontSize='lg'
          color='gray.400'
          fontWeight='bold'
          textAlign='center'
          mb='22px'>
          or
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Name
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your full name'
              mb='24px'
              size='lg'
              required
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Email
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your email address'
              mb='24px'
              size='lg'
              required
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Password
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Your password'
              mb='24px'
              size='lg'
              required
            />
            <FormControl display='flex' alignItems='center' mb='24px'>
              <Switch
                id='remember-login'
                name='rememberMe'
                isChecked={formData.rememberMe}
                onChange={handleChange}
                colorScheme='teal'
                me='10px'
              />
              <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                Remember me
              </FormLabel>
            </FormControl>
            <Button
              type='submit'
              bg='teal.300'
              fontSize='10px'
              color='white'
              fontWeight='bold'
              w='100%'
              h='45'
              mb='24px'
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}
              isLoading={isLoading}
              loadingText="Signing up...">
              SIGN UP
            </Button>
          </FormControl>
        </form>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          maxW='100%'
          mt='0px'>
          <Text color={textColor} fontWeight='medium'>
            Already have an account?
            <NavLink to="/auth/signin">
              <Link color={titleColor} as='span' ms='5px' fontWeight='bold'>
                Sign In
              </Link>
            </NavLink>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
