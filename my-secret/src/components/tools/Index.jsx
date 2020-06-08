import React from 'react';
import {Route} from 'react-router-dom'
import {Home, LogIn} from '../index'

export default function Index() {
    return (
        <div>
            <Route exact path="/"  component={LogIn} />
            <Home></Home>
        </div>
    );
}