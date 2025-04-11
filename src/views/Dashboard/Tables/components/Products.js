// Chakra imports
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  useColorModeValue,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Box,
  HStack,
  Spinner,
  Center,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import ProductTableRow from "components/Tables/ProductTableRow";
import ProductViewModal from "components/Products/ProductViewModal";
import ProductCreateModal from "components/Products/ProductCreateModal";
import ProductEditModal from "components/Products/ProductEditModal";
import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { getProducts, createProduct, updateProduct, deleteProduct } from "services/productService";

const Products = ({ title, captions, data: initialData }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("title");
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const cancelRef = useRef();
  const toast = useToast();
  
  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);
  
  
  const ResponsiveDebug = () => {
    const [breakpoint, setBreakpoint] = useState('');
    
    useEffect(() => {
      const updateBreakpoint = () => {
        const width = window.innerWidth;
        if (width < 480) setBreakpoint('xs');
        else if (width < 768) setBreakpoint('sm');
        else if (width < 992) setBreakpoint('md');
        else if (width < 1280) setBreakpoint('lg');
        else setBreakpoint('xl');
      };
      
      updateBreakpoint();
      window.addEventListener('resize', updateBreakpoint);
      return () => window.removeEventListener('resize', updateBreakpoint);
    }, []);
    
    return (
      <Box 
        position="fixed" 
        bottom="10px" 
        right="10px" 
        bg="black" 
        color="white" 
        p="2" 
        borderRadius="md" 
        zIndex="9999"
      >
        {breakpoint}
      </Box>
    );
  };

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getProducts();
      console.log(data)
      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      setError("Failed to load products. Please try again later.");
      console.error("Error fetching products:", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle search
  useEffect(() => {
    const filtered = products.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);
  
  // Handle sorting
  useEffect(() => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (sortField === "price") {
        return sortDirection === "asc" 
          ? parseFloat(a[sortField]) - parseFloat(b[sortField])
          : parseFloat(b[sortField]) - parseFloat(a[sortField]);
      }
      
      if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
    setFilteredProducts(sorted);
  }, [sortField, sortDirection]);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };
  
  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setIsViewModalOpen(true);
  };
  
  const handleCreateProduct = async (newProduct) => {
    try {
      setIsLoading(true);
      const createdProduct = await createProduct(newProduct);
      
      // Simple approach: just add the created product to the list
      setProducts([...products, createdProduct]);
      
      toast({
        title: "Product created",
        description: `${createdProduct.title} has been created successfully.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      const isTimeout = err.message.includes('timed out');
      toast({
        title: isTimeout ? "Request Timeout" : "Error creating product",
        description: isTimeout 
          ? "The request took too long to complete. Please try again." 
          : err.message || "An error occurred while creating the product.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };
  
  const handleUpdateProduct = async (productId, updatedData) => {
    try {
      setIsLoading(true);
      const updatedProduct = await updateProduct(productId, updatedData);
      
      // Update the products list with the edited product
      setProducts(products.map(p => p.shopify_id === productId ? updatedProduct : p));
      
      toast({
        title: "Product updated",
        description: `${updatedProduct.title} has been updated successfully.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Error updating product",
        description: err.message || "An error occurred while updating the product.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      throw err; // Re-throw to let the modal handle the error
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setIsDeleteDialogOpen(true);
  };
  
  const handleDeleteConfirm = async () => {
    if (!productToDelete) return;
    
    try {
      setIsLoading(true);
      await deleteProduct(productToDelete.shopify_id);
      setProducts(products.filter(p => p.shopify_id !== productToDelete.shopify_id));
      toast({
        title: "Product deleted",
        description: `${productToDelete.title} has been deleted successfully.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Error deleting product",
        description: err.message || "An error occurred while deleting the product.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
      setIsDeleteDialogOpen(false);
      setProductToDelete(null);
    }
  };
  
  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
    setProductToDelete(null);
  };
  
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px' justifyContent="space-between" alignItems="center" mb="20px">
        <div>
            <Text fontSize='xl' color={textColor} fontWeight='bold'>{title}</Text>
          </div>
        <Flex >
          
          <Button
            leftIcon={<FaPlus />}
            colorScheme="teal"
            variant="solid"
            size={{ base: "sm", md: "md" }}
            onClick={() => setIsCreateModalOpen(true)}
            isLoading={isLoading}
            px={{ base: "10px", md: "20px" }}
            height={{ base: "36px", md: "40px" }}
            fontSize={{ base: "sm", md: "md" }}
          >
            <Text display={{ base: "none", sm: "block" }}>Create Product</Text>
            <Text display={{ base: "block", sm: "none" }}>Create</Text>
          </Button>
        </Flex>
      </CardHeader>

      <div>
        <Box mb={6}>
          <Flex direction="column" gap={4}>
            <HStack spacing={4} justify="flex-start" align="center">
              <InputGroup maxW="300px">
                <InputLeftElement pointerEvents="none">
                  <FaSearch color="gray.300" />
                </InputLeftElement>
                <Input 
                  placeholder="Search products..." 
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </InputGroup>
              <Select 
                placeholder="Sort by" 
                value={sortField}
                onChange={(e) => handleSort(e.target.value)}
                width="200px"
              >
                <option value="title">Title</option>
                <option value="sku">SKU</option>
                <option value="price">Price</option>
              </Select>
            </HStack>
          </Flex>
        </Box>
        
        {error && (
          <Text color="red.500" mb={4}>
            {error}
          </Text>
        )}
        
        {isLoading ? (
          <Center py={10}>
            <Spinner size="xl" color="teal.500" />
          </Center>
        ) : (
          <Box mt={4}>
            <Table variant='simple' color={textColor}>
              <Thead>
                <Tr my='.8rem' pl='0px' color='gray.400'>
                  {captions.map((caption, idx) => {
                    const field = caption.toLowerCase();
                    const isSortable = ["title", "sku", "price"].includes(field);
                    return (
                      <Th 
                        color='gray.400' 
                        key={idx} 
                        ps={idx === 0 ? "0px" : null}
                        cursor={isSortable ? "pointer" : "default"}
                        onClick={isSortable ? () => handleSort(field) : undefined}
                      >
                        {caption}
                        {isSortable && sortField === field && (
                          <span> {sortDirection === "asc" ? "↑" : "↓"}</span>
                        )}
                      </Th>
                    );
                  })}
                </Tr>
              </Thead>
              <Tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((row) => {
                    // console.log(row);
                    return (
                      <ProductTableRow
                        key={row.shopify_id}
                        id={row.shopify_id}
                        image_url={row.image_url}
                        title={row.title}
                        sku={row.sku}
                        price={row.price}
                        description={row.description}
                        onView={() => handleViewProduct(row)}
                        onEdit={() => handleEditProduct(row)}
                        onDelete={() => handleDeleteClick(row)}
                      />
                    );
                  })
                ) : (
                  <Tr>
                    <Td colSpan={captions.length} textAlign="center" py={10}>
                      <Text color="gray.500">No products found</Text>
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </Box>
        )}
      </div>
      
      <CardBody>
        {/* This CardBody is kept empty for future additions */}
      </CardBody>
      
      {/* View Modal */}
      <ProductViewModal 
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        product={selectedProduct}
      />
      
      {/* Create Modal */}
      <ProductCreateModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateProduct={handleCreateProduct}
      />
      
      {/* Edit Modal */}
      <ProductEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onEditProduct={handleUpdateProduct}
        product={selectedProduct}
      />
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog
        isOpen={isDeleteDialogOpen}
        leastDestructiveRef={cancelRef}
        onClose={handleDeleteCancel}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Product
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete {productToDelete?.title}? This action cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleDeleteCancel}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeleteConfirm} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Card>
  );
};



export default Products; 