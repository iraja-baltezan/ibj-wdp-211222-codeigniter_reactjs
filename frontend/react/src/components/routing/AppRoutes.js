/**
 * routing
 * This directory will contain components that are used to handle the
 * Client-side-routing.
 *
 * Routes.js
 * This Routes contains multiple routes. A route is composed of the path and the
 * component to be rendered for that path.
 * The last route declared uses the * wildcard and the PageNotFound component to
 * let the user know that the requested page could not be found.
 */
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import UserProfile from '../restricted/user/Profile';
import ClientsTable from '../restricted/client/ViewAll';
import PageNotFound from '../alert/PageNotFound';
import ClientView from '../restricted/client/ViewOne';
import AddClientForm from '../restricted/client/form/AddClient';
import EditClientForm from '../restricted/client/form/EditClient';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<ClientsTable/>} />
        <Route path="profile/" element={<UserProfile/>} />
        <Route path='client/view/:id' element={<ClientView/>} />
        <Route path='client/add/' element={<AddClientForm/>} />
        <Route path='client/edit/:id' element={<EditClientForm/>} />
        <Route path='*' element={<PageNotFound/>} />
    </Routes>
);
export default AppRoutes;