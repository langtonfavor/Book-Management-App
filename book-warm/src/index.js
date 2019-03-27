import { createStore, applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk';
import * as ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from "./App";
import rootReducer from './rootReducer';
import { userLoggedIn } from "./actions/auth";

 const store = createStore(
     rootReducer,
     composeWithDevTools(applyMiddleware(thunk)));


 if(localStorage.bookJWT) {
   const user  = { token: localStorage.bookJWT };
   store.dispatch(userLoggedIn(user));
 }

ReactDOM.render(
    <BrowserRouter>

        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
