import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './screens/home';
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesScreen from './screens/notes/index'
import UserEditScreen from './screens/users/edit'
import PrivateRoute from './components/auth/private_router';

const RoutesWeb = () =>(
    <BrowserRouter>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/register' element={<RegisterScreen/>} />
           <Route path='/login' element={<LoginScreen/>} />
           <Route path='/notes' element={<PrivateRoute><NotesScreen/></PrivateRoute>} />
           <Route path='/users/edit' element={<PrivateRoute><UserEditScreen/></PrivateRoute>} />
       </Routes>
    </BrowserRouter>
)
export default RoutesWeb;
