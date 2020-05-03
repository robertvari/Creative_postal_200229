import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./component/Home";
import Login from "./component/user/Login";

function App() {
  return (
    <div className="App">

        <Router>
            <Switch>
                <Route path={"/*"}>
                    <Home/>
                </Route>
                {/*<Route exact path={"/login"}>*/}
                {/*    <Login/>*/}
                {/*</Route>*/}
            </Switch>

        </Router>

    </div>
  );
}

export default App;
