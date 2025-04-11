import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import React from "react";

function ProductViewModal({ isOpen, onClose, product }) {
  const textColor = useColorModeValue("gray.700", "white");
  
  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={textColor}>Product Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            {product.image_url ? (
              <Image
                src={product.image_url}
                alt={product.title}
                borderRadius="lg"
                maxH="300px"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/300x200?text=No+Image"
              />
            ) : (
              <Box
                height="300px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="gray.100"
                borderRadius="lg"
              >
                <Text color="gray.500">No image available</Text>
              </Box>
            )}
            <Text fontSize="xl" fontWeight="bold" color={textColor}>
              {product.title}
            </Text>
            <HStack justify="space-between">
              <Text fontSize="lg" color={textColor}>
                SKU: {product.sku}
              </Text>
              <Text fontSize="lg" fontWeight="bold" color={textColor}>
                ${product.price}
              </Text>
            </HStack>
            <Text color={textColor}>{product.description}</Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ProductViewModal; 