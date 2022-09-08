// Chakra imports
import {
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import IconBox from "components/Icons/IconBox";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const PaymentMethod = ({ title, mastercard, visa }) => {
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "gray.500");
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );

  return (
    <Card p='16px' mt='24px'>
      <CardHeader>
        <Flex justify='space-between' align='center' minHeight='60px' w='100%'>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            {title}
          </Text>
          <Button bg={bgButton} color='white' fontSize='xs' variant='no-hover'>
            ADD NEW CARD
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align='center'
          w='100%'
          justify='center'
          py='1rem'>
          <Flex
            p='1rem'
            bg='transparent'
            borderRadius='15px'
            width='100%'
            border='1px solid'
            borderColor={borderColor}
            align='center'
            mb={{ sm: "24px", md: "0px" }}
            me={{ sm: "0px", md: "24px" }}>
            <IconBox me='10px' w='25px' h='22px'>
              {mastercard.icon}
            </IconBox>
            <Text color='gray.400' fontSize='md' fontWeight='semibold'>
              {mastercard.number}
            </Text>
            <Spacer />
            <Button
              p='0px'
              bg='transparent'
              w='16px'
              h='16px'
              variant='no-hover'>
              <Icon as={FaPencilAlt} />
            </Button>
          </Flex>
          <Flex
            p='16px'
            bg='transparent'
            borderRadius='15px'
            width='100%'
            border='1px solid'
            borderColor={borderColor}
            align='center'>
            <IconBox me='10px' w='25px' h='25px'>
              {visa.icon}
            </IconBox>
            <Text color='gray.400' fontSize='md' fontWeight='semibold'>
              {visa.number}
            </Text>
            <Spacer />
            <Button
              p='0px'
              bg='transparent'
              w='16px'
              h='16px'
              variant='no-hover'>
              <Icon as={FaPencilAlt} />
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default PaymentMethod;
