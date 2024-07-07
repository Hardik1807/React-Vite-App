// src/components/UserForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const UserForm: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        localStorage.setItem('user', JSON.stringify({ name, phone, email }));
        window.location.href = '/details';
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                User Information
            </Typography>
            <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Container>
    );
};

export default UserForm;
