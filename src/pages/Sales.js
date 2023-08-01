import React from 'react';
import SaleItem from '../components/SaleItem';
import salesData from '../data/salesData';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Sales = () => {
  return (
    <Container>
      <Box mt={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Sales
        </Typography>
        <TableContainer component={Paper} sx={{ backgroundColor: '#f5f5f5' }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#2196f3' }}>
              <TableRow>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Product</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Quantity</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Unit Price</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Total Price</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salesData.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell>
                    <SaleItem sale={sale} />
                  </TableCell>
                  <TableCell>{sale.quantity}</TableCell>
                  <TableCell>${sale.unitPrice}</TableCell>
                  <TableCell>${sale.totalPrice}</TableCell>
                  <TableCell>{sale.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Sales;
