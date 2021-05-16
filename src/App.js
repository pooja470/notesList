import React from 'react';
import Login from './container/Login';
import MainContainer from './container/MainContainer';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function App(){

  return(
   <div className="App">
   <Router>

   <Switch>
   <Route exact path="/notes">
   <MainContainer/>
</Route>
      <Route exact path="/" >
   <Login/>
    </Route>


   </Switch>
   </Router>
   </div>


  )
}

export default App;
