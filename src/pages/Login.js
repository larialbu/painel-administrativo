import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Avatar, CssBaseline } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const useStyles = {
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    margin: '8px',
    backgroundColor: '#1976d2',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '24px',
  },
  form: {
    width: '100%',
    marginTop: '8px',
  },
  submit: {
    margin: '24px 0',
  },
};

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // verifica as credenciais (hardcoded)
    if (username === 'admin' && password === 'admin123') {
      onLogin(true);
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={useStyles.root}>
        <div style={useStyles.paper}>
          <Avatar style={useStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={useStyles.title}>
            Login
          </Typography>
          <form style={useStyles.form}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              style={useStyles.submit}
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
