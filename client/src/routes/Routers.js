import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Foods from '../pages/Foods'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Discount from '../pages/Discount'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/foods' element={<Foods />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/discount' element={<Discount />}></Route>
        </Routes>
    )
}

export default Routers