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

const ChartStatistics = ({title, amount, icon, percentage}) => {
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");
    const overlayRef = React.useRef();
  return (
    <Flex direction="column">
                    <Flex alignItems="center">
                      <IconBox
                        as="box"
                        h={"30px"}
                        w={"30px"}
                        bg={iconTeal}
                        me="6px"
                      >
                        {icon}
                      </IconBox>
                      <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                        {title}
                      </Text>
                    </Flex>
                    <Text
                      fontSize="lg"
                      color={textColor}
                      fontWeight="bold"
                      mb="6px"
                      my="6px"
                    >
                      {amount}
                    </Text>
                    <Progress
                      colorScheme="teal"
                      borderRadius="12px"
                      h="5px"
                      value={percentage}
                    />
                  </Flex>
  )
}

export default ChartStatistics