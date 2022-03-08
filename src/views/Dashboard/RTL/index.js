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
  import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
  import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
  import { rtlDashboardTableData, rtlTimelineData, dashboardTableData, timelineData } from "variables/general";
  import ActiveUsers from "../Dashboard/components/ActiveUsers";
  import BuiltByDevelopers from "../Dashboard/components/BuiltByDevelopers";
  import ChartStatistics from "../Dashboard/components/ChartStatistics";
  import MiniStatistics from "../Dashboard/components/MiniStatistics";
  import OrdersOverview from "../Dashboard/components/OrdersOverview";
  import Projects from "../Dashboard/components/Projects";
  import SalesOverview from "../Dashboard/components/SalesOverview";

  import WorkWithTheRockets from "../Dashboard/components/WorkWithTheRockets";

  
  export default function Dashboard() {

    // Chakra Color Mode

    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");
    const overlayRef = React.useRef();
  
    return (
        <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
            <MiniStatistics 
                title={"إجمالي المبيعات"}
                amount={"$53,000"}
                percentage={55}
                icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
            />
          <MiniStatistics
            title={"عملاء جدد"}
            amount={"2,300"}
            percentage={5}
            icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
            <MiniStatistics
              title={"مستخدمو اليوم"}
              amount={"+3,020"}
              percentage={-14}
              icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
            />
          <MiniStatistics
            title={"أموال اليوم"}
            amount={"$173,000"}
            percentage={8}
            icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
        </SimpleGrid>
        <Grid
          templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
          templateRows={{ md: "1fr auto", lg: "1fr" }}
          my="26px"
          gap="24px"
        >
          <BuiltByDevelopers 
            title={"بناها المطورون"}
            name={"لوحة معلومات Purity UI"}
            description={"من الألوان والبطاقات والطباعة إلى العناصر المعقدة ، ستجد الوثائق الكاملة."}
            image={<Image
                src={logoChakra}
                alt="chakra image"
                minWidth={{ md: "300px", lg: "auto" }}
              />}
          />
         <WorkWithTheRockets 
            backgroundImage={peopleImage}
            title={"العمل مع الصواريخ"}
            description={"تكوين الثروة هو لعبة ثورية حديثة ذات محصلة إيجابية. الأمر كله يتعلق بمن يغتنم الفرصة أولاً."}
         />
        </Grid>
        <Grid
          templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
          templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
          gap="24px"
          mb={{ lg: "26px" }}
        >
          <ActiveUsers 
            title={"المستخدمين النشطين"}
            percentage={23}
            chart={<BarChart />}
          />
          <SalesOverview 
            title={"نظرة عامة على المبيعات"}
            percentage={5}
            chart={<LineChart />}
          />  
        </Grid>
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
          templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
          gap="24px"
        >
          <Projects 
            title={"المشاريع"}
            amount={30}
            captions={["Companies", "Members", "Budget", "Completion"]}
            data={rtlDashboardTableData}
          />
          <OrdersOverview 
            title={"نظرة عامة على الطلبات"}
            amount={30}
            data={rtlTimelineData}
          />
          
        </Grid>
      </Flex>
    );
  }
  