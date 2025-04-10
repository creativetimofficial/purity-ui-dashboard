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
            <Image
              src={product.image}
              alt={product.title}
              borderRadius="lg"
              maxH="300px"
              objectFit="cover"
            />
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