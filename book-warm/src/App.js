import React from 'react';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import { Route } from "react-router-dom";


const App = () => (
    <div className="ui container">
        <Route path="/" exact component={ HomePage } />
        <Route path="/login" exact component={ LoginPage } />

    </div>);

export default App;