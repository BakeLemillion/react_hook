import React from 'react'
import { Route, Switch } from "react-router-dom";
import GlobalFeed from "./pages/globalFeed/index"
import Article from "./pages/artical/index"
import Authentication from "./pages/authentication"
import TagFeed from './pages/tagFeed'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={GlobalFeed} />
            <Route exact path="/tags/:slug" component={TagFeed} />
            <Route exact path="/login" component={Authentication} />
            <Route exact path="/register" component={Authentication} />
            <Route path="/articles/:slug" component={Article} />
        </Switch>
    )
}