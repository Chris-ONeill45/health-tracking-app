// styles
import './styles/app.css';
// react
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
// contexts
import useAuthContext from './hooks/useAuthContext';
// layouts
import RootLayout from './layouts/RootLayout';
// utils
import PrivateRoutes from './utils/PrivateRoutes';
// pages
import AboutPage from './pages/AboutPage';
import CreateUserPage from './pages/CreateUserPage';
import NotFoundPage from './pages/NotFoundPage';
import RootPage from './pages/RootPage';
import SignInPage from './pages/SignInPage';
import UserHomePage from './pages/UserHomePage';
import UserSetUpPage from './pages/UserSetUpPage';

const App = () => {
  const { authIsReady } = useAuthContext();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<RootPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="create-user" element={<CreateUserPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="user-setup/:displayName" element={<UserSetUpPage />} />
          <Route path="user-home" element={<UserHomePage />} />
          <Route path="settings" element={<UserHomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
    <div className="app">
      {authIsReady && <RouterProvider router={router} />}
    </div>
  );
};
export default App;
