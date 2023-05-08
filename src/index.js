import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Toaster} from "react-hot-toast"
import AppcontextProvider from './context/ProductContext';
import Mycartcontext from './context/Cartcontext';
// import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <Auth0Provider
//   domain="dev-8abg8h56hax0lrlt.us.auth0.com"
//   clientId="RmX0nsZgDcqbW7YZtlH9sISFJcZOCTwP"
//   authorizationParams={{
//     redirect_uri: window.location.origin
//   }}
// >
  <BrowserRouter>
  
    <AppcontextProvider>
      <Mycartcontext>
       <App/>
       </Mycartcontext>
    </AppcontextProvider>

      <Toaster/>
  </BrowserRouter>
  // </Auth0Provider>

);


