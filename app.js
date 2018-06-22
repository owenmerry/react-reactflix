// created by owen merry

//import React components
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';

//Pages
import Home from './pages/Homepage';
import Join from './pages/Join';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Browse from './pages/Browse';


//Sass
require('./css/mystyles.scss');


// Render
ReactDom.render(
    <BrowserRouter>
        <div className="app_all">
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/join" component={Join} />    
            <Route path="/profile" component={Profile} />    
            <Route path="/browse" component={Browse} />    
        </div>
    </BrowserRouter>
    ,
    document.getElementById('app')
);


 


