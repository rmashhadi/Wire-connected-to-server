import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import ProfilePage from "./Components/Profile/ProfilePage";
import LoginPage from "./Components/Login/LoginPage";
import ChatPage from "./Components/Chat/ChatPage";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import infoSender from "./reducer/reducers";
import { Provider } from "react-redux";
import Back from "./Components/Login/back.jsx";
import Starter from "./Components/Login/Starter";
import SignUp from "./Components/Login/SignUp";
// import FormControlLabelPosition from "./materials/Checkbox";
const store = createStore(infoSender, applyMiddleware(logger));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Starter} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile/" component={ProfilePage} />
          <Route exact path="/chat/" component={ChatPage} />
          <Route exact path="/back/" component={Back} />
          {/* <Route exact path="/B" component={FormControlLabelPosition} /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
