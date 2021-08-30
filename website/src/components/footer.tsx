import React from "react"
import { Box, Icon, Text, Stack, Link, chakra } from "@chakra-ui/react"
import { IoLogoTwitter, IoLogoFacebook } from "react-icons/io"
import { FaYoutube } from "react-icons/fa"
import { DiGithubBadge } from "react-icons/di"

type FooterLinkProps = {
  icon?: React.ElementType
  href?: string
  label?: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
)

const links = [
  {
    icon: DiGithubBadge,
    label: "GitHub",
    href: "https://github.com/creativetimofficial",
  },
  {
    icon: IoLogoTwitter,
    label: "Twitter",
    href: "https://twitter.com/creativetim",
  },
  {
    icon: IoLogoFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/CreativeTim",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
  },
]

const RomaniaFlag = (props) => (
  <chakra.svg
    display="inline-block"
    mx="3"
    h="16px"
    w="auto"
    viewBox="0 0 48 48"
    verticalAlign="middle"
    {...props}
  >
    <title>Romania</title>
    <g>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
        <path
          fill="#002B7F"
          d="M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h8V5H4z"
        />
        <path fill="#FCD116" d="M12 5h12v26H12z" />
        <path
          fill="#CE1126"
          d="M32 5h-8v26h8c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"
        />
      </svg>
    </g>
  </chakra.svg>
)

export const Footer = () => (
  <Box as="footer" mt={12} textAlign="center">
    <Text fontSize="sm">
      <span>
        Proudly made in
        <RomaniaFlag />
        by &nbsp;
      </span>
      <a target="_blank" href="https://www.creative-tim.com?ref=docs-pud">
        Creative Tim{" "}
      </a>
      &amp;
      <a target="_blank" href="https://www.simmmple.com?ref=docs-pud">
        {" "}
        Simmmple
      </a>
    </Text>
    <Stack mt={4} direction="row" spacing="12px" justify="center">
      {links.map((link) => (
        <FooterLink key={link.href} {...link} />
      ))}
    </Stack>
  </Box>
)

export default Footer
