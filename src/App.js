import './App.css';
import React from 'react';
import { BrowserRouter , Switch, Route, Redirect } from 'react-router-dom';
import Curtain from './curtain';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Curtain}/>
        </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
