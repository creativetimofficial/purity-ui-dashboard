// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Portal,
  Progress,
  SimpleGrid,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React, { useState } from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { dashboardTableData, timelineData } from "variables/general";

export default function Dashboard() {
  const value = "$100.000";
  // Chakra Color Mode
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const [series, setSeries] = useState([
    {
      type: "area",
      name: "Mobile apps",
      data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150],
    },
    {
      type: "area",
      name: "Websites",
      data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
    },
  ]);
  const overlayRef = React.useRef();

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  Today's Money
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor}>
                    $53,000
                  </StatNumber>
                  <StatHelpText
                    alignSelf="flex-end"
                    justifySelf="flex-end"
                    m="0px"
                    color="green.400"
                    fontWeight="bold"
                    ps="3px"
                    fontSize="md"
                  >
                    +55%
                  </StatHelpText>
                </Flex>
              </Stat>
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  Today's Users
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor}>
                    2,300
                  </StatNumber>
                  <StatHelpText
                    alignSelf="flex-end"
                    justifySelf="flex-end"
                    m="0px"
                    color="green.400"
                    fontWeight="bold"
                    ps="3px"
                    fontSize="md"
                  >
                    +5%
                  </StatHelpText>
                </Flex>
              </Stat>
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat>
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  New Clients
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor}>
                    +3,020
                  </StatNumber>
                  <StatHelpText
                    alignSelf="flex-end"
                    justifySelf="flex-end"
                    m="0px"
                    color="red.500"
                    fontWeight="bold"
                    ps="3px"
                    fontSize="md"
                  >
                    -14%
                  </StatHelpText>
                </Flex>
              </Stat>
              <Spacer />
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  Total Sales
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    $173,000
                  </StatNumber>
                  <StatHelpText
                    alignSelf="flex-end"
                    justifySelf="flex-end"
                    m="0px"
                    color="green.400"
                    fontWeight="bold"
                    ps="3px"
                    fontSize="md"
                  >
                    +8%
                  </StatHelpText>
                </Flex>
              </Stat>
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="26px"
        gap="24px"
      >
        <Card minHeight="290.5px" p="1.2rem">
          <CardBody w="100%">
            <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
              <Flex
                flexDirection="column"
                h="100%"
                lineHeight="1.6"
                width={{ lg: "45%" }}
              >
                <Text fontSize="sm" color="gray.400" fontWeight="bold">
                  Built by developers
                </Text>
                <Text
                  fontSize="lg"
                  color={textColor}
                  fontWeight="bold"
                  pb=".5rem"
                >
                  Purity UI Dashboard
                </Text>
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  From colors, cards, typography to complex elements, you will
                  find the full documentation.
                </Text>
                <Spacer />
                <Flex align="center">
                  <Button
                    p="0px"
                    variant="no-hover"
                    bg="transparent"
                    my={{ sm: "1.5rem", lg: "0px" }}
                  >
                    <Text
                      fontSize="sm"
                      color={textColor}
                      fontWeight="bold"
                      cursor="pointer"
                      transition="all .5s ease"
                      my={{ sm: "1.5rem", lg: "0px" }}
                      _hover={{ me: "4px" }}
                    >
                      Read more
                    </Text>
                    <Icon
                      as={BsArrowRight}
                      w="20px"
                      h="20px"
                      fontSize="2xl"
                      transition="all .5s ease"
                      mx=".3rem"
                      cursor="pointer"
                      pt="4px"
                      _hover={{ transform: "translateX(20%)" }}
                    />
                  </Button>
                </Flex>
              </Flex>
              <Spacer />
              <Flex
                bg="teal.300"
                align="center"
                justify="center"
                borderRadius="15px"
                width={{ lg: "40%" }}
                minHeight={{ sm: "250px" }}
              >
                <Image
                  src={logoChakra}
                  alt="chakra image"
                  minWidth={{ md: "300px", lg: "auto" }}
                />
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Card maxHeight="290.5px" p="1rem">
          <CardBody
            p="0px"
            backgroundImage={peopleImage}
            bgPosition="center"
            bgRepeat="no-repeat"
            w="100%"
            h={{ sm: "200px", lg: "100%" }}
            bgSize="cover"
            position="relative"
            borderRadius="15px"
          >
            <Box
              bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
              w="100%"
              position="absolute"
              h="inherit"
              borderRadius="inherit"
              ref={overlayRef}
            ></Box>
            <Portal containerRef={overlayRef}>
              <Flex
                flexDirection="column"
                color="white"
                p="1.5rem 1.2rem 0.3rem 1.2rem"
                lineHeight="1.6"
              >
                <Text fontSize="xl" fontWeight="bold" pb=".3rem">
                  Work with the rockets
                </Text>
                <Text fontSize="sm" fontWeight="normal" w={{ lg: "92%" }}>
                  Wealth creation is a revolutionary recent positive-sum game.
                  It is all about who takes the opportunity first.
                </Text>
                <Spacer />
                <Flex
                  align="center"
                  mt={{ sm: "20px", lg: "40px", xl: "90px" }}
                >
                  <Button p="0px" variant="no-hover" bg="transparent" mt="12px">
                    <Text
                      fontSize="sm"
                      fontWeight="bold"
                      _hover={{ me: "4px" }}
                      transition="all .5s ease"
                    >
                      Read more
                    </Text>
                    <Icon
                      as={BsArrowRight}
                      w="20px"
                      h="20px"
                      fontSize="xl"
                      transition="all .5s ease"
                      mx=".3rem"
                      cursor="pointer"
                      _hover={{ transform: "translateX(20%)" }}
                      pt="4px"
                    />
                  </Button>
                </Flex>
              </Flex>
            </Portal>
          </CardBody>
        </Card>
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <Card p="16px">
          <CardBody>
            <Flex direction="column" w="100%">
              <BarChart />
              <Flex
                direction="column"
                mt="24px"
                mb="36px"
                alignSelf="flex-start"
              >
                <Text
                  fontSize="lg"
                  color={textColor}
                  fontWeight="bold"
                  mb="6px"
                >
                  Active Users
                </Text>
                <Text fontSize="md" fontWeight="medium" color="gray.400">
                  <Text as="span" color="green.400" fontWeight="bold">
                    (+23%)
                  </Text>{" "}
                  than last week
                </Text>
              </Flex>
              <SimpleGrid gap={{ sm: "12px" }} columns={4}>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg={iconTeal}
                      me="6px"
                    >
                      <WalletIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                      Users
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    color={textColor}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    32,984
                  </Text>
                  <Progress
                    colorScheme="teal"
                    borderRadius="12px"
                    h="5px"
                    value={20}
                  />
                </Flex>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg={iconTeal}
                      me="6px"
                    >
                      <RocketIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                      Clicks
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    color={textColor}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    2.42m
                  </Text>
                  <Progress
                    colorScheme="teal"
                    borderRadius="12px"
                    h="5px"
                    value={90}
                  />
                </Flex>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg={iconTeal}
                      me="6px"
                    >
                      <CartIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                      Sales
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    color={textColor}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    2,400$
                  </Text>
                  <Progress
                    colorScheme="teal"
                    borderRadius="12px"
                    h="5px"
                    value={30}
                  />
                </Flex>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg={iconTeal}
                      me="6px"
                    >
                      <StatsIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                      Items
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    color={textColor}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    320
                  </Text>
                  <Progress
                    colorScheme="teal"
                    borderRadius="12px"
                    h="5px"
                    value={50}
                  />
                </Flex>
              </SimpleGrid>
            </Flex>
          </CardBody>
        </Card>
        <Card p="28px 10px 16px 0px" mb={{ sm: "26px", lg: "0px" }}>
          <CardHeader mb="20px" pl="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
                Sales Overview
              </Text>
              <Text fontSize="md" fontWeight="medium" color="gray.400">
                <Text as="span" color="green.400" fontWeight="bold">
                  (+5%) more
                </Text>{" "}
                in 2021
              </Text>
            </Flex>
          </CardHeader>
          <Box w="100%" h={{ sm: "300px" }} ps="8px">
            <LineChart />
          </Box>
        </Card>
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap="24px"
      >
        <Card p="16px" overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="12px 0px 28px 0px">
            <Flex direction="column">
              <Text
                fontSize="lg"
                color={textColor}
                fontWeight="bold"
                pb=".5rem"
              >
                Projects
              </Text>
              <Flex align="center">
                <Icon
                  as={IoCheckmarkDoneCircleSharp}
                  color="teal.300"
                  w={4}
                  h={4}
                  pe="3px"
                />
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  <Text fontWeight="bold" as="span">
                    30 done
                  </Text>{" "}
                  this month.
                </Text>
              </Flex>
            </Flex>
          </CardHeader>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" ps="0px">
                <Th ps="0px" color="gray.400">
                  Companies
                </Th>
                <Th color="gray.400">Members</Th>
                <Th color="gray.400">Budget</Th>
                <Th color="gray.400">Completion</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dashboardTableData.map((row) => {
                return (
                  <DashboardTableRow
                    name={row.name}
                    logo={row.logo}
                    members={row.members}
                    budget={row.budget}
                    progression={row.progression}
                  />
                );
              })}
            </Tbody>
          </Table>
        </Card>
        <Card maxH="100%">
          <CardHeader p="22px 0px 35px 14px">
            <Flex direction="column">
              <Text
                fontSize="lg"
                color={textColor}
                fontWeight="bold"
                pb=".5rem"
              >
                Orders overview
              </Text>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                <Text fontWeight="bold" as="span" color="teal.300">
                  +30%
                </Text>{" "}
                this month.
              </Text>
            </Flex>
          </CardHeader>
          <CardBody ps="20px" pe="0px" mb="31px" position="relative">
            <Flex direction="column">
              {timelineData.map((row, index, arr) => {
                return (
                  <TimelineRow
                    logo={row.logo}
                    title={row.title}
                    date={row.date}
                    color={row.color}
                    index={index}
                    arrLength={arr.length}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}
