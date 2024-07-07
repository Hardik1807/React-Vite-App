import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DepartmentList from './DepartmentList';

// Define the interface for the JSON data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      alert('Please enter your details before accessing this page.');
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: 'userId', headerName: 'User ID', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 400 },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Details Page
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={posts} columns={columns} />
      </div>
      <DepartmentList />
    </Container>
  );
};

export default DetailsPage;
