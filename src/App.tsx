import { Loader } from '@mantine/core';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfirmPassword } from './pages/auth/confirm-password/confirm';
import { ForgotPassword } from './pages/auth/forgotPassword/forgot';
import { Login } from './pages/auth/login/login';
import DashBoard from './pages/client/dashboard';

const DashbordLayout = React.lazy(
  () => import('./components/layout/DashboardLayout')
);

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loader variant="dots" />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />
          {/* Protected Routes */}
          <Route element={<DashbordLayout />}>
            <Route path="/" element={<DashBoard />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
export default App;
