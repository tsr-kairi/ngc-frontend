import { Loader } from '@mantine/core';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login/login';
import ForgotPassword from './pages/auth/forgotPassword/forgot';
import ConfirmPassword from './pages/auth/confirm-password/confirm';

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loader variant="dots" />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
export default App;
