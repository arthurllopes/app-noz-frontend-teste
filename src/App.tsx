import React from 'react';
import { UserContextProvider } from './context/userContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import BooksPage from './pages/BooksPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route
            path="/books"
            element={
              <ProtectedRoute>
                <BooksPage />
              </ProtectedRoute>
            }
          />         
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
