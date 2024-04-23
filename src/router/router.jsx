import React from 'react'
import Navbar from '../components/navs/navs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />} />
            </Routes>
        </BrowserRouter>
    )
}
