import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import EmployeeDetail from "./components/EmployeeDetail.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/detail' element={<EmployeeDetail/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
