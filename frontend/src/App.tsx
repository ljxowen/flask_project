import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from '@emotion/react';
import { DialogProvider } from './context/DialogContext';
import SignUp from './routes/SignUp'
import SignIn from './routes/SignIn'
import Home from './routes/Home'
import Design from "./routes/Design"
import UserProfile from './routes/UserProfile';
import macTheme from './context/MacTheme';


function App() {
  useEffect(() => {

  }, [])

  return (
    <Router>
      <ThemeProvider theme={macTheme}>
      <AuthProvider>
      <DialogProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Design" element={<Design />} />
          <Route path="/Profile" element={<UserProfile />} />
          {/* <Route path="/MovieDetail/:id" element={<MovieDetail />} /> */}
        </Routes>
      </DialogProvider>
      </AuthProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
