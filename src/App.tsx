import { Loader } from '@mantine/core';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfirmPassword } from './pages/auth/confirm-password/confirm';
import { ForgotPassword } from './pages/auth/forgotPassword/forgot';
import { Login } from './pages/auth/login/login';
import DashBoard from './pages/dashboard';
// import Employee from './pages/employee';
import EmployeeUserProfile from './pages/employee/employeeProfile';
import EmployeeOnboard from './pages/onboard/employeeOnboard';
import Timesheet from './pages/timesheet';
import Employee from './pages/employee';

const DashboardLayout = React.lazy(
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
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<DashBoard />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/timesheet" element={<Timesheet />} />
            <Route path="/employee-profile" element={<EmployeeUserProfile />} />
            <Route path="/emponboard" element={<EmployeeOnboard />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
export default App;
