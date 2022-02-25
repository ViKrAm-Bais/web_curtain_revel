import './App.css';
import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from "react-router-dom";
import WelcomePage from './WelcomePage';

function Curtain() {

  return (
    <>
    <div class="rxWorld">

<div class="rnOuter " tabIndex="0">
       
  <div class="aoTable">
    <div class="aoTableCell">
        <WelcomePage/>
    </div>
</div>
    
    <div class='rnInner'>
        <div class='rnUnit'></div>
        <div class='rnUnit'></div>
        <div class='rnUnit'></div>
        <div class='rnUnit'></div>
        <div class='rnUnit'></div>
        <div class='rnUnit'></div>
        <div class='rnUnit'></div>
        <div class='rnUnit'></div>
        <div class='rnUnit'></div>
        <div class='rnUnit'></div>
        <div class='rnUnit'></div>
        <div class='rnUnit'></div>
        
    </div>
</div>
</div>
    
    </>
  )
}

export default Curtain;
