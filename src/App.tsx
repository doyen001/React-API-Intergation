import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignInPage />}></Route>
      <Route path='/signUp' element={<SignUpPage />}></Route>
    </Routes>
  );
}

export default App;
