// Chakra imports
import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TransactionRow from "components/Tables/TransactionRow";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const Transactions = ({
  title,
  date,
  newestTransactions,
  olderTransactions,
}) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card my='24px' ms={{ lg: "24px" }}>
      <CardHeader mb='12px'>
        <Flex direction='column' w='100%'>
          <Flex
            direction={{ sm: "column", lg: "row" }}
            justify={{ sm: "center", lg: "space-between" }}
            align={{ sm: "center" }}
            w='100%'
            my={{ md: "12px" }}>
            <Text
              color={textColor}
              fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
              fontWeight='bold'>
              {title}
            </Text>
            <Flex align='center'>
              <Icon
                as={FaRegCalendarAlt}
                color='gray.400'
                fontSize='md'
                me='6px'></Icon>
              <Text color='gray.400' fontSize='sm' fontWeight='semibold'>
                {date}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction='column' w='100%'>
          <Text
            color='gray.400'
            fontSize={{ sm: "sm", md: "md" }}
            fontWeight='semibold'
            my='12px'>
            NEWEST
          </Text>
          {newestTransactions.map((row) => {
            return (
              <TransactionRow
                name={row.name}
                logo={row.logo}
                date={row.date}
                price={row.price}
              />
            );
          })}
          <Text
            color='gray.400'
            fontSize={{ sm: "sm", md: "md" }}
            fontWeight='semibold'
            my='12px'>
            OLDER
          </Text>
          {olderTransactions.map((row) => {
            return (
              <TransactionRow
                name={row.name}
                logo={row.logo}
                date={row.date}
                price={row.price}
              />
            );
          })}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Transactions;
