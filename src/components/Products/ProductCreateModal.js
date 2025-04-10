import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

function ProductCreateModal({ isOpen, onClose, onCreateProduct }) {
  const textColor = useColorModeValue("gray.700", "white");
  const [formData, setFormData] = useState({
    title: "",
    sku: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProduct(formData);
    setFormData({
      title: "",
      sku: "",
      price: "",
      description: "",
      image: "",
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={textColor}>Create New Product</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel color={textColor}>Title</FormLabel>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Product title"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color={textColor}>SKU</FormLabel>
                <Input
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  placeholder="Product SKU"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color={textColor}>Price</FormLabel>
                <Input
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Product price"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color={textColor}>Description</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Product description"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color={textColor}>Image URL</FormLabel>
                <Input
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Product image URL"
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal" type="submit">
              Create Product
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default ProductCreateModal; 