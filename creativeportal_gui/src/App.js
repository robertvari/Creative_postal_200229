import React from 'react';

import Home from "./component/Home";
import {UserProvider} from "./component/context/UserContext";
import {Route, Switch, BrowserRouter as Router,} from "react-router-dom";
import Logout from "./component/user/Logout";
import Login from "./component/user/Login";
import Registration from "./component/user/Registration";


function App() {
  return (
  <UserProvider>
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/user/logout">
                        <Logout/>
                    </Route>

                    <Route path="/user/login">
                        <Login/>
                    </Route>

                    <Route path="/user/registration">
                        <Registration/>
                    </Route>

                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
      </UserProvider>

  );
}

export default App;
