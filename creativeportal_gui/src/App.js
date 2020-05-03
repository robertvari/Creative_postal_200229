import React from 'react';

import Home from "./component/Home";
import {UserProvider} from "./component/context/UserContext";


function App() {
  return (
  <UserProvider>
        <div className="App">
            <Home/>
        </div>
      </UserProvider>

  );
}

export default App;
