import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import IconBox from "components/Icons/IconBox";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import BillingRow from "components/Tables/BillingRow";
import InvoicesRow from "components/Tables/InvoicesRow";
import TranzactionRow from "components/Tables/TranzactionRow";
import React from "react";
import {
  FaPaypal,
  FaPencilAlt,
  FaRegCalendarAlt,
  FaWallet,
} from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTranzactions,
  olderTranzactions,
} from "variables/general";

function Billing() {
  // Chakra color mode
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "gray.500");
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows="1fr">
        <Box>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
            templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
            gap="26px"
          >
            <Card
              backgroundImage={BackgroundCard1}
              backgroundRepeat="no-repeat"
              background="cover"
              bgPosition="10%"
              h={{ sm: "220px", xl: "100%" }}
              p="1rem"
              gridArea={{ md: "1 / 1 / 2 / 3", xl: "1 / 1 / 2 / 3" }}
            >
              <CardBody p="0px" h="100%" w="100%">
                <Flex
                  direction="column"
                  color="white"
                  h="100%"
                  p="0px 10px 20px 10px"
                  w="100%"
                >
                  <Flex justify="space-between" align="center">
                    <Text fontSize="md" fontWeight="bold">
                      Chakra UI
                    </Text>
                    <Icon
                      as={RiMastercardFill}
                      w="48px"
                      h="auto"
                      color="gray.400"
                    />
                  </Flex>
                  <Spacer />
                  <Flex direction="column">
                    <Box>
                      <Text fontSize="xl" letterSpacing="2px" fontWeight="bold">
                        7812 2139 0823 XXXX
                      </Text>
                    </Box>
                    <Flex mt="14px">
                      <Flex direction="column" me="34px">
                        <Text fontSize="xs">VALID THRU</Text>
                        <Text fontSize="xs" fontWeight="bold">
                          05/24
                        </Text>
                      </Flex>
                      <Flex direction="column">
                        <Text fontSize="xs">CVV</Text>
                        <Text fontSize="xs" fontWeight="bold">
                          09X
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
            <Card
              p="1rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CardBody p="0px">
                <Flex direction="column" alignItems="center" w="100%" py="14px">
                  <IconBox as="box" h={"60px"} w={"60px"} bg={iconTeal}>
                    <Icon h={"24px"} w={"24px"} color="white" as={FaWallet} />
                  </IconBox>
                  <Flex
                    direction="column"
                    m="14px"
                    justifyContent="center"
                    textAlign="center"
                    alignItems="center"
                    w="100%"
                  >
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                      Salary
                    </Text>
                    <Text fontSize="xs" color="gray.400" fontWeight="semibold">
                      Belong Interactive
                    </Text>
                    <Box
                      h="1px"
                      bg="gray.600"
                      w="70%"
                      mb="12px"
                      mt="24px"
                    ></Box>
                  </Flex>
                  <Text fontSize="lg" color={textColor} fontWeight="bold">
                    +$2000
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card
              p="1rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CardBody p="0px">
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                >
                  <IconBox as="box" h={"60px"} w={"60px"} bg={iconTeal}>
                    <Icon h={"24px"} w={"24px"} color="white" as={FaPaypal} />
                  </IconBox>
                  <Flex
                    direction="column"
                    m="14px"
                    justify="center"
                    textAlign="center"
                    align="center"
                    w="100%"
                  >
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                      Paypal
                    </Text>
                    <Text fontSize="xs" color="gray.400" fontWeight="semibold">
                      Freelance Payment
                    </Text>
                    <Box
                      h="1px"
                      bg="gray.600"
                      w="70%"
                      mb="12px"
                      mt="24px"
                    ></Box>
                  </Flex>
                  <Text fontSize="lg" color={textColor} fontWeight="bold">
                    $455.00
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </Grid>
          <Card p="1rem" mt="24px">
            <Flex justify="space-between" align="center" minHeight="60px">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Payment Method
              </Text>
              <Button
                bg={bgButton}
                color="white"
                fontSize="xs"
                variant="no-hover"
              >
                ADD NEW CARD
              </Button>
            </Flex>
            <Flex
              direction={{ sm: "column", md: "row" }}
              alignItems="center"
              justifyContent="center"
              py="1rem"
            >
              <Flex
                p="1rem"
                bg="transparent"
                borderRadius="15px"
                width="100%"
                border="1px solid"
                borderColor={borderColor}
                alignItems="center"
                mb={{ sm: "24px", md: "0px" }}
                me={{ sm: "0px", md: "24px" }}
              >
                <IconBox me="10px" w="25px" h="22px">
                  <MastercardIcon w="100%" h="100%" />
                </IconBox>
                <Text color="gray.400" fontSize="md" fontWeight="semibold">
                  7812 2139 0823 XXXX
                </Text>
                <Spacer />
                <Button
                  p="0px"
                  bg="transparent"
                  w="16px"
                  h="16px"
                  variant="no-hover"
                >
                  <Icon as={FaPencilAlt} />
                </Button>
              </Flex>
              <Flex
                p="1rem"
                bg="transparent"
                borderRadius="15px"
                width="100%"
                border="1px solid"
                borderColor={borderColor}
                alignItems="center"
              >
                <IconBox me="10px" w="25px" h="25px">
                  <VisaIcon w="100%" h="100%" />
                </IconBox>
                <Text color="gray.400" fontSize="md" fontWeight="semibold">
                  7812 2139 0823 XXXX
                </Text>
                <Spacer />
                <Button
                  p="0px"
                  bg="transparent"
                  w="16px"
                  h="16px"
                  variant="no-hover"
                >
                  <Icon as={FaPencilAlt} />
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Box>
        <Card
          p="22px"
          my={{ sm: "24px", lg: "0px" }}
          ms={{ sm: "0px", lg: "24px" }}
        >
          <Flex justifyContent="space-between" alignItems="center" mb="1rem">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Invoices
            </Text>
            <Button
              colorScheme="teal"
              borderColor="teal.300"
              color="teal.300"
              variant="outline"
              fontSize="xs"
              p="8px 32px"
            >
              VIEW ALL
            </Button>
          </Flex>
          <Flex direction="column">
            {invoicesData.map((row) => {
              return (
                <InvoicesRow
                  date={row.date}
                  code={row.code}
                  price={row.price}
                  logo={row.logo}
                  format={row.format}
                />
              );
            })}
          </Flex>
        </Card>
      </Grid>
      <Grid templateColumns={{ sm: "1fr", lg: "1.6fr 1.2fr" }}>
        <Card p="22px" my={{ lg: "24px" }} me={{ lg: "24px" }}>
          <Flex direction="column">
            <CardHeader px="0px" py="12px">
              <Text color={textColor} fontSize="lg" fontWeight="bold">
                Billing Information
              </Text>
            </CardHeader>
            <Flex direction="column">
              {billingData.map((row) => {
                return (
                  <BillingRow
                    name={row.name}
                    company={row.company}
                    email={row.email}
                    number={row.number}
                  />
                );
              })}
            </Flex>
          </Flex>
        </Card>
        <Card p="22px" my="24px" ms={{ lg: "24px" }}>
          <CardHeader p="0px" py="12px">
            <Flex direction="column" w="100%">
              <Flex
                direction={{ sm: "column", lg: "row" }}
                justifyContent={{ sm: "center", lg: "space-between" }}
                alignItems={{ sm: "center" }}
                w="100%"
                my={{ md: "12px" }}
              >
                <Text
                  color={textColor}
                  fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                  fontWeight="bold"
                >
                  Your Transactions
                </Text>
                <Flex alignItems="center">
                  <Icon
                    as={FaRegCalendarAlt}
                    color="gray.400"
                    fontSize="md"
                    me="6px"
                  ></Icon>
                  <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                    23 - 30 March 2021
                  </Text>
                </Flex>
              </Flex>
              <Text
                color="gray.400"
                fontSize={{ sm: "sm", md: "md" }}
                fontWeight="semibold"
                my="12px"
              >
                NEWEST
              </Text>
              {newestTranzactions.map((row) => {
                return (
                  <TranzactionRow
                    name={row.name}
                    logo={row.logo}
                    date={row.date}
                    price={row.price}
                  />
                );
              })}
              <Text
                color="gray.400"
                fontSize={{ sm: "sm", md: "md" }}
                fontWeight="semibold"
                my="12px"
              >
                OLDER
              </Text>
              {olderTranzactions.map((row) => {
                return (
                  <TranzactionRow
                    name={row.name}
                    logo={row.logo}
                    date={row.date}
                    price={row.price}
                  />
                );
              })}
            </Flex>
          </CardHeader>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Billing;
