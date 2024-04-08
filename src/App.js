// react
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// contexts
import useAuthContext from './hooks/useAuthContext';
// components
import RootPage from './pages/RootPage';
// import NavBar from './components/oldNav/NavBar';
import NavControl from './components/navbar/NavControl';
import SignInPage from './pages/SignInPage';
import CreateUserPage from './pages/CreateUserPage';
// import AboutPage from './pages/AboutPage';
import UserSetUpPage from './pages/UserSetUpPage';
import UserHomePage from './pages/UserHomePage';
// import SettingsPage from './pages/SettingsPage';
import AddDataPage from './pages/AddDataPage';
// import AddNewDataSetPage from './pages/AddNewDataSetPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import './styles/app.css';

const App = () => {
  const { authIsReady, user } = useAuthContext();

  // const [loggedInUser, setLoggedInUser] = useState(
  //   !user ? null : { name: user.displayName, email: user.email }
  // );

  return (
    <div className="app">
      {authIsReady && (
        <Router>
          <div className="app--nav">
            <NavControl />
          </div>
          <div className="app--routes">
            <Routes>
              <Route index path="/" element={<RootPage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/create-user" element={<CreateUserPage />} />
              {/* <Route path="/about" element={<AboutPage />} /> */}
              <Route
                path="/user-setup/:userName"
                element={user ? <UserSetUpPage /> : <NotFoundPage />}
              />
              <Route path="/user-home" element={<UserHomePage />} />
              {/* <Route path="/settings" element={<SettingsPage />} /> */}
              <Route path="/add-data" element={<AddDataPage />} />
              {/* <Route path="/add-new-data-set" element={<AddNewDataSetPage />} /> */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <div className="app--footer">
            <Footer />
          </div>
        </Router>
      )}
    </div>
  );
};

export default App;
