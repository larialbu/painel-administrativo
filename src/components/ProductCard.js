import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Price: ${product.price}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Stock: {product.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
