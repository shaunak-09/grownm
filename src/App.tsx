import { useState,useEffect } from 'react';
import Form from "./components/form"
import axios from "axios"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/home';

import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {

 

  return (
    <div className='app'>
      <ToastContainer />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/home" element={<Home />} />
      </Routes></BrowserRouter>
    </div>
  )
}

export default App
