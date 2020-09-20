import React  from "react";
import Routes from "./modules/routes"
import TopBar from "./component/topBar"
import {BrowserRouter as Router} from "react-router-dom"

function App () {
    return(
        <div className = 'app'>
            <Router>
                <TopBar />
                <Routes />
            </Router>
            
        </div>
    )
}

export default App