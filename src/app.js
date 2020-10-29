import React from "react";
import Routes from "./modules/routes";
import TopBar from "./component/topBar";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./context/currentUser";
import CurrentUserChecker from "./component/currentUserChecker";

function App() {
  return (
    <CurrentUserProvider className="app">
      <CurrentUserChecker>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
}

export default App;