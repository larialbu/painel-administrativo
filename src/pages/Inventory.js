import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/productsData';
import { Container, Typography, Box, Grid, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material';
import { Delete, Edit, Add } from '@mui/icons-material';


const Inventory = () => {
  const [products, setProducts] = useState(productsData);
  const [open, setOpen] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    stock: 0,
    image: '',
  });

  const handleAddProduct = () => {
    setOpen(true);
    setEditProductId(null);
    setFormData({
      name: '',
      price: 0,
      stock: 0,
      image: '',
    });
  };

  const handleRemoveProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  const handleEditProduct = (product) => {
    setOpen(true);
    setEditProductId(product.id);
    setFormData({
      name: product.name,
      price: product.price,
      stock: product.stock,
      image: product.image,
    });
  };

  const handleSaveProduct = () => {
    if (editProductId !== null) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === editProductId
            ? {
                ...product,
                name: formData.name,
                price: formData.price,
                stock: formData.stock,
                image: formData.image,
              }
            : product
        )
      );
    } else {
      const newProduct = {
        id: products.length + 1,
        name: formData.name,
        price: formData.price,
        stock: formData.stock,
        image: formData.image,
      };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Box mt={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Inventory
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleAddProduct}>
              Add Product
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" startIcon={<Delete />} onClick={handleRemoveProduct}>
              Delete Product
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" startIcon={<Edit />} onClick={handleEditProduct}>
              Edit Product
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{editProductId !== null ? 'Edit Product' : 'Add Product'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the product details:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Stock"
            type="number"
            fullWidth
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Image URL"
            fullWidth
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveProduct} color="primary">
            {editProductId !== null ? 'Save Changes' : 'Add Product'}
          </Button>
        </DialogActions>
      </Dialog>
      <Box mt={3}>
        <Typography variant="h5" align="center">
          Products:
        </Typography>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Inventory;

