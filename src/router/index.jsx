import { Routes, Route } from 'react-router-dom';
import React from "react";

import Home from "../views/Home";
import Login from "../views/Login";


export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

