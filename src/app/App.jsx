import React from 'react';
import './app.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/RouterPages/homePage/HomePage';
import AboutUs from './pages/RouterPages/aboutUS/AboutUs';
import ContactUS from './pages/RouterPages/contactUS/ContactUS';
import Gallery from './pages/RouterPages/gallery/Gallery';
import Services from './pages/RouterPages/services/Services';
import Page404 from './pages/RouterPages/page-404/Page404';
import Navbar from './pages/RouterPages/navbar/Navbar';
import UserParams from './pages/RouterPages/userParams/UserParams';
import Search from './pages/RouterPages/search/Search';
 

function App() {
  return (
    <>
      <div className="main">
        <div className="m-auto">

 <Navbar/>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={ContactUS} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/services" component={Services} />
            <Route path="/search" component={Search} />

            <Route path="/user/:fname/:lname" component={UserParams} />
            <Redirect to="/" />
            
            <Route component={Page404} />

          </Switch>
 
 
 
        </div>
      </div>
    </>
  );
}

export default App;
