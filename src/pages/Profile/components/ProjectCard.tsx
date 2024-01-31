// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const ProjectCard = ({ image, name, category, avatars, description }) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction='column'>
      <Box mb='20px' position='relative' borderRadius='15px'>
        <Image src={image} borderRadius='15px' />
        <Box
          w='100%'
          h='100%'
          position='absolute'
          top='0'
          borderRadius='15px'
          bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'></Box>
      </Box>
      <Flex direction='column'>
        <Text fontSize='md' color='gray.500' fontWeight='600' mb='10px'>
          {name}
        </Text>
        <Text fontSize='xl' color={textColor} fontWeight='bold' mb='10px'>
          {category}
        </Text>
        <Text fontSize='md' color='gray.500' fontWeight='400' mb='20px'>
          {description}
        </Text>
        <Flex justifyContent='space-between'>
          <Button
            variant='outline'
            colorScheme='teal'
            minW='110px'
            h='36px'
            fontSize='xs'
            px='1.5rem'>
            VIEW PROJECT
          </Button>
          <AvatarGroup size='xs'>
            {avatars.map((el, idx) => {
              return <Avatar src={el} key={idx} />;
            })}
          </AvatarGroup>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
