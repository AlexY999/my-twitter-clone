import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PostPage from './PostPage';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/post" component={PostPage} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
