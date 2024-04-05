import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootPage from './pages/RootPage';
import NavBar from './components/NavBar';
import SignInPage from './pages/SignInPage';
import CreateUserPage from './pages/CreateUserPage';
import AboutPage from './pages/AboutPage';
import UserSetUpPage from './pages/UserSetUpPage';
import UserHomePage from './pages/UserHomePage';
import SettingsPage from './pages/SettingsPage';
import AddDataPage from './pages/AddDataPage';
import AddNewDataSetPage from './pages/AddNewDataSetPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import './styles/app.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route index path="/" element={<RootPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/user-setup" element={<UserSetUpPage />} />
          <Route path="/user-home" element={<UserHomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/add-data" element={<AddDataPage />} />
          <Route path="/add-new-data-set" element={<AddNewDataSetPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
