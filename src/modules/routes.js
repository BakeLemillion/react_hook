import React from 'react'
import { Route, Switch } from "react-router-dom";
import GlobalFeed from "./pages/globalFeed"
import Article from "./pages/artical"
import Authentication from "./pages/authentication"
import TagFeed from './pages/tagFeed'
import YourFeed from './pages/yourFeed'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={GlobalFeed} />
            <Route path="/feed" component={YourFeed} />
            <Route path="/tags/:slug" component={TagFeed} />
            <Route path="/login" component={Authentication} />
            <Route path="/register" component={Authentication} />
            <Route path="/articles/:slug" component={Article}exact />
        </Switch>
    )
}