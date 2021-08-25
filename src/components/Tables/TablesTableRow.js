import React from 'react';
import {Tr, Td, Image, Flex, Text, Progress, Button, Icon, useColorModeValue} from "@chakra-ui/react";

function TablesTableRow(props) {

    const {logo, name, email, subdomain, domain, status, date} = props;
    const textColor = useColorModeValue("gray.700", "white");
    const bgStatus = useColorModeValue("gray.400", "#1a202c");
    const colorStatus = useColorModeValue("white", "gray.400")

    return (
        <Tr>
            <Td minWidth={{sm: "250px"}} pl="0px">
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Image src={logo} w="40px" borderRadius="15px" mr="18px"/>
                    <Flex direction="column">
                        <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">{name}</Text>
                        <Text fontSize="sm" color="gray.400" fontWeight="normal">{email}</Text>
                    </Flex>
                </Flex>
            </Td>

            <Td>
                <Flex direction="column">
                    <Text fontSize="md" color={textColor} fontWeight="bold">{domain}</Text>
                    <Text fontSize="sm" color="gray.400" fontWeight="normal">{subdomain}</Text>
                </Flex>
            </Td>
            <Td>
                <Flex bg={status === "Online" ? "green.400" : bgStatus} w="66px" h="26px" align="center" justify="center" borderRadius="8px">
                    <Text color={status === "Online" ? "white" : colorStatus} fontWeight="bold" fontSize="md">{status}</Text>
                </Flex>
            </Td>
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">{date}</Text>
            </Td>
            <Td>
                <Button p="0px" bg="transparent" variant="no-hover">
                    <Text fontSize="md" color="gray.400" fontWeight="bold" cursor="pointer">Edit</Text>
                </Button>
            </Td>
        </Tr>
    )
}

export default TablesTableRow
