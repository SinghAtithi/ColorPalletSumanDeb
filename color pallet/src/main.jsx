import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Circle from "./Circle";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/circle">
                    <Circle />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>
);
