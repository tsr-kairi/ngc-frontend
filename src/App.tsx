/* eslint-disable no-bitwise */
import { Loader } from '@mantine/core';
import React, { ReactNode, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { LeaveManagement } from './pages/leave/LeaveManagement';
import { LeaveTransaction } from './pages/leave/LeaveTransaction';
import Onboarding from './pages/onboarding';
import ProfileTabs from './pages/profile/profile';
import SalaryLoan from './pages/salary/loan';
import SalaryPaylisp from './pages/salary/payslip';
import SalaryReview from './pages/salary/review';
import SalaryRevisionView from './pages/salary/revisionview';
import Timesheet1 from './pages/timesheet';
import TimeTable from './pages/timetable';
import ResetPassword from './pages/auth/resetPassword';
import Login from './pages/auth/login';
import ForgotPassword from './pages/auth/forgotPassword';
import LeaveManagementManager from './pages/leaveManagementSide/leaveManagement';

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
    <HashRouter>
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0',
              height: '100vh',
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
            path="/reset-password"
            element={
              <WrapSuspense>
                <ResetPassword />
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
                  <LeaveTransaction />
                </WrapSuspense>
              }
            />
            <Route
              path="/leave-management"
              element={
                <WrapSuspense>
                  <LeaveManagement />
                </WrapSuspense>
              }
            />
            <Route
              path="/salary-payslip"
              element={
                <WrapSuspense>
                  <SalaryPaylisp />
                </WrapSuspense>
              }
            />
            <Route
              path="/salary-revision"
              element={
                <WrapSuspense>
                  <SalaryReview />
                </WrapSuspense>
              }
            />
            <Route
              path="/salary-revision-view"
              element={
                <WrapSuspense>
                  <SalaryRevisionView />
                </WrapSuspense>
              }
            />
            <Route
              path="/salary-loan"
              element={
                <WrapSuspense>
                  <SalaryLoan />
                </WrapSuspense>
              }
            />
            <Route
              path="/timetable"
              element={
                <WrapSuspense>
                  <TimeTable />
                </WrapSuspense>
              }
            />
            <Route
              path="/manager/leave-management"
              element={
                <WrapSuspense>
                  <LeaveManagementManager />
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
    </HashRouter>
  );
}
export default App;
