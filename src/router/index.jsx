import { Routes, Route } from 'react-router-dom';
import React from "react";

import Home from "../views/Home";
import Login from "../views/Login";
import Onboarding from '../views/Onboarding';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

