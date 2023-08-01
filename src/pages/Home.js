import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Box, Grid, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Avatar } from '@mui/material';
import { ShoppingCart, LocalMall, Inventory, Person } from '@mui/icons-material';
import Copy from '../components/Copy'; 

const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Drawer variant="permanent" anchor="left" open>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Avatar>
                    <Person />
                  </Avatar>
                </ListItemIcon>
                <ListItemText primary="User" />
              </ListItem>
              <Divider />
              <ListItem button component={Link} to="/products">
                <ListItemIcon>
                  <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Visualização de Produtos" />
              </ListItem>
              <ListItem button component={Link} to="/sales">
                <ListItemIcon>
                  <LocalMall />
                </ListItemIcon>
                <ListItemText primary="Visualização de Vendas" />
              </ListItem>
              <ListItem button component={Link} to="/inventory">
                <ListItemIcon>
                  <Inventory />
                </ListItemIcon>
                <ListItemText primary="Gerenciamento de Inventário" />
              </ListItem>
            </List>
            <Divider />
          </Drawer>
        </Grid>
        <Grid item xs={8}>
          <Box mt={3} textAlign="center">
            <Typography variant="h4" gutterBottom>
              Bem vindo, User!
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box mt={3} textAlign="center">
        <Copy />
      </Box>
    </Container>
  );
};

export default Home;
