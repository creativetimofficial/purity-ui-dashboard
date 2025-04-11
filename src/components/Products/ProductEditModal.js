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
  Image,
  Box,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function ProductEditModal({ isOpen, onClose, onEditProduct, product }) {
  const textColor = useColorModeValue("gray.700", "white");
  const [formData, setFormData] = useState({
    title: "",
    sku: "",
    price: "",
    description: "",
    image: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        sku: product.sku || "",
        price: product.price || "",
        description: product.description || "",
        image: product.image_url || "",
      });
      setErrors({});
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.sku.trim()) newErrors.sku = "SKU is required";
    if (!formData.price) newErrors.price = "Price is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await onEditProduct(product.shopify_id, formData);
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={textColor}>Edit Product</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isRequired isInvalid={!!errors.title}>
                <FormLabel color={textColor}>Title</FormLabel>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Product title"
                />
                <FormErrorMessage>{errors.title}</FormErrorMessage>
              </FormControl>
              
              <FormControl isRequired isInvalid={!!errors.sku}>
                <FormLabel color={textColor}>SKU</FormLabel>
                <Input
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  placeholder="Product SKU"
                />
                <FormErrorMessage>{errors.sku}</FormErrorMessage>
              </FormControl>
              
              <FormControl isRequired isInvalid={!!errors.price}>
                <FormLabel color={textColor}>Price</FormLabel>
                <Input
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Product price"
                />
                <FormErrorMessage>{errors.price}</FormErrorMessage>
              </FormControl>
              
              <FormControl isRequired isInvalid={!!errors.description}>
                <FormLabel color={textColor}>Description</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Product description"
                />
                <FormErrorMessage>{errors.description}</FormErrorMessage>
              </FormControl>
              
              <FormControl>
                <FormLabel color={textColor}>Image URL</FormLabel>
                <Input
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Product image URL"
                />
                {formData.image && (
                  <Box mt={2} borderRadius="md" overflow="hidden" maxH="200px">
                    <Image
                      src={formData.image}
                      alt="Product preview"
                      objectFit="cover"
                      width="100%"
                    />
                  </Box>
                )}
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button 
              colorScheme="teal" 
              type="submit" 
              isLoading={isLoading}
            >
              Save Changes
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default ProductEditModal; 