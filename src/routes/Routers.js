import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Foods from '../pages/Foods'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { Menu, Service } from '../sections'
import FoodDetails from '../pages/FoodDetails'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/foods' element={<Foods />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/services' element={<Service />}></Route>
            <Route path='/details' element={<FoodDetails />}></Route>
        </Routes>
    )
}

export default Routers