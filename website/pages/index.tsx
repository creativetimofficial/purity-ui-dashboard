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
import Container from "components/container"
import { Footer } from "components/footer"
import Header from "components/header"
import SEO from "components/seo"
import NextLink from "next/link"
import * as React from "react"
import { FaArrowRight } from "react-icons/fa"
import type { Member, Sponsor } from "src/types/github"
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
        title="Purity UI Documentation - Most trendiest, complex and innovative Dashboard Made by Creative Tim &amp; Simmmple. Check our latest Free ReactJS Dashboard based on Chakra UI."
        description="Most trendiest, complex and innovative Dashboard Made by Creative Tim &amp; Simmmple. Check our latest Free ReactJS Dashboard based on Chakra UI."
      />
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
                  color={useColorModeValue("teal.300", "teal.300")}
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
                    borderRadius="15px"
                    bg="teal.300"
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
                  borderRadius="15px"
                  as="a"
                  size="lg"
                  h="4rem"
                  px="40px"
                  fontSize="1.2rem"
                  href="https://www.creative-tim.com/product/purity-ui-dashboard"
                  target="__blank"
                >
                  Free Download
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

  return {
    props: {
      githubStars: prettyCount,
    },
  }
}

export default HomePage
