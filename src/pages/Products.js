import React from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/productsData';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CssBaseline } from '@mui/material';

const useStyles = {
  root: {
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  tableContainer: {
    width: '100%',
    marginTop: '20px',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: '#2196f3', 
    color: '#fff', 
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#f5f5f5',
    },
  },
};

const Products = () => {
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div style={useStyles.root}>
        <Typography variant="h4" style={useStyles.title}>
          Products
        </Typography>
        <TableContainer component={Paper} style={useStyles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={useStyles.tableHeaderCell}>ID</TableCell>
                <TableCell style={useStyles.tableHeaderCell}>Name</TableCell>
                <TableCell style={useStyles.tableHeaderCell}>Price</TableCell>
                <TableCell style={useStyles.tableHeaderCell}>Stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productsData.map((product, index) => (
                <TableRow key={product.id} style={index % 2 === 0 ? {} : useStyles.tableRow}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
};

export default Products;
