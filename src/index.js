import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
=======
import "./index.css";  
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Toaster } from "react-hot-toast";

const store=configureStore({
  reducer:rootReducer,  
})

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(
   
  <React.StrictMode>   
    <Provider store={store}> 
    <BrowserRouter>
      <App />  
      <Toaster/> 
    </BrowserRouter> 
    </Provider> 
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
  </React.StrictMode>
);
