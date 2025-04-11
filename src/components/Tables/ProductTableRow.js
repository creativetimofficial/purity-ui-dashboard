import {
  Avatar,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function ProductTableRow(props) {
  const { id, image_url, title, sku, price, description, onView, onEdit, onDelete } = props;
  const textColor = useColorModeValue("gray.700", "white");

  console.log('ProductTableRow props:', { id, image_url, title });

  return (
    <Tr>
      <Td minWidth={{ sm: "100px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar 
            src={image_url} 
            w="50px" 
            borderRadius="12px" 
            me="18px"
            onError={(e) => {
              console.error('Error loading image:', image_url);
              e.target.src = 'https://via.placeholder.com/50x50?text=No+Image';
            }}
          />
        </Flex>
      </Td>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex direction="column">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
            cursor="pointer"
            _hover={{ color: "teal.500" }}
            onClick={onView}
          >
            {title}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {description}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {sku}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          ${price}
        </Text>
      </Td>
      <Td>
        <Flex gap={2}>
          <Button p="0px" bg="transparent" variant="no-hover" onClick={onEdit}>
            <FaEdit color="gray.400" cursor="pointer" />
          </Button>
          <Button p="0px" bg="transparent" variant="no-hover" onClick={onDelete}>
            <FaTrash color="gray.400" cursor="pointer" />
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
}

export default ProductTableRow; 