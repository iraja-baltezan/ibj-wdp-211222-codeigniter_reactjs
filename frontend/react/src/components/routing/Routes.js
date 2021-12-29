/**
 * routing
 * This directory will contain components that are used to handle the
 * Client-side-routing.
 *
 * Routes.js
 * This switch contains multiple routes. A route is composed of the path and the
 * component to be rendered for that path.
 * The last route declared uses the * wildcard and the PageNotFound component to
 * let the user know that the requested page could not be found.
 */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import UserProfile from '../restricted/user/Profile';
import ClientsTable from '../restricted/client/ViewAll';
import PageNotFound from '../alert/PageNotFound';
import ClientView from '../restricted/client/ViewOne';
import AddClientForm from '../restricted/client/form/AddClient';
import EditClientForm from '../restricted/client/form/EditClient';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={ClientsTable}/>
        <Route path={'/profile'} component={UserProfile}/>
        <Route path={'/client/view/:id'} component={ClientView}/>
        <Route path={'/client/add'} component={AddClientForm}/>
        <Route path={'/client/edit/:id'} component={EditClientForm}/>
        <Route path={'*'} component={PageNotFound}/>
    </Switch>
);
export default Routes;