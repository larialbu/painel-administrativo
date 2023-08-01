import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SaleItem = ({ sale }) => {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          Product: {sale.product}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Quantity: {sale.quantity}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Unit Price: ${sale.unitPrice}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Total Price: ${sale.totalPrice}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Date: {sale.date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SaleItem;
