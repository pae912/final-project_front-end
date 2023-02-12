import React from 'react';
import { Route } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import Home from '../pages/Home';
import Dvd from '../pages/Dvd';
import Loan from '../pages/Loan';
import Nav from '../components/Nav';
import Onsite from '../pages/Onsite';
import Member from '../pages/Member';
import CreateMember from '../components/Member/CreateMember';
import UpdateMember from '../components/Member/UpdateMember';
// import Post from '../components/Member/Post';
import DeleteMember from '../components/Member/DeleteMember';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Nav />}>
            <Route index element={<Home />} />
            <Route path='Dvd' element={<Dvd />} />
            <Route path='Loan' element={<Loan />} />
            <Route path='Onsite' element={<Onsite />} />
            <Route path='Member' element={<Member />} />
            <Route path='CreateMember' element={<CreateMember />} />
            {/* <Route path='/Member/Post' element={<Post />} /> */}
            <Route path='UpdateMember/:M_id' element={<UpdateMember />} />
            <Route path='DeleteMember/:M_id' element={<DeleteMember />} />
        </Route>
    )
)
export default router;
