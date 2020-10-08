import React from "react";
import Routes from "./modules/routes";
import TopBar from "./component/topBar";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./context/currentUser";

function App() {
  return (
    <CurrentUserProvider className="app">
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </CurrentUserProvider>
  );
}

export default App;
