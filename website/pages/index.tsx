import {
  Box,
  BoxProps,
  Button,
  chakra,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { AdBanner } from "components/chakra-pro/ad-banner"
import Container from "components/container"
import { Footer } from "components/footer"
import Header from "components/header"
import SEO from "components/seo"
import NextLink from "next/link"
import * as React from "react"
import { DiGithubBadge } from "react-icons/di"
import { FaArrowRight } from "react-icons/fa"
import type { Member, Sponsor } from "src/types/github"
import { getAllContributors } from "utils/get-all-contributors"
import { getAllMembers } from "utils/get-all-members"
import { getAllSponsors } from "utils/get-all-sponsors"
import { getGithubStars } from "utils/get-github-stars"

const Feature = ({ title, icon, children, ...props }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      rounded="12px"
      shadow="base"
      p="40px"
      {...props}
    >
      <Flex
        rounded="full"
        w="12"
        h="12"
        bg="teal.500"
        align="center"
        justify="center"
      >
        <Icon fontSize="24px" color="white" as={icon} />
      </Flex>
      <Heading as="h3" size="md" fontWeight="semibold" mt="1em" mb="0.5em">
        {title}
      </Heading>
      <Text fontSize="lg" opacity={0.7}>
        {children}
      </Text>
    </Box>
  )
}

interface StatBoxProps extends BoxProps {
  icon?: React.ElementType
  title: string
  description: string
}

const StatBox = (props: StatBoxProps) => {
  const { icon: StatIcon, title, description, ...rest } = props
  return (
    <Flex
      direction="column"
      align={{ base: "center", md: "flex-start" }}
      pl={{ base: "0", md: "8" }}
      borderLeft="2px solid"
      borderLeftColor="yellow.200"
      {...rest}
    >
      <Box fontSize={{ base: "4rem", md: "6rem" }} lineHeight="1em" mb="20px">
        {title}
      </Box>
      <Stack isInline align="center">
        <StatIcon size="24px" />
        <Text>{description}</Text>
      </Stack>
    </Flex>
  )
}

interface HomePageProps {
  members: Member[]
  githubStars: string
  sponsors: {
    companies: Sponsor[]
    individuals: Sponsor[]
  }
}

const HomePage = ({ members, sponsors, githubStars }: HomePageProps) => {
  return (
    <>
      <SEO
        title="Chakra UI - A simple, modular and accessible component library that gives you the building blocks you need to build your React applications."
        description="Simple, Modular and Accessible UI Components for your React Applications. Built with Styled System"
      />
      <AdBanner />
      <Header />
      <Box mb={20}>
        <Box as="section" pt="6rem" pb={{ base: "0", md: "5rem" }}>
          <Container>
            <Box textAlign="center">
              <chakra.h1
                maxW="16ch"
                mx="auto"
                fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                fontFamily="heading"
                letterSpacing="tighter"
                fontWeight="extrabold"
                mb="16px"
                lineHeight="1.2"
              >
                Purity UI Dashboard
                <Box
                  as="span"
                  color={useColorModeValue("teal.500", "teal.300")}
                >
                  {" "}
                  Documentation
                </Box>
              </chakra.h1>

              <Text
                maxW="600px"
                mx="auto"
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={{ base: "lg", lg: "xl" }}
                mt="6"
              >
                Most trendiest, complex and innovative Dashboard Made by
                Creative Tim & Simmmple. Check our latest Free ReactJS Dashboard
                based on Chakra UI.
              </Text>

              <Stack
                mt="10"
                spacing="4"
                justify="center"
                direction={{ base: "column", sm: "row" }}
              >
                <NextLink href="/docs/getting-started" passHref>
                  <Button
                    h="4rem"
                    px="40px"
                    fontSize="1.2rem"
                    as="a"
                    size="lg"
                    colorScheme="teal"
                    rightIcon={<FaArrowRight fontSize="0.8em" />}
                  >
                    Documentation
                  </Button>
                </NextLink>
                <Button
                  as="a"
                  size="lg"
                  h="4rem"
                  px="40px"
                  fontSize="1.2rem"
                  href="https://github.com/creativetimofficial/purity-ui-dashboard/"
                  target="__blank"
                  leftIcon={<DiGithubBadge size="1.5em" />}
                >
                  GitHub
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const { prettyCount } = await getGithubStars()
  const contributors = getAllContributors()
  const members = getAllMembers()
  const sponsors = getAllSponsors()

  return {
    props: {
      githubStars: prettyCount,
      members,
      contributors,
      sponsors,
    },
  }
}

export default HomePage
