import { useState, useEffect } from "react";
import {Routes , Route, Router} from 'react-router-dom'
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  
  return (
    <Routes>
      
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
