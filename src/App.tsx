import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import DetailsPage from './components/DetailsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
