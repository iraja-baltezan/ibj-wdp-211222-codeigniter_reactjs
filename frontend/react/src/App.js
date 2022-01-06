import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {clearState} from './utility/LocalStorage';
import Authentication from './components/authentication/Authentication';
import { isAuthenticated } from './utility/Authentication';
import Dashboard from './components/restricted/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Root = () => {
    const [isLogged, setIsLogged] = useState(!!isAuthenticated());

    const onLogin = () => {
        setIsLogged(true);
    };

    const onLogout = () => {
        clearState();
        setIsLogged(false);
    };

    return !isLogged ?
        <Authentication
            setIsAuthenticated={onLogin}
        />
        :
        <Dashboard
            logout={onLogout}
        />;
};

let container = document.getElementById('app');
let component = <Root/>;
ReactDOM.render(component, container);