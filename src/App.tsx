import { Loader } from '@mantine/core';
import React, { ReactNode, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfirmPassword } from './pages/auth/confirm-password/confirm';
import { ForgotPassword } from './pages/auth/forgotPassword/forgot';
import { Login } from './pages/auth/login/login';
import Onboarding from './pages/onboarding';
import ProfileTabs from './pages/profile/profile';
import Timesheet1 from './pages/timesheet';
import TransactionPage from './pages/leave/LeaveTransaction';

const DashboardLayout = React.lazy(
  () => import('./components/layout/DashboardLayout')
);
const DashBoard = React.lazy(() => import('./pages/dashboard'));
const Employee = React.lazy(() => import('./pages/employee'));
// const Timesheet = React.lazy(() => import('./pages/timesheet'));
// const Blog = React.lazy(() => import('./pages/blog'));
const EmployeeUserProfile = React.lazy(
  () => import('./pages/employee/employeeProfile')
);
const EmployeeOnboard = React.lazy(
  () => import('./pages/onboard/employeeOnboard')
);

interface Props {
  children: ReactNode;
}

function WrapSuspense({ children }: Props) {
  return <Suspense fallback={<Loader variant="dots" />}>{children}</Suspense>;
}

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0',
            }}
          >
            <Loader variant="oval" />
          </div>
        }
      >
        <Routes>
          {/* Public Routes */}
          <Route
            path="/onboarding"
            element={
              <WrapSuspense>
                <Onboarding />
              </WrapSuspense>
            }
          />
          <Route
            path="/login"
            element={
              <WrapSuspense>
                <Login />
              </WrapSuspense>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <WrapSuspense>
                <ForgotPassword />
              </WrapSuspense>
            }
          />
          <Route
            path="/confirm-password"
            element={
              <WrapSuspense>
                <ConfirmPassword />
              </WrapSuspense>
            }
          />
          {/* Protected Routes */}
          <Route element={<DashboardLayout />}>
            <Route
              path="/"
              element={
                <WrapSuspense>
                  <DashBoard />
                </WrapSuspense>
              }
            />
            <Route
              path="/employee"
              element={
                <WrapSuspense>
                  <Employee />
                </WrapSuspense>
              }
            />
            <Route
              path="/timesheet"
              element={
                <WrapSuspense>
                  <Timesheet1 />
                </WrapSuspense>
              }
            />
            <Route
              path="/employee-profile"
              element={
                <WrapSuspense>
                  <EmployeeUserProfile />
                </WrapSuspense>
              }
            />
            <Route
              path="/emponboard"
              element={
                <WrapSuspense>
                  <EmployeeOnboard />
                </WrapSuspense>
              }
            />

            <Route
              path="/profile"
              element={
                <WrapSuspense>
                  <ProfileTabs />
                </WrapSuspense>
              }
            />

            <Route
              path="/leave-transaction"
              element={
                <WrapSuspense>
                  <TransactionPage />
                </WrapSuspense>
              }
            />
            {/* <Route
              path="/blog"
              element={
                <WrapSuspense>
                  <Blog />
                </WrapSuspense>
              }
            /> */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
