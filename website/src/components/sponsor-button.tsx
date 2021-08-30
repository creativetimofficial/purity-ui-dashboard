import React from "react"
import { Box, BoxProps, Icon } from "@chakra-ui/react"
import siteConfig from "configs/site-config"

const DownloadButton = (props: BoxProps) => (
  <Box
    display={{ base: "none", lg: "flex" }}
    alignItems="center"
    as="a"
    aria-label="Free Download"
    href={siteConfig.freeDownload.url}
    target="_blank"
    rel="noopener noreferrer"
    bg="gray.50"
    borderWidth="1px"
    borderColor="gray.200"
    px="1em"
    minH="36px"
    borderRadius="md"
    fontSize="sm"
    color="gray.800"
    outline="0"
    transition="all 0.3s"
    _hover={{
      bg: "gray.100",
      borderColor: "gray.300",
    }}
    _active={{
      borderColor: "gray.200",
    }}
    _focus={{
      boxShadow: "outline",
    }}
    {...props}
  >
    <Box as="strong" lineHeight="inherit" fontWeight="semibold">
      Free Download
    </Box>
  </Box>
)

export default DownloadButton
