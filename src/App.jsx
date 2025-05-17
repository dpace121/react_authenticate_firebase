import React, { useState, useEffect } from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { Login } from "./components/login";
import { Register } from "./components/register";
import {Profile} from "./components/Profile"
import { ToastContainer } from "react-toastify";
import {auth} from "./components/firebase";

function App() {
const [ user , setUser] = useState();

useEffect(()=>{
  auth.onAuthStateChanged((user) =>{
    setUser(user);
  })
})
  return (
    <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/" 
                element={user ? <Navigate to="/profile" /> :<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profile/>}/>
              </Routes>
              <ToastContainer/>
            </div>
          </div>
        </div>
    </Router>
  )
}

export default App
