import api from './api';

// Get all products
export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to fetch products');
  }
};

// Get product by ID
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Failed to fetch product with ID ${id}`);
  }
};

// Create a new product
export const createProduct = async (productData) => {
  try {
    // Transform frontend data to match backend expectations
    const transformedData = {
      shopify_id: productData.shopify_id || Date.now().toString(),
      title: productData.title,
      description: productData.description || '',
      price: parseFloat(productData.price),
      sku: productData.sku,
      image_url: productData.image || '', // Map 'image' to 'image_url'
    };

    console.log('Sending data to API:', transformedData);
    const response = await api.post('/products', transformedData);
    console.log('API Response:', response.data);
    
    // Ensure the response has the correct image URL field
    if (response.data) {
      response.data.image_url = response.data.image_url || response.data.image || '';
      console.log('Processed response data:', response.data);
    }
    
    return response.data;
  } catch (error) {
    console.error('Error in createProduct:', error);
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timed out. Please try again.');
    }
    throw new Error(error.response?.data?.error || 'Failed to create product');
  }
};

// Update a product
export const updateProduct = async (id, productData) => {
  try {
    // Transform frontend data to match backend expectations
    const transformedData = {
      title: productData.title,
      description: productData.description || '',
      price: parseFloat(productData.price),
      sku: productData.sku,
      image_url: productData.image || '', // Map 'image' to 'image_url'
    };

    const response = await api.put(`/products/${id}`, transformedData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Failed to update product with ID ${id}`);
  }
};

// Delete a product
export const deleteProduct = async (product_id) => {
  try {
    const response = await api.delete(`/products/${product_id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Failed to delete product with ID ${id}`);
  }
};

// // Search products
// export const searchProducts = async (query) => {
//   try {
//     const response = await api.get(`/products/search?q=${encodeURIComponent(query)}`);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || 'Failed to search products');
//   }
// };

// // Get products by category
// export const getProductsByCategory = async (category) => {
//   try {
//     const response = await api.get(`/products/category/${encodeURIComponent(category)}`);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || `Failed to fetch products in category ${category}`);
//   }
// }; 