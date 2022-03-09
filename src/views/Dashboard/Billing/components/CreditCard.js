// Chakra imports
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";

const CreditCard = ({
  backgroundImage,
  title,
  icon,
  number,
  validity,
  cvv,
}) => {
  return (
    <Card
      backgroundImage={backgroundImage}
      backgroundRepeat='no-repeat'
      background='cover'
      bgPosition='10%'
      p='16px'
      h={{ sm: "220px", xl: "100%" }}
      gridArea={{ md: "1 / 1 / 2 / 3", xl: "1 / 1 / 2 / 3" }}>
      <CardBody h='100%' w='100%'>
        <Flex
          direction='column'
          color='white'
          h='100%'
          p='0px 10px 20px 10px'
          w='100%'>
          <Flex justify='space-between' align='center'>
            <Text fontSize='md' fontWeight='bold'>
              {title}
            </Text>
            {icon}
          </Flex>
          <Spacer />
          <Flex direction='column'>
            <Box>
              <Text fontSize='xl' letterSpacing='2px' fontWeight='bold'>
                {number}
              </Text>
            </Box>
            <Flex mt='14px'>
              <Flex direction='column' me='34px'>
                <Text fontSize='xs'>{validity.name}</Text>
                <Text fontSize='xs' fontWeight='bold'>
                  {validity.date}
                </Text>
              </Flex>
              <Flex direction='column'>
                <Text fontSize='xs'>{cvv.name}</Text>
                <Text fontSize='xs' fontWeight='bold'>
                  {cvv.code}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CreditCard;
