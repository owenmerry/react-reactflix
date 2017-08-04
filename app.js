//import React components
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';

//Pages
import Home from './pages/Homepage';
import Login from './pages/Login';
import Signin from './pages/Signin';


//Sass
require('./css/mystyles.scss');


// Render
ReactDom.render(
    <BrowserRouter>
        <div className="app_all">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
        </div>
    </BrowserRouter>
    ,
    document.getElementById('app')
);


 


